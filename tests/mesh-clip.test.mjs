import {test} from 'node:test';
import assert from 'node:assert/strict';
import {boundedSubtract} from '../src/mesh-clip.js';
const source={vertices:[[0,0,0],[100,0,0],[0,100,0]],colors:[[1,0,0],[0,1,0],[0,0,1]],triangles:[[0,1,2]]},empty={vertices:[],triangles:[]};
const area={center:[10,10,0],u:[1,0,0],v:[0,1,0],n:[0,0,1],width:10,height:10,offset:-1,depth:2,shape:'polygon',points:[[-5,-5],[5,-5],[5,5],[-5,5]]};
function surfaceArea(part){return part.triangles.reduce((s,t)=>{const[a,b,c]=t.map(i=>part.vertices[i]),u=b.map((x,i)=>x-a[i]),v=c.map((x,i)=>x-a[i]);return s+Math.hypot(u[1]*v[2]-u[2]*v[1],u[2]*v[0]-u[0]*v[2],u[0]*v[1]-u[1]*v[0])/2;},0);}
test('long crossing faces keep their outside fragments even when the classifier drops everything',()=>{
 const result=boundedSubtract(source,[area],empty);assert.ok(Math.abs(surfaceArea(result)-4900)<1e-7);for(let i=0;i<result.vertices.length;i++){const[x,y]=result.vertices[i];assert.ok(Math.abs(result.colors[i][0]-(1-x/100-y/100))<1e-8);assert.ok(Math.abs(result.colors[i][1]-x/100)<1e-8);assert.ok(Math.abs(result.colors[i][2]-y/100)<1e-8);}
});
test('concave and circular footprints remove only their exact area from a crossing face',()=>{
 const concave={...area,center:[0,0,0],width:16,height:16,points:[[0,0],[8,0],[8,3],[3,3],[3,8],[0,8]]};assert.ok(Math.abs(surfaceArea(boundedSubtract(source,[concave],empty))-4961)<1e-7);
 const circle={...area,shape:'circle',width:2,height:2},expected=5000-32*Math.sin(Math.PI/32);assert.ok(Math.abs(surfaceArea(boundedSubtract(source,[circle],empty))-expected)<1e-7);
});
test('overlapping selections subtract the union and oblique cuts preserve remote fragments',()=>{
 const second={...area,center:[15,10,0]};assert.ok(Math.abs(surfaceArea(boundedSubtract(source,[area,second],empty))-4850)<1e-7);
 const tilt=Math.PI/6,oblique={...area,n:[Math.sin(tilt),0,Math.cos(tilt)],u:[Math.cos(tilt),0,-Math.sin(tilt)],offset:-100,depth:200};assert.ok(Math.abs(surfaceArea(boundedSubtract(source,[oblique],empty))-(5000-100/Math.cos(tilt)))<1e-7);
});
test('candidate cut caps are clipped to the selected volume and unchanged faces retain exact coordinates',()=>{
 const far={...source,vertices:source.vertices.map(p=>p.map((x,i)=>x+(i===0?200:0)))},unchanged=boundedSubtract(far,[area],empty);assert.deepEqual(unchanged.vertices,far.vertices);assert.deepEqual(unchanged.triangles,far.triangles);
 const candidate={vertices:[[4.999995,-100,-1],[4.999995,100,-1],[4.999995,100,1]],triangles:[[0,1,2]]},result=boundedSubtract(source,[area],candidate);let caps=0;for(const t of result.triangles){const points=t.map(i=>result.vertices[i]);if(points.some(p=>Math.abs(p[2])>1e-7)){caps++;for(const[x,y,z]of points){assert.ok(x>=5-1e-7&&x<=15+1e-7);assert.ok(y>=5-1e-7&&y<=15+1e-7);assert.ok(z>=-1-1e-7&&z<=1+1e-7);}}}assert.ok(caps>0);
});
test('coplanar caps cover overlapping selections once without holes',()=>{
 const candidate={vertices:[[0,0,-1],[100,0,-1],[0,100,-1]],triangles:[[0,1,2]]},second={...area,center:[15,10,0]},result=boundedSubtract(source,[area,second],candidate);assert.ok(Math.abs(surfaceArea(result)-5000)<1e-7);
});
