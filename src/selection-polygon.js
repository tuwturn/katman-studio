export function polygonPoints(points){
 if(!Array.isArray(points)||points.length<3||points.some(p=>p.length!==2||p.some(x=>!Number.isFinite(x))))throw new Error('En az üç geçerli nokta seçin.');
 const cross=(a,b,c)=>(b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0]);
 const on=(a,b,p)=>Math.abs(cross(a,b,p))<1e-8&&p.every((x,k)=>x>=Math.min(a[k],b[k])-1e-8&&x<=Math.max(a[k],b[k])+1e-8);
 for(let i=0;i<points.length;i++){
  const a=points[i],b=points[(i+1)%points.length];if(Math.hypot(a[0]-b[0],a[1]-b[1])<1e-6)throw new Error('Aynı noktayı art arda seçmeyin.');
  for(let j=i+2;j<points.length;j++){if(i===0&&j===points.length-1)continue;const c=points[j],d=points[(j+1)%points.length];if((cross(a,b,c)*cross(a,b,d)<0&&cross(c,d,a)*cross(c,d,b)<0)||on(a,b,c)||on(a,b,d)||on(c,d,a)||on(c,d,b))throw new Error('Seçim çizgileri kesişiyor. Son noktayı geri alıp yeniden seçin.');}
 }
 const area=points.reduce((s,p,i)=>{const q=points[(i+1)%points.length];return s+p[0]*q[1]-q[0]*p[1];},0);if(Math.abs(area)<1e-7)throw new Error('Seçim alanı çok küçük veya noktalar aynı çizgide.');return area>0?points.map(p=>[...p]):points.map(p=>[...p]).reverse();
}
export function footprintsOverlap(a,b){
 const cross=(p,q,r)=>(q[0]-p[0])*(r[1]-p[1])-(q[1]-p[1])*(r[0]-p[0]);
 const on=(p,q,r)=>Math.abs(cross(p,q,r))<1e-7&&r.every((v,k)=>v>=Math.min(p[k],q[k])-1e-7&&v<=Math.max(p[k],q[k])+1e-7);
 const contains=(poly,p)=>{let inside=false;for(let i=0,j=poly.length-1;i<poly.length;j=i++){const a=poly[i],b=poly[j];if(on(a,b,p))return true;if((a[1]>p[1])!==(b[1]>p[1])&&p[0]<(b[0]-a[0])*(p[1]-a[1])/(b[1]-a[1])+a[0])inside=!inside;}return inside;};
 if(a.some(p=>contains(b,p))||b.some(p=>contains(a,p)))return true;
 return a.some((p,i)=>b.some((r,j)=>{const q=a[(i+1)%a.length],s=b[(j+1)%b.length];return(cross(p,q,r)*cross(p,q,s)<0&&cross(r,s,p)*cross(r,s,q)<0)||on(p,q,r)||on(p,q,s)||on(r,s,p)||on(r,s,q);}));
}
