import {backgroundRemoved,regionVisible} from './background.js';
import earcut from 'earcut';
const area=r=>r.reduce((s,a,i)=>{const b=r[(i+1)%r.length];return s+a[0]*b[1]-b[0]*a[1];},0)/2;
const inside=(p,r)=>{let v=false;for(let i=0,j=r.length-1;i<r.length;j=i++){const a=r[i],b=r[j];if((a[1]>p[1])!==(b[1]>p[1])&&p[0]<(b[0]-a[0])*(p[1]-a[1])/(b[1]-a[1])+a[0])v=!v;}return v;};
const key=p=>p.map(v=>Number(v.toFixed(8))).join(',');

// Earcut may omit collinear boundary points. Restore these points on cap edges
// so every curved interface and height junction also has matching mesh edges.
const capCache=new WeakMap();
export function triangulateCaps(rings){
  if(capCache.has(rings))return capCache.get(rings);
  const results=[],outers=rings.filter(r=>area(r)>1e-8),holes=rings.filter(r=>area(r)<-1e-8);
  for(const outer of outers){const group=[outer,...holes.filter(r=>inside(r[0],outer))],points=[],starts=[];
    for(const ring of group){if(points.length)starts.push(points.length);points.push(...ring);}
    const indices=earcut(points.flat(),starts),cells=new Map(),edgeCache=new Map(),cellSize=24;
    points.forEach((p,i)=>{const key=Math.floor(p[0]/cellSize)+':'+Math.floor(p[1]/cellSize);if(!cells.has(key))cells.set(key,[]);cells.get(key).push(i);});
    const interior=(a,b)=>{const cacheKey=Math.min(a,b)+':'+Math.max(a,b);if(edgeCache.has(cacheKey)){const list=edgeCache.get(cacheKey);return a<b?list:list.slice().reverse();}const p=points[a],q=points[b],dx=q[0]-p[0],dy=q[1]-p[1],length=dx*dx+dy*dy,candidates=[];
      if(length>1e-16)for(let y=Math.floor(Math.min(p[1],q[1])/cellSize);y<=Math.floor(Math.max(p[1],q[1])/cellSize);y++)for(let x=Math.floor(Math.min(p[0],q[0])/cellSize);x<=Math.floor(Math.max(p[0],q[0])/cellSize);x++)for(const i of cells.get(x+':'+y)||[]){if(i===a||i===b)continue;const r=points[i],t=((r[0]-p[0])*dx+(r[1]-p[1])*dy)/length;if(t>1e-8&&t<1-1e-8&&Math.abs((r[0]-p[0])*dy-(r[1]-p[1])*dx)<1e-7)candidates.push({i,t});}
      candidates.sort((a,b)=>a.t-b.t);const list=candidates.filter((v,i)=>!i||Math.abs(v.t-candidates[i-1].t)>1e-9).map(v=>v.i);edgeCache.set(cacheKey,a<b?list:list.slice().reverse());return list;
    };
    const triangles=[];
    for(let i=0;i<indices.length;i+=3){const t=indices.slice(i,i+3),boundary=[];let split=false;
      for(let j=0;j<3;j++){const a=t[j],b=t[(j+1)%3];boundary.push(a);const extra=interior(a,b);if(extra?.length){split=true;boundary.push(...extra);}}
      if(!split)triangles.push(t);else{const center=t.reduce((p,k)=>[p[0]+points[k][0]/3,p[1]+points[k][1]/3],[0,0]),c=points.length;points.push(center);for(let j=0;j<boundary.length;j++)triangles.push([c,boundary[j],boundary[(j+1)%boundary.length]]);}
    }
    const valid=triangles.filter(t=>{const [a,b,c]=t.map(i=>points[i]);return Math.abs((b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0]))>1e-10;});
    results.push({points,triangles:valid,rings:group});
  }
  capCache.set(rings,results);return results;
}

export function buildVectorSTLSurface(project,snapHeight){
  const {width,height,modelWidth,baseHeight,regions,chains,voidRings=[]}=project,scale=modelWidth/width,base=Math.round(baseHeight*50);
  const level=id=>id===-2?0:id===-1?(project.removeBackground?0:base):backgroundRemoved(project,regions[id])?0:base+(regionVisible(project,regions[id])?Math.round(snapHeight(regions[id].height)*50):0);
  const vertices=[],triangles=[],lookup=new Map(),cornerLevels=new Map();
  const vertex=(p,z)=>{const k=key(p)+':'+z;if(lookup.has(k))return lookup.get(k);const id=vertices.length;vertices.push([(p[0]-width/2)*scale,(height/2-p[1])*scale,z/50]);lookup.set(k,id);return id;};
  const caps=(rings,z)=>{if(!z)return;for(const cap of triangulateCaps(rings))for(const tri of cap.triangles){let [a,b,c]=tri;const [p,q,r]=[a,b,c].map(i=>cap.points[i]);if((q[0]-p[0])*(r[1]-p[1])-(q[1]-p[1])*(r[0]-p[0])>0)[b,c]=[c,b];triangles.push([a,b,c].map(i=>vertex(cap.points[i],z)),[c,b,a].map(i=>vertex(cap.points[i],0)));}};
  for(const region of regions)caps(region.rings,level(region.id));if(base&&!project.removeBackground)caps(voidRings,base);
  for(const chain of chains)for(const point of [chain.points[0],chain.points.at(-1)]){const k=key(point);if(!cornerLevels.has(k))cornerLevels.set(k,new Set([0]));cornerLevels.get(k).add(level(chain.right));cornerLevels.get(k).add(level(chain.left));}
  for(const chain of chains){const right=level(chain.right),left=level(chain.left);if(right===left)continue;const lo=Math.min(right,left),hi=Math.max(right,left),points=right>left?chain.points:chain.points.slice().reverse();
    for(let i=0;i<points.length-1;i++){const a=points[i],b=points[i+1],levels=p=>[...new Set([lo,hi,...[...(cornerLevels.get(key(p))||[])].filter(v=>v>lo&&v<hi)])].sort((a,b)=>a-b);
      const ring=[...levels(a).map(z=>vertex(a,z)),...levels(b).reverse().map(z=>vertex(b,z))],center=vertex([(a[0]+b[0])/2,(a[1]+b[1])/2],(lo+hi)/2);
      for(let j=0;j<ring.length;j++)triangles.push([center,ring[j],ring[(j+1)%ring.length]]);
    }
  }
  const counts=new Map();for(const t of triangles)for(let i=0;i<3;i++){const a=t[i],b=t[(i+1)%3],k=Math.min(a,b)+':'+Math.max(a,b);counts.set(k,(counts.get(k)||0)+1);}
  return {vertices,triangles,nonManifoldCorners:[...counts.values()].filter(n=>n>2).length};
}
