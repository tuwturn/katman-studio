import {test} from 'node:test';
import assert from 'node:assert/strict';
import {traceRegions,signedArea,extrude,buildSTLSurface,exportSVG} from '../src/core.js';
import {vectorizeRegions} from '../src/vectorize.js';
function closed(mesh){const counts=new Map();for(const t of mesh.triangles)for(let i=0;i<3;i++){const a=t[i],b=t[(i+1)%3],key=Math.min(a,b)+':'+Math.max(a,b),c=counts.get(key)||[0,0];c[0]++;c[1]+=a<b?1:-1;counts.set(key,c);}for(const c of counts.values())assert.deepEqual(c,[2,0]);}
const area=r=>r.rings.reduce((n,r)=>n+signedArea(r),0);
function make(labels,w,h){const t=traceRegions(labels,w,h),v=vectorizeRegions(t.ids,w,h,t.regions);return {...t,...v,labels,width:w,height:h,modelWidth:w,baseHeight:.04,baseColor:'#ffffff',palette:[[240,120,20],[30,80,150],[253,253,253]]};}
test('curved shared boundaries replace stair steps without leaving gaps or overlaps',()=>{
 const w=80,h=80,labels=Int16Array.from({length:w*h},(_,i)=>Math.hypot(i%w-40,Math.floor(i/w)-40)<25?1:0),p=make(labels,w,h);
 assert.equal(p.regions.length,2);assert.ok(p.regions.every(r=>r.path.includes('C')));
 assert.ok(Math.abs(p.regions.reduce((n,r)=>n+area(r),0)-w*h)<1e-6);
 const disk=p.regions.find(r=>r.color===1);assert.ok(Math.abs(area(disk)-disk.area)/disk.area<.03);
 assert.ok(disk.rings.flat().some(p=>p.some(n=>Math.abs(n-Math.round(n))>1e-4)));
 assert.ok(p.curveCount<80,'a circle is smooth arcs, not one vector edge per pixel');
 closed(extrude(disk.rings,1,w,h,0,.08));closed(buildSTLSurface(p));
 assert.match(exportSVG(p),/d="MC|d="M[^\"]+C/);
});
test('curved holes and transparent gaps remain closed in 3MF geometry and fused STL',()=>{
 const w=50,h=50,labels=Int16Array.from({length:w*h},(_,i)=>{const r=Math.hypot(i%w-25,Math.floor(i/w)-25);return r<8?-1:r<18?0:-1;}),p=make(labels,w,h);
 assert.equal(p.regions.length,1);assert.equal(p.regions[0].rings.length,2);
 closed(extrude(p.regions[0].rings,1,w,h,0,.08));closed(buildSTLSurface(p));p.baseHeight=0;closed(buildSTLSurface(p));
});
test('junctions share cap and wall vertices even at different heights',()=>{
 const w=16,h=16,labels=Int16Array.from({length:w*h},(_,i)=>i%w<8?0:Math.floor(i/w)<8?1:2),p=make(labels,w,h);
 p.regions.forEach((r,i)=>r.height=[.02,.16,250][i]);
 assert.ok(Math.abs(p.regions.reduce((n,r)=>n+area(r),0)-w*h)<1e-6);
 for(const r of p.regions)closed(extrude(r.rings,1,w,h,0,r.height));closed(buildSTLSurface(p));
});
test('aligned holes do not leave zero-area cap triangles or open mesh edges',()=>{
 const w=80,h=40,labels=Int16Array.from({length:w*h},(_,i)=>{const x=i%w,y=Math.floor(i/w);return y>10&&y<25&&((x>10&&x<25)||(x>40&&x<60))?1:0;}),p=make(labels,w,h);
 for(const r of p.regions)closed(extrude(r.rings,1,w,h,0,.08));closed(buildSTLSurface(p));
});
test('curved interfaces at three-color junctions remain shared and watertight',()=>{
 const w=80,h=80,labels=Int16Array.from({length:w*h},(_,i)=>Math.hypot(i%w-40,Math.floor(i/w)-40)<25?(i%w<40?1:2):0),p=make(labels,w,h);
 p.regions.forEach((r,i)=>r.height=[.02,.16,3][i]);
 assert.ok(Math.abs(p.regions.reduce((n,r)=>n+area(r),0)-w*h)<1e-6);
 for(const r of p.regions)closed(extrude(r.rings,1,w,h,0,r.height));closed(buildSTLSurface(p));
});
test('isolated raster burrs on a straight L baseline do not become vector teeth',()=>{
 const w=160,h=100,labels=Int16Array.from({length:w*h},(_,i)=>{const x=i%w,y=Math.floor(i/w);return ((x>=20&&x<60&&y>=20&&y<80)||(x>=20&&x<140&&y>=60&&y<80)||(y===80&&[32,49,67,86,107].includes(x)))?1:0;}),p=make(labels,w,h);
 const baseline=p.regions.find(r=>r.color===1).rings.flat().filter(p=>p[0]>30&&p[0]<125&&p[1]>77),ys=baseline.map(p=>p[1]);
 assert.ok(Math.max(...ys)-Math.min(...ys)<.25,'a straight design edge should remain straight despite sparse compression specks');
 closed(buildSTLSurface(p));
});
