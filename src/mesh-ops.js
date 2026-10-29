// Local solid edits: the cutter is bounded in all three directions and aligned
// to a picked surface. It never becomes an infinite slicer plane.
export function toSolid(wasm,part){
 const properties=[];for(let i=0;i<part.vertices.length;i++)properties.push(...part.vertices[i],...(part.colors?.[i]||[.48,.63,.85]));
 const mesh=new wasm.Mesh({numProp:6,vertProperties:Float32Array.from(properties),triVerts:Uint32Array.from(part.triangles.flat())});mesh.merge();
 try{return wasm.Manifold.ofMesh(mesh);}catch{throw new Error('Bu ağ kapalı ve tutarlı bir katı değil. Açık/bozuk yüzeyleri olan modeli önce ağ onarımından geçirin.');}
}
export function fromSolid(solid,original={}){
 const mesh=solid.getMesh(),vertices=[],colors=[],triangles=[];
 for(let i=0;i<mesh.vertProperties.length;i+=mesh.numProp){vertices.push(Array.from(mesh.vertProperties.slice(i,i+3)));colors.push(mesh.numProp>=6?Array.from(mesh.vertProperties.slice(i+3,i+6)):[.48,.63,.85]);}
 for(let i=0;i<mesh.triVerts.length;i+=3)triangles.push(Array.from(mesh.triVerts.slice(i,i+3)));
 return {...original,vertices,colors,triangles};
}
export function localCutter(wasm,area,mode,color=[.48,.63,.85]){
 const {u,v,n,center,width,height,depth,offset=0,shape='box'}=area;
 if(![width,height,depth].every(x=>Number.isFinite(x)&&x>0))throw new Error('Alan ve işlem derinliği sıfırdan büyük olmalı.');
 if(![u,v,n,center].every(a=>a?.length===3&&a.every(Number.isFinite)))throw new Error('Önce düzeltilecek yüzeyden referans seçin.');
 const bottom=mode==='fill'?offset-depth:offset;
 const primitive=shape==='circle'?wasm.Manifold.cylinder(depth,width/2,width/2,64,false):wasm.Manifold.cube([width,height,depth],true);
 const raw=shape==='circle'?primitive:primitive.translate([0,0,depth/2]);if(raw!==primitive)primitive.delete();
 const transform=[...u,0,...v,0,...n,0,...center.map((x,i)=>x+n[i]*bottom),1];
 const moved=raw.transform(transform),colored=moved.setProperties(3,p=>{for(let i=0;i<3;i++)p[i]=color[i];});raw.delete();moved.delete();return colored;
}
export function editPart(wasm,part,areas,mode){
 let result=toSolid(wasm,part);
 try{
  for(const area of areas){let volume=area;if(mode==='cut'){let lo=Infinity,hi=-Infinity;for(const p of part.vertices){const projection=p.reduce((s,x,i)=>s+(x-area.center[i])*area.n[i],0);lo=Math.min(lo,projection);hi=Math.max(hi,projection);}const margin=Math.max(.01,(hi-lo)*.00001);volume={...area,offset:lo-margin,depth:hi-lo+margin*2};}const cutter=localCutter(wasm,volume,mode,part.colors?.[0]),next=mode==='fill'?result.add(cutter):result.subtract(cutter);cutter.delete();result.delete();result=next;}
  if(result.status()!=='NoError')throw new Error('Katı işlemi tamamlanamadı: '+result.status());
  if(result.isEmpty()){if(mode==='cut')return null;throw new Error('Seçilen alan modelin tamamını kaldırıyor. Alanı veya derinliği küçültün.');}
  return fromSolid(result,part);
 }finally{result.delete();}
}
export function splitPart(wasm,part){const solid=toSolid(wasm,part);let pieces=[];try{pieces=solid.decompose();return pieces.map((p,i)=>fromSolid(p,{...part,name:`${part.name} · ${i+1}`}));}finally{pieces.forEach(p=>p.delete());solid.delete();}}
