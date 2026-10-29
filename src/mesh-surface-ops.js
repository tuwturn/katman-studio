import * as THREE from 'three';
import {Brush,Evaluator,SUBTRACTION,ADDITION} from 'three-bvh-csg';
import {polygonPoints,footprintsOverlap} from './selection-polygon.js';

// A best-effort, local fallback for imported meshes rejected by Manifold.
// This does not repair the source mesh or certify the result as watertight.
export function editSurface(part,areas,mode,progress=()=>{}){
 const geometries=new Set();
 const track=g=>(geometries.add(g),g);
 function brush(g,color){track(g);if(!g.getAttribute('normal'))g.computeVertexNormals();if(!g.getAttribute('color'))g.setAttribute('color',new THREE.Float32BufferAttribute(Array.from({length:g.getAttribute('position').count},()=>color).flat(),3));const b=new Brush(g);b.updateMatrixWorld(true);return b;}
 const g=track(new THREE.BufferGeometry());g.setAttribute('position',new THREE.Float32BufferAttribute(part.vertices.flat(),3));g.setIndex(part.triangles.flat());g.setAttribute('color',new THREE.Float32BufferAttribute((part.colors||part.vertices.map(()=>[.48,.63,.85])).flat(),3));
 const evaluator=new Evaluator();evaluator.attributes=['position','normal','color'];evaluator.useGroups=false;
 let result=brush(g);const volumes=[];
 try{
  for(let i=0;i<areas.length;i++){
   progress(`Yüzey kesimi: ${i+1} / ${areas.length} alan…`);
   const area=areas[i],{u,v,n,center,width,height,shape}=area;let {depth,offset=0}=area;
   if(![width,height,depth].every(x=>Number.isFinite(x)&&x>0))throw new Error('Alan ve işlem derinliği sıfırdan büyük olmalı.');
   if(mode==='cut'){let lo=Infinity,hi=-Infinity;for(const p of part.vertices){const d=p.reduce((s,x,j)=>s+(x-center[j])*n[j],0);lo=Math.min(lo,d);hi=Math.max(hi,d);}offset=lo-.01;depth=hi-lo+.02;}
   volumes.push({...area,depth,offset});
   let geometry;if(shape==='polygon'){const outline=new THREE.Shape(polygonPoints(area.points).map(p=>new THREE.Vector2(...p)));geometry=new THREE.ExtrudeGeometry(outline,{depth,bevelEnabled:false,steps:1}).translate(0,0,-depth/2);}else geometry=shape==='circle'?new THREE.CylinderGeometry(width/2,width/2,depth,64).rotateX(Math.PI/2):new THREE.BoxGeometry(width,height,depth);
   const cutter=brush(geometry,part.colors?.[0]||[.48,.63,.85]);cutter.matrixAutoUpdate=false;cutter.matrix.makeBasis(new THREE.Vector3(...u),new THREE.Vector3(...v),new THREE.Vector3(...n));cutter.matrix.setPosition(...center.map((x,j)=>x+n[j]*((mode==='fill'?offset-depth:offset)+depth/2)));cutter.updateMatrixWorld(true);
   result=evaluator.evaluate(result,cutter,mode==='fill'?ADDITION:SUBTRACTION);track(result.geometry);
  }
  const p=result.geometry.getAttribute('position'),c=result.geometry.getAttribute('color'),index=result.geometry.index,vertices=[],colors=[],triangles=[];
  for(let i=0;i<p.count;i++){vertices.push([p.getX(i),p.getY(i),p.getZ(i)]);colors.push([c.getX(i),c.getY(i),c.getZ(i)]);}
  const count=Math.min(index?index.count:p.count,result.geometry.drawRange.count);for(let i=0;i<count;i+=3)triangles.push([0,1,2].map(j=>index?index.getX(i+j):i+j));
  // Retain every original triangle strictly outside the edit volumes. A defective
  // distant shell must never be reclassified or dropped by a global boolean.
  const outside=(points,a)=>{const d=points.map(p=>p.map((x,j)=>x-a.center[j])),ranges=[a.u,a.v,a.n].map(axis=>d.map(p=>p.reduce((s,x,j)=>s+x*axis[j],0))),lo=[-a.width/2,-a.height/2,mode==='fill'?a.offset-a.depth:a.offset],hi=[a.width/2,a.height/2,mode==='fill'?a.offset:a.offset+a.depth];if(ranges.some((r,j)=>Math.max(...r)<lo[j]-1e-5||Math.min(...r)>hi[j]+1e-5))return true;return a.shape==='polygon'&&!footprintsOverlap(a.points,points.map((_,i)=>[ranges[0][i],ranges[1][i]]));};
  const untouched=points=>volumes.every(a=>outside(points,a));
  const local=triangles.filter(t=>!untouched(t.map(i=>vertices[i]))),base=vertices.length;
  for(let i=0;i<part.vertices.length;i++){vertices.push(part.vertices[i]);colors.push(part.colors?.[i]||[.48,.63,.85]);}
  for(const t of part.triangles)if(untouched(t.map(i=>part.vertices[i])))local.push(t.map(i=>i+base));
  if(!local.length){if(mode==='cut')return null;throw new Error('Seçim modelin tamamını kaldırıyor. Alanı küçültün.');}
  const used=new Map(),compact=[],compactColors=[];const faces=local.map(t=>t.map(i=>{if(!used.has(i)){used.set(i,compact.length);compact.push(vertices[i]);compactColors.push(colors[i]);}return used.get(i);}));
  return {...part,vertices:compact,colors:compactColors,triangles:faces};
 }finally{for(const geometry of geometries){geometry.boundsTree=null;geometry.dispose();}}
}

// Ignore reindexing and Float32 conversion when detecting an ineffective edit.
export function sameSurface(a,b){
 if(!b||a.triangles.length!==b.triangles.length)return false;
 const key=(p,t)=>t.map(i=>p.vertices[i].map(Math.fround).join(',')).sort().join('|');
 const counts=new Map();for(const t of a.triangles){const k=key(a,t);counts.set(k,(counts.get(k)||0)+1);}for(const t of b.triangles){const k=key(b,t),n=counts.get(k)||0;if(!n)return false;if(n===1)counts.delete(k);else counts.set(k,n-1);}return !counts.size;
}
