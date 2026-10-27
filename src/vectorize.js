import {optimizePotrace} from './vendor/potrace-curves.js';

const same=(a,b)=>Math.abs(a[0]-b[0])<1e-9&&Math.abs(a[1]-b[1])<1e-9;
const sqDist=(p,a,b)=>{const dx=b[0]-a[0],dy=b[1]-a[1],t=Math.max(0,Math.min(1,((p[0]-a[0])*dx+(p[1]-a[1])*dy)/(dx*dx+dy*dy||1)));return (p[0]-a[0]-t*dx)**2+(p[1]-a[1]-t*dy)**2;};
const unit=(a,b)=>{const x=a[0]-b[0],y=a[1]-b[1],l=Math.hypot(x,y)||1;return [x/l,y/l];};
const keyOf=p=>p.map(v=>Number(v.toFixed(8))).join(',');
function simplify(points,error=.7){
  if(points.length<3)return points.slice();
  const keep=new Uint8Array(points.length);keep[0]=keep[points.length-1]=1;const stack=[[0,points.length-1]];
  while(stack.length){const [a,b]=stack.pop();let best=error*error,index=-1;for(let i=a+1;i<b;i++){const d=sqDist(points[i],points[a],points[b]);if(d>best){best=d;index=i;}}if(index>=0){keep[index]=1;stack.push([a,index],[index,b]);}}
  return points.filter((_,i)=>keep[i]);
}
const line=(a,b)=>[a,[a[0]+(b[0]-a[0])/3,a[1]+(b[1]-a[1])/3],[a[0]+(b[0]-a[0])*2/3,a[1]+(b[1]-a[1])*2/3],b];
function fitPotrace(raw){
 let points=raw.slice(0,-1),area=0;for(let i=0;i<points.length;i++){const a=points[i],b=points[(i+1)%points.length];area+=a[0]*b[1]-b[0]*a[1];}
 const backwards=area>0;if(backwards)points=points.slice().reverse();
 const boundary=new Map();for(const p of points){const k=Math.floor(p[0]/2)+':'+Math.floor(p[1]/2);if(!boundary.has(k))boundary.set(k,[]);boundary.get(k).push(p);}
 const near=p=>{let d=Infinity;const x=Math.floor(p[0]/2),y=Math.floor(p[1]/2);for(let yy=y-1;yy<=y+1;yy++)for(let xx=x-1;xx<=x+1;xx++)for(const q of boundary.get(xx+':'+yy)||[])d=Math.min(d,(p[0]-q[0])**2+(p[1]-q[1])**2);return d<=1.25**2;};
 const edgeNear=(a,b)=>{const n=Math.max(2,Math.ceil(Math.hypot(b[0]-a[0],b[1]-a[1])));for(let i=0;i<=n;i++)if(!near([a[0]+(b[0]-a[0])*i/n,a[1]+(b[1]-a[1])*i/n]))return false;return true;};
 // Curve merging turns vertices into tangent intersections, which can be far
 // outside the source. Corner detection must use the unmerged polygon, and
 // both corner edges must follow the actual source boundary.
 const fitted=optimizePotrace(points,{optCurve:false,alphaMax:1.2}),curves=[];let start=fitted.c[(fitted.n-1)*3+2],previous=[start.x,start.y];
 for(let i=0;i<fitted.n;i++){const c=fitted.c.slice(i*3,i*3+3).map(p=>p&&[p.x,p.y]),v=fitted.vertex[i],before=fitted.vertex[(i-1+fitted.n)%fitted.n],after=fitted.vertex[(i+1)%fitted.n],u=unit([v.x,v.y],[before.x,before.y]),w=unit([after.x,after.y],[v.x,v.y]),sharp=u[0]*w[0]+u[1]*w[1]<Math.cos(Math.PI/3)&&Math.min(Math.hypot(v.x-before.x,v.y-before.y),Math.hypot(after.x-v.x,after.y-v.y))>2;if(sharp&&edgeNear(previous,[v.x,v.y])&&edgeNear([v.x,v.y],c[2])){fitted.tag[i]='CORNER';c[1]=[v.x,v.y];}if(fitted.tag[i]==='CORNER'){curves.push(line(previous,c[1]),line(c[1],c[2]));}else if(Math.max(sqDist(c[0],previous,c[2]),sqDist(c[1],previous,c[2]))<.3**2)curves.push(line(previous,c[2]));else curves.push([previous,c[0],c[1],c[2]]);previous=c[2];}
 return backwards?curves.reverse().map(c=>c.slice().reverse()):curves;
}
const bezierAt=(c,t)=>{const s=1-t;return [0,1].map(i=>s*s*s*c[0][i]+3*s*s*t*c[1][i]+3*s*t*t*c[2][i]+t*t*t*c[3][i]);};
function splitBezier(c,t){const mix=(a,b)=>[a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t],a=mix(c[0],c[1]),b=mix(c[1],c[2]),d=mix(c[2],c[3]),e=mix(a,b),f=mix(b,d),g=mix(e,f);return [[c[0],a,e,g],[g,f,d,c[3]]];}
function cropBezier(c,a,b){let result=b<1?splitBezier(c,b)[0]:c;if(a>0)result=splitBezier(result,a/(b||1))[1];return result;}
function closestOnCurves(curves,p){let best={i:0,t:0,d:Infinity};for(let i=0;i<curves.length;i++)for(let k=0;k<=16;k++){const t=k/16,q=bezierAt(curves[i],t),d=(q[0]-p[0])**2+(q[1]-p[1])**2;if(d<best.d)best={i,t,d};}let lo=Math.max(0,best.t-1/16),hi=Math.min(1,best.t+1/16);const dist=t=>{const q=bezierAt(curves[best.i],t);return (q[0]-p[0])**2+(q[1]-p[1])**2;};for(let k=0;k<24;k++){const a=lo+(hi-lo)/3,b=hi-(hi-lo)/3;if(dist(a)<dist(b))hi=b;else lo=a;}return {i:best.i,t:(lo+hi)/2};}
function fitOpenBoundary(raw,owner,regions,cache){
  if(simplify(raw,.05).length===2)return [line(raw[0],raw.at(-1))];
  const ring=regions[owner].rings.find(r=>[raw[1],raw[Math.floor(raw.length/2)],raw.at(-2)].every(p=>r.some((a,i)=>sqDist(p,a,r[(i+1)%r.length])<1e-8)));
  if(!ring){const p=simplify(raw,.4);return p.slice(1).map((v,i)=>line(p[i],v));}
  let curves=cache.get(ring);if(!curves){const dense=[];for(let i=0;i<ring.length;i++){const a=ring[i],b=ring[(i+1)%ring.length],steps=Math.round(Math.abs(b[0]-a[0])+Math.abs(b[1]-a[1]));for(let k=0;k<steps;k++)dense.push([a[0]+(b[0]-a[0])*k/steps,a[1]+(b[1]-a[1])*k/steps]);}dense.push(dense[0]);curves=fitPotrace(dense);cache.set(ring,curves);}
  const mid=raw[Math.floor(raw.length/2)],forward=closestOnCurves(curves,raw[0]),end=closestOnCurves(curves,raw.at(-1));
  const extract=(all,a,b)=>{const out=[];let i=a.i;for(let k=0;k<=all.length;k++){const start=k===0?a.t:0,finish=i===b.i&&(k>0||b.t>a.t)?b.t:1;if(finish>start+1e-8)out.push(cropBezier(all[i],start,finish).map(p=>p.slice()));if(i===b.i&&(k>0||b.t>a.t))break;i=(i+1)%all.length;}return out;};
  const candidates=[extract(curves,forward,end),reverse(extract(curves,end,forward))];
  const score=parts=>{let d=Infinity;for(const c of parts)for(let i=0;i<=16;i++){const q=bezierAt(c,i/16);d=Math.min(d,(q[0]-mid[0])**2+(q[1]-mid[1])**2);}return d;};
  const out=score(candidates[0])<=score(candidates[1])?candidates[0]:candidates[1];
  if(!out.length)return [line(raw[0],raw.at(-1))];
  const start=out[0][0],last=out.at(-1)[3],da=raw[0].map((v,i)=>v-start[i]),db=raw.at(-1).map((v,i)=>v-last[i]);out[0][1]=out[0][1].map((v,i)=>v+da[i]);out[0][0]=raw[0];out.at(-1)[2]=out.at(-1)[2].map((v,i)=>v+db[i]);out.at(-1)[3]=raw.at(-1);return out;
}
function flattenCurve(curve,out,tolerance=.035,depth=0){
  if(depth>15||Math.max(sqDist(curve[1],curve[0],curve[3]),sqDist(curve[2],curve[0],curve[3]))<=tolerance*tolerance){out.push(curve[3]);return;}
  const mid=(a,b)=>[(a[0]+b[0])/2,(a[1]+b[1])/2],a=mid(curve[0],curve[1]),b=mid(curve[1],curve[2]),c=mid(curve[2],curve[3]),d=mid(a,b),e=mid(b,c),f=mid(d,e);
  flattenCurve([curve[0],a,d,f],out,tolerance,depth+1);flattenCurve([f,e,c,curve[3]],out,tolerance,depth+1);
}
const flatten=curves=>{const out=[curves[0][0]],owners=[];curves.forEach((c,i)=>{const start=out.length;flattenCurve(c,out);for(let j=start;j<out.length;j++)owners.push(i);});return {points:out,owners};};
function rawRange(raw,curve,cursor){
  const nearest=(p,start)=>{let index=start,best=Infinity;for(let i=start;i<raw.length;i++){const d=(p[0]-raw[i][0])**2+(p[1]-raw[i][1])**2;if(d<best){best=d;index=i;}}return index;};
  const a=nearest(curve[0],Math.min(cursor,raw.length-2)),b=nearest(curve[3],Math.min(a+1,raw.length-1));return {a,b,points:[curve[0],...raw.slice(a+1,b),curve[3]]};
}
const reverse=curves=>curves.slice().reverse().map(c=>c.slice().reverse());
const num=n=>Number(n.toFixed(5));
export const curvePath=curves=>'M'+curves[0][0].map(num).join(',')+curves.map(c=>'C'+c.slice(1).map(p=>p.map(num).join(',')).join(' ')).join('')+'Z';
const cross=(a,b,c)=>(b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0]);
function crossings(chains){
  const cells=new Map(),bad=new Map(),cellSize=6;const mark=(chain,curve)=>{if(!bad.has(chain))bad.set(chain,new Set());bad.get(chain).add(curve);};
  for(const chain of chains)for(let i=0;i<chain.points.length-1;i++){
    const a=chain.points[i],b=chain.points[i+1],entry={a,b,chain:chain.id,i,curve:chain.owners[i]},seen=new Set();
    for(let y=Math.floor(Math.min(a[1],b[1])/cellSize);y<=Math.floor(Math.max(a[1],b[1])/cellSize);y++)for(let x=Math.floor(Math.min(a[0],b[0])/cellSize);x<=Math.floor(Math.max(a[0],b[0])/cellSize);x++){
      const key=x+','+y,list=cells.get(key)||[];
      for(const other of list){const tag=other.chain+':'+other.i;if(seen.has(tag))continue;seen.add(tag);if(same(a,other.a)||same(a,other.b)||same(b,other.a)||same(b,other.b))continue;
        if(cross(a,b,other.a)*cross(a,b,other.b)<-1e-10&&cross(other.a,other.b,a)*cross(other.a,other.b,b)<-1e-10){mark(chain.id,chain.owners[i]);mark(other.chain,other.curve);}}
      list.push(entry);cells.set(key,list);
    }
  }
  return bad;
}

// Trace each color interface ONCE. Both regions use exactly the same Bezier
// curve in opposite directions; independent smoothing cannot create overlaps.
export function vectorizeRegions(ids,width,height,regions){
  const edges=[],nodes=new Map(),stride=width+1,fitCache=new WeakMap();
  const at=(x,y)=>x<0||y<0||x>=width||y>=height?-2:ids[y*width+x];
  const add=(a,b,right,left)=>{if(right===left)return;const edge={id:edges.length,a,b,right,left,pair:[Math.min(right,left),Math.max(right,left)].join(':')};edges.push(edge);for(const p of [a,b]){if(!nodes.has(p))nodes.set(p,[]);nodes.get(p).push(edge.id);}};
  for(let y=0;y<=height;y++)for(let x=0;x<width;x++)add(y*stride+x,y*stride+x+1,at(x,y),at(x,y-1));
  for(let y=0;y<height;y++)for(let x=0;x<=width;x++)add(y*stride+x,(y+1)*stride+x,at(x-1,y),at(x,y));
  const visited=new Uint8Array(edges.length),chains=[],point=key=>[key%stride,Math.floor(key/stride)];
  const regular=(node,pair)=>nodes.get(node).length===2&&nodes.get(node).every(id=>edges[id].pair===pair);
  const walk=(seed,start)=>{const keys=[start];let edge=seed,current=start;
    while(true){visited[edge.id]=1;const next=edge.a===current?edge.b:edge.a;keys.push(next);if(next===start||!regular(next,seed.pair))break;const candidate=nodes.get(next).find(id=>!visited[id]);if(candidate===undefined)break;current=next;edge=edges[candidate];}
    const right=seed.a===start?seed.right:seed.left,left=seed.a===start?seed.left:seed.right,raw=keys.map(point);let curves;
    try{if(right===-2||left===-2){const p=simplify(raw,.01);curves=p.slice(1).map((v,i)=>line(p[i],v));}else curves=same(raw[0],raw.at(-1))&&raw.length>=5?fitPotrace(raw):fitOpenBoundary(raw,right>=0?right:left,regions,fitCache);}catch{curves=raw.slice(1).map((p,i)=>line(raw[i],p));}
    if(curves.some(c=>c.some(p=>!p.every(Number.isFinite))))curves=raw.slice(1).map((p,i)=>line(raw[i],p));
    if(same(raw[0],raw.at(-1))){let index=0,best=Infinity;for(let i=0;i<raw.length-1;i++){const d=(raw[i][0]-curves[0][0][0])**2+(raw[i][1]-curves[0][0][1])**2;if(d<best){best=d;index=i;}}if(index){const rotated=[...raw.slice(index,-1),...raw.slice(0,index)];rotated.push(rotated[0]);raw.splice(0,raw.length,...rotated);}}
    chains.push({id:chains.length,start:keys[0],end:keys.at(-1),right,left,raw,curves,...flatten(curves)});
  };
  // Start open chains at junctions, then handle remaining closed interfaces.
  for(const edge of edges)if(!visited[edge.id]&&(!regular(edge.a,edge.pair)||!regular(edge.b,edge.pair)))walk(edge,!regular(edge.a,edge.pair)?edge.a:edge.b);
  for(const edge of edges)if(!visited[edge.id])walk(edge,edge.a);
  for(let pass=0;pass<8;pass++){
    const bad=crossings(chains);if(!bad.size)break;
    for(const [id,failed]of bad){const chain=chains[id],curves=[];let cursor=0;
      for(let k=0;k<chain.curves.length;k++){const curve=chain.curves[k],range=rawRange(chain.raw,curve,cursor);cursor=range.b;
        if(failed.has(k)){const raw=range.points;for(let j=1;j<raw.length;j++)curves.push(line(raw[j-1],raw[j]));}else curves.push(curve);
      }
      chain.curves=curves;Object.assign(chain,flatten(curves));
    }
  }
  const remaining=crossings(chains);for(const [id]of remaining){const chain=chains[id];chain.curves=chain.raw.slice(1).map((p,i)=>line(chain.raw[i],p));Object.assign(chain,flatten(chain.curves));}
  const byRegion=new Map();
  for(const chain of chains)for(const [id,forward]of [[chain.right,true],[chain.left,false]]){
    if(id<-1)continue;if(!byRegion.has(id))byRegion.set(id,[]);
    byRegion.get(id).push({chain:chain.id,start:forward?chain.start:chain.end,end:forward?chain.end:chain.start,forward});
  }
  let voidRings=[];
  for(const [id,directed]of byRegion){
    const pending=new Set(directed),starts=new Map();for(const item of directed){if(!starts.has(item.start))starts.set(item.start,[]);starts.get(item.start).push(item);}
    const rings=[],paths=[];
    while(pending.size){const first=pending.values().next().value,curves=[],points=[];let item=first,guard=0;
      do{pending.delete(item);const chain=chains[item.chain],part=item.forward?chain.curves:reverse(chain.curves),flat=item.forward?chain.points:chain.points.slice().reverse();curves.push(...part);points.push(...flat.slice(0,-1));
        if(item.end===first.start)break;
        const candidates=(starts.get(item.end)||[]).filter(c=>pending.has(c));if(!candidates.length)throw new Error('Vektör sınırı kapatılamadı.');
        const raw=item.forward?chain.raw:chain.raw.slice().reverse(),incoming=unit(raw.at(-1),raw.at(-2)),direction=v=>v[0]>.5?0:v[1]>.5?1:v[0]<-.5?2:3;
        const order=[1,0,3,2];candidates.sort((a,b)=>{const score=c=>{const r=chains[c.chain].raw,p=c.forward?r:r.slice().reverse();return order.indexOf((direction(unit(p[1],p[0]))-direction(incoming)+4)%4);};return score(a)-score(b);});item=candidates[0];
      }while(++guard<=directed.length);
      if(points.length>=3){rings.push(points);paths.push(curvePath(curves));}
    }
    if(id===-1)voidRings=rings;else{regions[id].rings=rings;regions[id].path=paths.join('');}
  }
  return {chains:chains.map(({raw,owners,...c})=>c),voidRings,curveCount:chains.reduce((n,c)=>n+c.curves.length,0)};
}
