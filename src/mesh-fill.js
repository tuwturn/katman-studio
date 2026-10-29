import {polygonPoints} from './selection-polygon.js';
const dot=(a,b)=>a.reduce((s,x,i)=>s+x*b[i],0);
export function projectAreas(areas,plane){
 return areas.map(area=>{
  const denominator=dot(area.n,plane.n);if(Math.abs(denominator)<1e-5)throw new Error('Seçim yönü dolgu düzlemine paralel. Hedef yüzeye bakıp alanı yeniden seçin.');
  const outline=area.shape==='polygon'?area.points:area.shape==='circle'?Array.from({length:64},(_,i)=>[Math.cos(i*Math.PI/32)*area.width/2,Math.sin(i*Math.PI/32)*area.width/2]):[[-area.width/2,-area.height/2],[area.width/2,-area.height/2],[area.width/2,area.height/2],[-area.width/2,area.height/2]];
  const points=polygonPoints(outline.map(p=>{const world=area.center.map((x,i)=>x+area.u[i]*p[0]+area.v[i]*p[1]),distance=dot(plane.origin.map((x,i)=>x-world[i]),plane.n)/denominator,relative=world.map((x,i)=>x+area.n[i]*distance-plane.origin[i]);return[dot(relative,plane.u),dot(relative,plane.v)];}));
  const xs=points.map(p=>p[0]),ys=points.map(p=>p[1]),cx=(Math.min(...xs)+Math.max(...xs))/2,cy=(Math.min(...ys)+Math.max(...ys))/2;
  return{...area,shape:'polygon',points:points.map(p=>[p[0]-cx,p[1]-cy]),center:plane.origin.map((x,i)=>x+plane.u[i]*cx+plane.v[i]*cy),u:[...plane.u],v:[...plane.v],n:[...plane.n],width:Math.max(...xs)-Math.min(...xs),height:Math.max(...ys)-Math.min(...ys)};
 });
}
export function buildFillAreas(part,areas,plane,{offset=0,thickness=null}={}){
 if(!Number.isFinite(offset))throw new Error('Geçerli bir dolgu yüksekliği girin.');
 if(thickness!==null&&(!Number.isFinite(thickness)||thickness<=0||thickness>1000))throw new Error('Dolgu kalınlığı 0 ile 1000 mm arasında olmalı.');
 return projectAreas(areas,plane).map(area=>{let depth=thickness;if(depth===null){let low=Infinity;for(const p of part.vertices)low=Math.min(low,dot(p.map((x,i)=>x-area.center[i]),area.n));depth=offset-low;if(depth<=1e-6)throw new Error('Hedef düzlem modelin alt sınırında veya altında. Daha yüksek bir yüzey/yükseklik seçin ya da dolgu kalınlığını girin.');}return{...area,depth,offset};});
}
