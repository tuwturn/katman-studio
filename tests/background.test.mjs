import {test} from 'node:test';
import assert from 'node:assert/strict';
import {detectBackground,regionVisible} from '../src/background.js';
import {traceRegions,buildParts,buildSTLSurface,exportSVG} from '../src/core.js';
import {vectorizeRegions} from '../src/vectorize.js';
function fixture(){
 const width=40,height=40,labels=Int16Array.from({length:width*height},(_,i)=>{const x=i%width,y=Math.floor(i/width);return x<6||x>=34||y<6||y>=34?0:x>=16&&x<24&&y>=16&&y<24?0:1;});
 const t=traceRegions(labels,width,height),v=vectorizeRegions(t.ids,width,height,t.regions);
 return {...t,...v,labels,width,height,palette:[[255,255,255],[20,80,150]],modelWidth:40,baseHeight:.04,baseColor:'#222222',backgroundIds:detectBackground(t.ids,width,height,t.regions)};
}
test('background toggle removes only border-connected color and restores all edits',()=>{
 const p=fixture();assert.equal(p.backgroundIds.length,1);const lettering=p.regions.find(r=>r.color===0&&!p.backgroundIds.includes(r.id));lettering.height=2;
 p.removeBackground=true;assert.equal(regionVisible(p,p.regions[p.backgroundIds[0]]),false);assert.equal(regionVisible(p,lettering),true);
 assert.equal((exportSVG(p).match(/<path /g)||[]).length,2);
 p.removeBackground=false;assert.ok(p.regions.every(r=>regionVisible(p,r)));assert.equal(lettering.height,2);assert.equal((exportSVG(p).match(/<path /g)||[]).length,3);
});
test('background removal cuts the rectangular base too, and exports closed geometry',()=>{
 const p=fixture();p.removeBackground=true;const parts=buildParts(p),surface=buildSTLSurface(p);
 assert.ok(parts.every(part=>part.vertices.every(([x,y])=>Math.abs(x)<15&&Math.abs(y)<15)),'no rectangular base remains outside the design');
 for(const mesh of [...parts,surface]){const counts=new Map();for(const t of mesh.triangles)for(let i=0;i<3;i++){const a=t[i],b=t[(i+1)%3],k=Math.min(a,b)+':'+Math.max(a,b);counts.set(k,(counts.get(k)||0)+1);}assert.ok([...counts.values()].every(n=>n===2));}
 p.removeBackground=false;assert.ok(buildParts(p).some(part=>part.vertices.some(([x])=>x===20)));
});
test('transparent borders and ambiguous border colors are not treated as background',()=>{
 const labels=new Int16Array(100).fill(-1);for(let y=3;y<7;y++)for(let x=3;x<7;x++)labels[y*10+x]=0;
 const a=traceRegions(labels,10,10);assert.deepEqual(detectBackground(a.ids,10,10,a.regions),[]);
 const b=traceRegions(Int16Array.from({length:100},(_,i)=>i%10<5?0:1),10,10);assert.deepEqual(detectBackground(b.ids,10,10,b.regions),[]);
});
