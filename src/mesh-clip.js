import earcut from 'earcut';
import {polygonPoints,footprintsOverlap} from './selection-polygon.js';
const EPS=1e-9,dot=(a,b)=>a[0]*b[0]+a[1]*b[1]+a[2]*b[2];
const distance=(p,plane)=>dot(p,plane.n)+plane.d;
function half(poly,plane,inside){
 const output=[];let a=poly.at(-1),da=distance(a.p,plane),keepA=inside?da>=-EPS:da<=EPS;
 for(const b of poly){const db=distance(b.p,plane),keepB=inside?db>=-EPS:db<=EPS;if(keepA!==keepB){const t=Math.max(0,Math.min(1,da/(da-db)));output.push({p:a.p.map((x,i)=>x+(b.p[i]-x)*t),c:a.c.map((x,i)=>x+(b.c[i]-x)*t)});}if(keepB)output.push(b);a=b;da=db;keepA=keepB;}
 return output;
}
function subtractCell(poly,planes){if(planes.some(plane=>poly.every(v=>distance(v.p,plane)<-EPS)))return[poly];let remaining=poly;const outside=[];for(const plane of planes){if(remaining.every(v=>distance(v.p,plane)>=-EPS))continue;if(remaining.every(v=>distance(v.p,plane)<-EPS)){outside.push(remaining);remaining=[];break;}const fragment=half(remaining,plane,false);if(fragment.length>=3)outside.push(fragment);remaining=half(remaining,plane,true);if(remaining.length<3)break;}return outside;}
function intersectCell(poly,planes){for(const plane of planes){poly=half(poly,plane,true);if(poly.length<3)return[];}return poly;}
export function clipVolume(area){
 const outline=area.shape==='polygon'?polygonPoints(area.points):area.shape==='circle'?Array.from({length:64},(_,i)=>[Math.cos(i*Math.PI/32)*area.width/2,Math.sin(i*Math.PI/32)*area.width/2]):[[-area.width/2,-area.height/2],[area.width/2,-area.height/2],[area.width/2,area.height/2],[-area.width/2,area.height/2]];
 const world=(a,b,c,d)=>{const n=area.u.map((x,i)=>a*x+b*area.v[i]+c*area.n[i]);return{n,d:d-dot(n,area.center)};},edge=(a,b)=>{const dx=b[0]-a[0],dy=b[1]-a[1],length=Math.hypot(dx,dy);return world(-dy/length,dx/length,0,(dy*a[0]-dx*a[1])/length);};
 const ends=[world(0,0,1,-area.offset),world(0,0,-1,area.offset+area.depth)],boundary=[...outline.map((p,i)=>edge(p,outline[(i+1)%outline.length])),...ends];
 const convex=outline.every((p,i)=>{const q=outline[(i+1)%outline.length],r=outline[(i+2)%outline.length];return(q[0]-p[0])*(r[1]-q[1])-(q[1]-p[1])*(r[0]-q[0])>=-EPS;});
 const triangulated=convex?null:earcut(outline.flat()),cells=convex?[boundary]:Array.from({length:triangulated.length/3},(_,i)=>{const points=triangulated.slice(i*3,i*3+3).map(j=>outline[j]);return[...points.map((p,k)=>edge(p,points[(k+1)%3])),...ends];});
 const xs=outline.map(p=>p[0]),ys=outline.map(p=>p[1]);return{...area,outline,cells,boundary,lo:[Math.min(...xs),Math.min(...ys),area.offset],hi:[Math.max(...xs),Math.max(...ys),area.offset+area.depth]};
}
function outsideBounds(poly,volume){const projected=poly.map(v=>[volume.u,volume.v,volume.n].map(axis=>dot(v.p,axis)-dot(volume.center,axis)));for(let k=0;k<3;k++){let lo=Infinity,hi=-Infinity;for(const p of projected){lo=Math.min(lo,p[k]);hi=Math.max(hi,p[k]);}if(hi<volume.lo[k]-EPS||lo>volume.hi[k]+EPS)return true;}return!footprintsOverlap(volume.outline,projected.map(p=>p.slice(0,2)));}
function addFace(poly,vertices,colors,triangles){
 if(poly.length<3)return;const index=v=>{if(v.id===undefined){v.id=vertices.length;vertices.push(v.p);colors.push(v.c);}return v.id;};
 for(let i=1;i<poly.length-1;i++){const a=poly[0].p,b=poly[i].p,c=poly[i+1].p,u=b.map((x,j)=>x-a[j]),v=c.map((x,j)=>x-a[j]);if(Math.hypot(u[1]*v[2]-u[2]*v[1],u[2]*v[0]-u[0]*v[2],u[0]*v[1]-u[1]*v[0])>1e-16)triangles.push([index(poly[0]),index(poly[i]),index(poly[i+1])]);}
}
export function boundedSubtract(source,areas,candidate){
 const volumes=areas.map(clipVolume),vertices=[...source.vertices],colors=source.vertices.map((_,i)=>source.colors?.[i]||[.48,.63,.85]),triangles=[];
 for(const t of source.triangles){const original=t.map(id=>({p:source.vertices[id],c:colors[id],id}));let fragments=[original],changed=false;
  for(const volume of volumes){const next=[];for(const poly of fragments){if(outsideBounds(poly,volume)){next.push(poly);continue;}let pieces=[poly];for(const cell of volume.cells){pieces=pieces.flatMap(p=>subtractCell(p,cell));if(!pieces.length)break;}if(pieces.length!==1||pieces[0]!==poly)changed=true;next.push(...pieces);}fragments=next;if(!fragments.length)break;}
  if(!changed&&fragments.length===1&&fragments[0]===original)triangles.push([...t]);else for(const poly of fragments)addFace(poly,vertices,colors,triangles);
 }
 // Only cut-plane caps may come from the imperfect solid classifier. Clip these
 // to the actual prism too; all surviving source surfaces above are deterministic.
 for(const t of candidate.triangles){const poly=t.map(id=>({p:candidate.vertices[id],c:candidate.colors?.[id]||[.48,.63,.85]}));for(let vi=0;vi<volumes.length;vi++){const volume=volumes[vi];const face=volume.boundary.find(plane=>poly.every(v=>Math.abs(distance(v.p,plane))<2e-5));if(!face)continue;const snapped=poly.map(v=>({...v,p:v.p.map((x,i)=>x-distance(v.p,face)*face.n[i]/dot(face.n,face.n))}));if(outsideBounds(snapped,volume))continue;for(const cell of volume.cells){const cap=intersectCell(snapped,cell);let pieces=cap.length?[cap]:[];for(let oi=0;oi<volumes.length;oi++){if(oi===vi)continue;const other=volumes[oi],sharedBoundary=other.boundary.some(plane=>snapped.every(v=>Math.abs(distance(v.p,plane))<2e-5));if(oi<vi||!sharedBoundary)for(const cut of other.cells)pieces=pieces.flatMap(p=>subtractCell(p,cut));}for(const piece of pieces)addFace(piece,vertices,colors,triangles);}}}

 if(!triangles.length)return null;const used=new Map(),compact=[],compactColors=[],faces=triangles.map(t=>t.map(id=>{if(!used.has(id)){used.set(id,compact.length);compact.push(vertices[id]);compactColors.push(colors[id]);}return used.get(id);}));return{...source,vertices:compact,colors:compactColors,triangles:faces};
}
