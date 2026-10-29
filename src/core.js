import {backgroundRemoved,regionVisible} from './background.js';
import earcut from 'earcut';
import { zipSync, strToU8 } from 'fflate';
import {buildVectorSTLSurface,triangulateCaps} from './vector-mesh.js';

export const snap = value => Math.round(Math.max(0, Number(value) || 0) * 50) / 50;
export const MAX_HEIGHT = 250;
export const HEIGHT_STEPS = Object.freeze([0,0.02,0.04,0.08,0.16,0.32,0.64,1.28,2.56,5.12,10.24,20.48,40.96,81.92,163.84,250]);
export function snapHeight(value) {
  return Math.min(MAX_HEIGHT, snap(value));
}
export function stepHeight(value, direction) {
  const h=snapHeight(value);
  return direction>0 ? HEIGHT_STEPS.find(v=>v>h+1e-9)??MAX_HEIGHT : [...HEIGHT_STEPS].reverse().find(v=>v<h-1e-9)??0;
}
export const hex = rgb => '#' + rgb.map(v => Math.round(v).toString(16).padStart(2, '0')).join('');
const distance = (a,b) => (a[0]-b[0])**2+(a[1]-b[1])**2+(a[2]-b[2])**2;

// Perceptual distances separate dominant ink colors from JPEG/antialias blends.
const toLab=rgb=>{
  const c=rgb.map(v=>{v/=255;return v>.04045?((v+.055)/1.055)**2.4:v/12.92;});
  const f=v=>v>.008856?Math.cbrt(v):7.787*v+16/116;
  const x=f((.4124564*c[0]+.3575761*c[1]+.1804375*c[2])/.95047),y=f(.2126729*c[0]+.7151522*c[1]+.072175*c[2]),z=f((.0193339*c[0]+.119192*c[1]+.9503041*c[2])/1.08883);
  return [116*y-16,500*(x-y),200*(y-z)];
};
// Automatic mode chooses observed dominant colors; a requested maximum never
// forces extra colors into an image that contains fewer distinct inks.
export function quantize(data, count, automatic=false) {
  const histogram = new Map();
  for (let i=0; i<data.length; i+=4) {
    if (data[i+3]<128) continue;
    const key = (data[i]>>3)*1024+(data[i+1]>>3)*32+(data[i+2]>>3);
    let b=histogram.get(key);
    if (!b) { b=[0,0,0,0,data[i],data[i+1],data[i+2]]; histogram.set(key,b); }
    b[0]+=data[i]; b[1]+=data[i+1]; b[2]+=data[i+2]; b[3]++;
  }
  const bins=[...histogram.values()].map(b=>{const item=[b[0]/b[3],b[1]/b[3],b[2]/b[3],b[3]];item.source=b.slice(4,7);item.lab=toLab(item.slice(0,3));return item;}).sort((a,b)=>b[3]-a[3]);
  if (!bins.length) throw new Error('Görsel tamamen şeffaf. Görünür bir görsel seçin.');
  let automaticPalette=null;
  if(automatic){
    const chosen=[],pixelCount=bins.reduce((n,b)=>n+b[3],0),minimumMass=Math.max(4,pixelCount*.005),minimumPeak=Math.max(3,pixelCount*.001);
    for(const bin of bins){
      if(bin[3]<minimumPeak&&chosen.length)continue;
      if(chosen.some(other=>distance(bin.lab,other.lab)<18**2))continue;
      const mass=bins.reduce((sum,other)=>sum+(distance(bin.lab,other.lab)<=12**2?other[3]:0),0);
      if(mass<minimumMass&&chosen.length)continue;
      chosen.push(bin);if(chosen.length>=count)break;
    }
    automaticPalette=chosen.map(b=>b.source);
  }
  const centers=[bins[0].slice(0,3)];
  while (!automatic && centers.length<Math.min(count,bins.length)) {
    let best=null, score=-1;
    for (const b of bins) { const s=Math.min(...centers.map(c=>distance(b,c)))*Math.sqrt(b[3]); if(s>score){score=s;best=b;} }
    if (score<1) break;
    centers.push(best.slice(0,3));
  }
  for(let iteration=0;!automatic&&iteration<16;iteration++) {
    const sums=centers.map(()=>[0,0,0,0]);
    for(const b of bins) {
      let k=0,d=Infinity;
      centers.forEach((c,j)=>{const v=distance(b,c);if(v<d){d=v;k=j;}});
      for(let j=0;j<3;j++) sums[k][j]+=b[j]*b[3]; sums[k][3]+=b[3];
    }
    let movement=0;
    centers.forEach((c,k)=>{if(sums[k][3]) {const n=sums[k].slice(0,3).map(v=>v/sums[k][3]);movement+=distance(c,n);centers[k]=n;}});
    if(movement<0.05) break;
  }
  const palette=automaticPalette||centers.map(c=>bins.reduce((best,b)=>distance(c,b)<distance(c,best)?b:best,bins[0]).source);
  const unique=[...new Map(palette.map(c=>[c.join(','),c])).values()];
  palette.splice(0,palette.length,...unique);
  const labels=new Int16Array(data.length/4).fill(-1);
  for(let p=0;p<labels.length;p++) {
    if(data[p*4+3]<128) continue;
    const rgb=[data[p*4],data[p*4+1],data[p*4+2]];
    let k=0,d=Infinity;palette.forEach((c,j)=>{const v=distance(rgb,c);if(v<d){d=v;k=j;}});labels[p]=k;
  }
  return {palette,labels};
}

export function traceRegions(labels,width,height,minArea=1) {
  const ids=new Int32Array(labels.length).fill(-1), regions=[];
  const queue=new Int32Array(labels.length);
  for(let start=0;start<labels.length;start++) {
    if(labels[start]<0 || ids[start]>=0) continue;
    const id=regions.length, color=labels[start];let head=0,tail=1;
    queue[0]=start;ids[start]=id;
    const pixels=[];
    while(head<tail) {
      const p=queue[head++];pixels.push(p);const x=p%width,y=Math.floor(p/width);
      const visit=n=>{if(ids[n]<0&&labels[n]===color){ids[n]=id;queue[tail++]=n;}};
      if(x) visit(p-1);if(x<width-1)visit(p+1);if(y)visit(p-width);if(y<height-1)visit(p+width);
    }
    regions.push({id,color,area:tail,pixels,height:0.08,visible:tail>=minArea});
  }
  for(const r of regions) {
    const edges=new Map();
    const add=(x,y,dx,dy)=>{const key=y*(width+1)+x;let e=edges.get(key);if(!e){e=[];edges.set(key,e);}e.push([x+dx,y+dy,dx===1?0:dy===1?1:dx===-1?2:3]);};
    for(const p of r.pixels){const x=p%width,y=Math.floor(p/width);
      if(y===0||ids[p-width]!==r.id)add(x,y,1,0);
      if(x===width-1||ids[p+1]!==r.id)add(x+1,y,0,1);
      if(y===height-1||ids[p+width]!==r.id)add(x+1,y+1,-1,0);
      if(x===0||ids[p-1]!==r.id)add(x,y+1,0,-1);
    }
    const rings=[];
    while(edges.size){
      const first=edges.keys().next().value, ring=[];
      let key=first,dir=-1;
      do {
        const x=key%(width+1),y=Math.floor(key/(width+1));ring.push([x,y]);
        const candidates=edges.get(key);
        if(!candidates?.length) throw new Error('Kontur kapatılamadı. Daha düşük çözünürlük deneyin.');
        let idx=0;
        if(dir>=0&&candidates.length>1){const order=[1,0,3,2];idx=candidates.map((e,i)=>({i,s:order.indexOf((e[2]-dir+4)%4)})).sort((a,b)=>a.s-b.s)[0].i;}
        const edge=candidates.splice(idx,1)[0];if(!candidates.length)edges.delete(key);
        dir=edge[2];key=edge[1]*(width+1)+edge[0];
      }while(key!==first);
      // Exact collinear simplification retains shared boundaries and small holes.
      const simple=ring.filter((b,i)=>{const a=ring[(i+ring.length-1)%ring.length],c=ring[(i+1)%ring.length];return (b[0]-a[0])*(c[1]-b[1])!==(b[1]-a[1])*(c[0]-b[0]);});
      if(simple.length>=3)rings.push(simple);
    }
    r.rings=rings;delete r.pixels;
  }
  return {regions,ids};
}

// Optional categorical majority filter removes antialiasing specks without
// connecting transparent gaps. Disable to retain single-pixel design features.
export function cleanLabels(labels,width,height) {
  const result=labels.slice();
  for(let y=0;y<height;y++)for(let x=0;x<width;x++){
    const p=y*width+x;if(labels[p]<0)continue;const counts=new Map();
    for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){const xx=x+dx,yy=y+dy;if(xx<0||yy<0||xx>=width||yy>=height)continue;const c=labels[yy*width+xx];if(c>=0)counts.set(c,(counts.get(c)||0)+1);}
    let best=labels[p],n=counts.get(best)||0;
    for(const [c,count]of counts)if(count>n){best=c;n=count;}
    if(n>(counts.get(labels[p])||0))result[p]=best;
  }
  return result;
}

export const signedArea=ring=>ring.reduce((s,a,i)=>{const b=ring[(i+1)%ring.length];return s+a[0]*b[1]-b[0]*a[1];},0)/2;
const inside=(p,ring)=>{let result=false;for(let i=0,j=ring.length-1;i<ring.length;j=i++){const a=ring[i],b=ring[j];if((a[1]>p[1])!==(b[1]>p[1])&&p[0]<(b[0]-a[0])*(p[1]-a[1])/(b[1]-a[1])+a[0])result=!result;}return result;};

export function extrude(rings,scale,imageWidth,imageHeight,z0,z1) {
  const vertices=[],triangles=[];
  for(const cap of triangulateCaps(rings)){
    const group=cap.rings;
    const flat=cap.points.flatMap(p=>[(p[0]-imageWidth/2)*scale,(imageHeight/2-p[1])*scale]);
    const offset=vertices.length,n=flat.length/2;
    for(let i=0;i<n;i++)vertices.push([flat[i*2],flat[i*2+1],z0]);
    for(let i=0;i<n;i++)vertices.push([flat[i*2],flat[i*2+1],z1]);
    const indices=cap.triangles.flat();
    for(let i=0;i<indices.length;i+=3){let [a,b,c]=indices.slice(i,i+3);const cross=(flat[b*2]-flat[a*2])*(flat[c*2+1]-flat[a*2+1])-(flat[b*2+1]-flat[a*2+1])*(flat[c*2]-flat[a*2]);if(cross<0)[b,c]=[c,b];triangles.push([offset+a+n,offset+b+n,offset+c+n],[offset+c,offset+b,offset+a]);}
    let start=0;
    for(const ring of group){for(let j=0;j<ring.length;j++){const a=offset+start+j,b=offset+start+(j+1)%ring.length;triangles.push([a,a+n,b+n],[a,b+n,b]);}start+=ring.length;}
  }
  return {vertices,triangles};
}

export function buildParts(project) {
  const {regions,palette,width,height,modelWidth,baseHeight,baseColor}=project,scale=modelWidth/width,parts=[];
  if(baseHeight>0&&!project.removeBackground) parts.push({...extrude([[[0,0],[width,0],[width,height],[0,height]]],scale,width,height,0,baseHeight),name:'Taban',color:baseColor,regionId:-1});
  if(baseHeight>0&&project.removeBackground)for(const r of regions)if(!backgroundRemoved(project,r))parts.push({...extrude(r.rings,scale,width,height,0,baseHeight),name:`Taban ${r.id+1}`,color:baseColor,regionId:-1});
  for(const r of regions)if(regionVisible(project,r)&&snapHeight(r.height)>0)parts.push({...extrude(r.rings,scale,width,height,baseHeight,Number((baseHeight+snapHeight(r.height)).toFixed(6))),name:`Bölge ${r.id+1}`,color:hex(palette[r.color]),regionId:r.id});
  return parts;
}

const escapeXML=s=>String(s).replace(/[<>&"']/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;'}[c]));
const num=n=>Number(n.toFixed(6));
export function export3MF(parts) {
  const colors=[...new Set(parts.flatMap(p=>[p.color,...(p.vertexColors||[])]))];
  const colorIndex=new Map(colors.map((c,i)=>[c,i]));
  // Core base materials preserve named printable parts; the materials extension
  // additionally records explicit color design intent on every triangle.
  const objects=parts.map((p,i)=>`<object id="${i+3}" type="model" name="${escapeXML(p.name)}" pid="1" pindex="${colorIndex.get(p.color)}"><mesh><vertices>${p.vertices.map(v=>`<vertex x="${num(v[0])}" y="${num(v[1])}" z="${num(v[2])}"/>`).join('')}</vertices><triangles>${p.triangles.map(t=>`<triangle v1="${t[0]}" v2="${t[1]}" v3="${t[2]}" pid="2" p1="${colorIndex.get(p.vertexColors?.[t[0]]||p.color)}" p2="${colorIndex.get(p.vertexColors?.[t[1]]||p.color)}" p3="${colorIndex.get(p.vertexColors?.[t[2]]||p.color)}"/>`).join('')}</triangles></mesh></object>`).join('');
  const assembly=parts.length+3;
  const xml=`<?xml version="1.0" encoding="UTF-8"?><model unit="millimeter" xml:lang="tr-TR" xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02" xmlns:m="http://schemas.microsoft.com/3dmanufacturing/material/2015/02"><metadata name="Application">Katman</metadata><resources><basematerials id="1">${colors.map((c,i)=>`<base name="Renk ${i+1} ${c}" displaycolor="${c}FF"/>`).join('')}</basematerials><m:colorgroup id="2">${colors.map(c=>`<m:color color="${c}FF"/>`).join('')}</m:colorgroup>${objects}<object id="${assembly}" type="model" name="Katman model"><components>${parts.map((_,i)=>`<component objectid="${i+3}"/>`).join('')}</components></object></resources><build><item objectid="${assembly}"/></build></model>`;
  return zipSync({
    '[Content_Types].xml':strToU8('<?xml version="1.0" encoding="UTF-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="model" ContentType="application/vnd.ms-package.3dmanufacturing-3dmodel+xml"/></Types>'),
    '_rels/.rels':strToU8('<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Target="/3D/3dmodel.model" Id="rel0" Type="http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel"/></Relationships>'),
    '3D/3dmodel.model':strToU8(xml)
  },{level:6});
}

export function exportSTL(parts) {
  const count=parts.reduce((s,p)=>s+p.triangles.length,0),buffer=new ArrayBuffer(84+count*50),view=new DataView(buffer);
  new Uint8Array(buffer).set(strToU8('Katman | millimeters | binary STL'));view.setUint32(80,count,true);let o=84;
  for(const p of parts)for(const t of p.triangles){const [a,b,c]=t.map(i=>p.vertices[i]),u=b.map((v,i)=>v-a[i]),v=c.map((n,i)=>n-a[i]);const normal=[u[1]*v[2]-u[2]*v[1],u[2]*v[0]-u[0]*v[2],u[0]*v[1]-u[1]*v[0]],len=Math.hypot(...normal)||1;for(const n of [...normal.map(n=>n/len),...a,...b,...c]){view.setFloat32(o,n,true);o+=4;}o+=2;}
  return new Uint8Array(buffer);
}

// A single exterior height-field surface for STL: no coincident internal
// walls between color regions or between the relief and the rectangular base.
export function buildSTLSurface(project) {
  if(project.chains)return buildVectorSTLSurface(project,snapHeight);
  const {width:w,height:h}=project,scale=project.modelWidth/w,base=Math.round(project.baseHeight*50),levels=new Int32Array(w*h);
  for(let i=0;i<levels.length;i++){const r=project.regions[project.ids[i]];levels[i]=project.removeBackground&&(!r||backgroundRemoved(project,r))?0:base+(r&&regionVisible(project,r)?Math.round(snapHeight(r.height)*50):0);}
  const at=(x,y)=>x<0||y<0||x>=w||y>=h?0:levels[y*w+x];
  const corners=(x,y)=>[0,at(x-1,y-1),at(x,y-1),at(x-1,y),at(x,y)];
  const vertices=[],triangles=[],lookup=new Map();
  const vertex=(x,y,z)=>{const key=`${x},${y},${z}`;if(lookup.has(key))return lookup.get(key);const id=vertices.length;vertices.push([(x-w/2)*scale,(h/2-y)*scale,z/50]);lookup.set(key,id);return id;};
  const wall=(ax,ay,bx,by,lo,hi)=>{
    const az=[...new Set([lo,hi,...corners(ax,ay).filter(z=>z>lo&&z<hi)])].sort((a,b)=>a-b),bz=[...new Set([lo,hi,...corners(bx,by).filter(z=>z>lo&&z<hi)])].sort((a,b)=>b-a);
    const ring=[...az.map(z=>vertex(ax,ay,z)),...bz.map(z=>vertex(bx,by,z))],center=vertex((ax+bx)/2,(ay+by)/2,(lo+hi)/2);
    for(let i=0;i<ring.length;i++)triangles.push([center,ring[i],ring[(i+1)%ring.length]]);
  };
  for(let y=0;y<h;y++)for(let x=0;x<w;x++){
    const z=at(x,y);if(!z)continue;
    const top=[[x,y],[x+1,y],[x+1,y+1],[x,y+1]].map(p=>vertex(...p,z)),bottom=[[x,y],[x+1,y],[x+1,y+1],[x,y+1]].map(p=>vertex(...p,0));
    triangles.push([top[0],top[2],top[1]],[top[0],top[3],top[2]],[bottom[0],bottom[1],bottom[2]],[bottom[0],bottom[2],bottom[3]]);
    if(at(x,y-1)<z)wall(x,y,x+1,y,at(x,y-1),z);
    if(at(x+1,y)<z)wall(x+1,y,x+1,y+1,at(x+1,y),z);
    if(at(x,y+1)<z)wall(x+1,y+1,x,y+1,at(x,y+1),z);
    if(at(x-1,y)<z)wall(x,y+1,x,y,at(x-1,y),z);
  }
  let nonManifoldCorners=0;
  for(let y=0;y<=h;y++)for(let x=0;x<=w;x++){
    const a=at(x-1,y-1),b=at(x,y-1),c=at(x,y),d=at(x-1,y);
    if(Math.min(a,c)>Math.max(b,d)||Math.min(b,d)>Math.max(a,c))nonManifoldCorners++;
  }
  return {vertices,triangles,nonManifoldCorners};
}
export function exportOBJ(parts) {
  let obj='# Katman — units: millimeters\nmtllib model.mtl\n',offset=1,mtl='';
  parts.forEach((p,i)=>{obj+=`o part_${i}\nusemtl color_${i}\n`;obj+=p.vertices.map((v,k)=>`v ${v.map(num).join(' ')}${p.vertexColors?.[k]?' '+p.vertexColors[k].match(/\w\w/g).map(x=>num(parseInt(x,16)/255)).join(' '):''}\n`).join('');obj+=p.triangles.map(t=>`f ${t.map(v=>v+offset).join(' ')}\n`).join('');offset+=p.vertices.length;const rgb=p.vertexColors?[1,1,1]:p.color.match(/\w\w/g).map(s=>parseInt(s,16)/255);mtl+=`newmtl color_${i}\nKd ${rgb.join(' ')}\nd 1\n\n`;});
  return zipSync({'model.obj':strToU8(obj),'model.mtl':strToU8(mtl)});
}
export function exportSVG(project) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${project.modelWidth}mm" height="${project.modelWidth*project.height/project.width}mm" viewBox="0 0 ${project.width} ${project.height}">${project.regions.filter(r=>regionVisible(project,r)).map(r=>`<path id="region-${r.id+1}" fill="${hex(project.palette[r.color])}" fill-rule="evenodd" data-height-mm="${r.height}" d="${r.path||r.rings.map(ring=>'M'+ring.map(p=>p.join(',')).join('L')+'Z').join('')}"/>`).join('')}</svg>`;
}
