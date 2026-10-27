import {vectorizeRegions} from './vectorize.js';
import {detectBackground} from './background.js';
import {quantize,traceRegions,cleanLabels} from './core.js';
self.onmessage = ({data:m}) => {
  try {
    let {palette,labels}=m.labels?{palette:m.palette,labels:new Int16Array(m.labels)}:quantize(new Uint8ClampedArray(m.pixels),m.count,m.automatic);
    if(m.clean&&!m.labels)labels=cleanLabels(cleanLabels(labels,m.width,m.height),m.width,m.height);
    let {regions,ids}=traceRegions(labels,m.width,m.height,m.minArea);
    if(!m.labels){let changed=false;for(let p=0;p<labels.length;p++){if(ids[p]<0||regions[ids[p]].area!==1)continue;const x=p%m.width,y=Math.floor(p/m.width),neighbors=[];if(x)neighbors.push(p-1);if(x<m.width-1)neighbors.push(p+1);if(y)neighbors.push(p-m.width);if(y<m.height-1)neighbors.push(p+m.width);const votes=new Map();for(const n of neighbors)if(labels[n]>=0&&labels[n]!==labels[p])votes.set(labels[n],(votes.get(labels[n])||0)+1);const best=[...votes].sort((a,b)=>b[1]-a[1])[0];if(best&&best[1]>=3){labels[p]=best[0];changed=true;}}if(changed)({regions,ids}=traceRegions(labels,m.width,m.height,m.minArea));}
    const vectors=vectorizeRegions(ids,m.width,m.height,regions);
    const backgroundIds=detectBackground(ids,m.width,m.height,regions);
    self.postMessage({palette,labels,regions,ids,backgroundIds,...vectors,width:m.width,height:m.height},[labels.buffer,ids.buffer]);
  } catch(e) { self.postMessage({error:e.message}); }
};
