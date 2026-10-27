export function matchingRegions(regions,palette,id,tolerance=0) {
  const source=regions[id];if(!source)return [];
  const rgb=palette[source.color],limit=Math.max(0,tolerance)/100*Math.sqrt(3*255**2);
  const colors=new Set(palette.map((c,i)=>Math.hypot(...c.map((v,k)=>v-rgb[k]))<=limit+1e-8?i:-1));
  return regions.filter(r=>colors.has(r.color)).map(r=>r.id);
}
export function regionsInRectangle(ids,width,height,a,b) {
  const left=Math.max(0,Math.floor(Math.min(a.x,b.x))),right=Math.min(width-1,Math.floor(Math.max(a.x,b.x)));
  const top=Math.max(0,Math.floor(Math.min(a.y,b.y))),bottom=Math.min(height-1,Math.floor(Math.max(a.y,b.y)));
  const result=new Set();
  for(let y=top;y<=bottom;y++)for(let x=left;x<=right;x++){const id=ids[y*width+x];if(id>=0)result.add(id);}
  return [...result];
}
export function vectorRegionsInRectangle(regions,a,b){
  const x0=Math.min(a.x,b.x),x1=Math.max(a.x,b.x),y0=Math.min(a.y,b.y),y1=Math.max(a.y,b.y);
  const contains=(x,y,rings)=>{let result=false;for(const ring of rings)for(let i=0,j=ring.length-1;i<ring.length;j=i++){const p=ring[i],q=ring[j];if((p[1]>y)!==(q[1]>y)&&x<(q[0]-p[0])*(y-p[1])/(q[1]-p[1])+p[0])result=!result;}return result;};
  const touches=(p,q)=>{let lo=0,hi=1;for(const [n,d]of [[p[0]-x0,p[0]-q[0]],[x1-p[0],q[0]-p[0]],[p[1]-y0,p[1]-q[1]],[y1-p[1],q[1]-p[1]]]){if(Math.abs(d)<1e-12){if(n<0)return false;}else if(d>0)hi=Math.min(hi,n/d);else lo=Math.max(lo,n/d);}return lo<=hi;};
  return regions.filter(r=>r.rings.some(ring=>ring.some((p,i)=>touches(p,ring[(i+1)%ring.length])))||[[x0,y0],[x1,y0],[x0,y1],[x1,y1]].some(p=>contains(...p,r.rings))).map(r=>r.id);
}
