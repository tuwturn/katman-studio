import {test} from 'node:test';
import assert from 'node:assert/strict';
import Module from 'manifold-3d';
import {editPart,fromSolid,toSolid} from '../src/mesh-ops.js';
import {editSurface,sameSurface} from '../src/mesh-surface-ops.js';
const wasm=await Module();wasm.setup();const M=wasm.Manifold;
const area={center:[5,5,2],u:[1,0,0],v:[0,1,0],n:[0,0,1],width:4,height:4,depth:3,offset:0,shape:'box'};
function defectiveText(){const base=M.cube([10,10,2]),letter=M.cube([2,2,1]).translate([4,4,2]),source=base.add(letter),part=fromSolid(source);part.triangles.push([...part.triangles[0]]);[base,letter,source].forEach(s=>s.delete());return part;}
test('surface fallback removes raised text from a rejected imported mesh',()=>{
 const part=defectiveText();assert.throws(()=>toSolid(wasm,part),/kapalı ve tutarlı/);const result=editSurface(part,[area],'erase');assert.equal(Math.max(...result.vertices.map(v=>v[2])),2);assert.ok(result.colors.every(c=>c.every(Number.isFinite)));assert.equal(sameSurface(part,result),false);
});
test('surface fallback full cut removes only the bounded footprint and supports circle',()=>{
 const part=defectiveText();for(const shape of ['box','circle']){const result=editSurface(part,[{...area,width:6,height:12,center:[8,5,2],shape}],'cut');assert.ok(result.triangles.length>0);assert.ok(result.vertices.every(v=>v.every(Number.isFinite)));assert.ok(result.vertices.some(v=>v[0]===0));assert.equal(sameSurface(part,result),false);}
});
test('missed selections remain detectable instead of reporting success',()=>{
 const part=defectiveText(),miss={...area,center:[100,100,100]};assert.equal(sameSurface(part,editSurface(part,[miss],'erase')),true);
 const base=M.cube([10,10,2]),valid=fromSolid(base);assert.equal(sameSurface(valid,editPart(wasm,valid,[miss],'erase')),true);base.delete();
});
test('surface comparison ignores indexing, winding order and Float32 conversion',()=>{
 const a={vertices:[[.123456789,0,0],[1,0,0],[0,1,0]],triangles:[[0,1,2]]},b={vertices:[a.vertices[2],a.vertices[0],a.vertices[1]].map(p=>p.map(Math.fround)),triangles:[[2,1,0]]};assert.equal(sameSurface(a,b),true);b.triangles.push([0,1,2]);assert.equal(sameSurface(a,b),false);
});
