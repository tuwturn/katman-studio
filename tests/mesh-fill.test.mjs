import {test} from 'node:test';
import assert from 'node:assert/strict';
import Module from 'manifold-3d';
import {buildFillAreas,projectAreas} from '../src/mesh-fill.js';
import {editPart,fromSolid,toSolid} from '../src/mesh-ops.js';
import {editSurface} from '../src/mesh-surface-ops.js';
import * as THREE from 'three';
const wasm=await Module();wasm.setup();const M=wasm.Manifold;
const area={center:[10,10,2],width:6,height:6,u:[1,0,0],v:[0,1,0],n:[0,0,1],shape:'polygon',points:[[-3,-3],[3,-3],[3,3],[-3,3]]},plane={origin:[0,0,4],u:area.u,v:area.v,n:area.n};
test('surface fill restores an engraving flush with the reference without raising surrounding material',()=>{
 const base=M.cube([20,20,4]),hole=M.cube([4,4,2]).translate([8,8,2]),source=base.subtract(hole),part=fromSolid(source);
 for(const options of [{},{thickness:2}]){const prepared=buildFillAreas(part,[area],plane,options),out=toSolid(wasm,editPart(wasm,part,prepared,'fill'));assert.ok(Math.abs(out.volume()-base.volume())<1e-5);assert.equal(out.boundingBox().max[2],4);out.delete();}
 [base,hole,source].forEach(s=>s.delete());
});
test('explicit Z height adds new material only inside the drawn footprint',()=>{
 const base=M.cube([20,20,4]),part=fromSolid(base),ready=buildFillAreas(part,[area],{...plane,origin:[0,0,6]}),out=toSolid(wasm,editPart(wasm,part,ready,'fill'));assert.ok(Math.abs(out.volume()-1672)<1e-5);assert.equal(out.boundingBox().max[2],6);base.delete();out.delete();
});
test('a drawn area can extend the model with a new flush surface',()=>{
 const base=M.cube([20,20,4]),part=fromSolid(base),ready=buildFillAreas(part,[{...area,center:[21,10,2]}],plane),out=toSolid(wasm,editPart(wasm,part,ready,'fill'));assert.ok(Math.abs(out.volume()-1696)<1e-5);assert.equal(out.boundingBox().max[0],24);assert.equal(out.boundingBox().max[2],4);base.delete();out.delete();
});
test('surface fill works on an interior vertical plane with a relative height offset',()=>{
 const base=M.cube([4,20,20]),hole=M.cube([2,4,4]).translate([2,8,8]),source=base.subtract(hole),part=fromSolid(source),side={...area,center:[4,10,10],u:[0,1,0],v:[0,0,1],n:[1,0,0]},target={origin:[4,0,0],u:side.u,v:side.v,n:side.n},out=toSolid(wasm,editPart(wasm,part,buildFillAreas(part,[side],target),'fill'));assert.ok(Math.abs(out.volume()-base.volume())<1e-5);const raised=buildFillAreas(part,[side],target,{offset:.5});assert.equal(raised[0].offset,.5);[base,hole,source,out].forEach(s=>s.delete());
});
test('retargeting preserves the footprint and rejects parallel projection without mutation',()=>{
 const saved=JSON.stringify(area),out=projectAreas([area],plane)[0];assert.deepEqual(out.center,[10,10,4]);assert.deepEqual(out.points,area.points);assert.equal(JSON.stringify(area),saved);assert.throws(()=>projectAreas([area],{origin:[0,0,0],u:[0,1,0],v:[0,0,1],n:[1,0,0]}),/paralel/);assert.throws(()=>buildFillAreas({vertices:[[0,0,0]]},[area],{...plane,origin:[0,0,-1]}),/altında/);assert.throws(()=>buildFillAreas({vertices:[[0,0,0]]},[area],plane,{thickness:0}),/kalınlığı/);
});
test('defective source surface fallback fills the engraving to the target plane',()=>{
 const base=M.cube([20,20,4]),hole=M.cube([4,4,2]).translate([8,8,2]),source=base.subtract(hole),part=fromSolid(source);part.triangles.push([...part.triangles[0]]);assert.throws(()=>toSolid(wasm,part));const ready=buildFillAreas(part,[area],plane),result=editSurface(part,ready,'fill'),ray=new THREE.Ray(new THREE.Vector3(10,10,10),new THREE.Vector3(0,0,-1)),hit=new THREE.Vector3(),heights=[];
 for(const t of result.triangles){if(ray.intersectTriangle(...t.map(i=>new THREE.Vector3(...result.vertices[i])),false,hit))heights.push(hit.z);}assert.ok(Math.abs(Math.max(...heights)-4)<1e-6);assert.ok(result.vertices.every(v=>v.every(Number.isFinite)));[base,hole,source].forEach(s=>s.delete());
});
