// Only remove the dominant border color's edge-connected components. Enclosed
// regions of the same color (lettering, highlights) remain part of the design.
export function detectBackground(ids,width,height,regions){
 const border=[];
 for(let x=0;x<width;x++){border.push(x);if(height>1)border.push((height-1)*width+x);}
 for(let y=1;y<height-1;y++){border.push(y*width);if(width>1)border.push(y*width+width-1);}
 const votes=new Map();let transparent=0;
 for(const i of border){const r=regions[ids[i]];if(!r){transparent++;continue;}votes.set(r.color,(votes.get(r.color)||0)+1);}
 if(transparent>border.length*.25)return [];
 const best=[...votes].sort((a,b)=>b[1]-a[1])[0];
 if(!best||best[1]<border.length*.55)return [];
 const corners=[0,width-1,(height-1)*width,width*height-1];
 if(corners.filter(i=>regions[ids[i]]?.color===best[0]).length<2)return [];
 return [...new Set(border.map(i=>ids[i]).filter(id=>regions[id]?.color===best[0]))];
}
export const backgroundRemoved=(project,region)=>Boolean(project.removeBackground&&project.backgroundIds?.includes(region.id));
export const regionVisible=(project,region)=>region.visible&&!backgroundRemoved(project,region);
