import {test} from 'node:test';
import assert from 'node:assert/strict';
import Module from 'manifold-3d';
import {polygonPoints,footprintsOverlap} from '../src/selection-polygon.js';
import {editPart,fromSolid,toSolid} from '../src/mesh-ops.js';
import {editSurface} from '../src/mesh-surface-ops.js';
const wasm=await Module();wasm.setup();const M=wasm.Manifold;
const points=[[0,0],[8,0],[8,3],[3,3],[3,8],[0,8]],area={center:[0,0,0],width:16,height:16,u:[1,0,0],v:[0,1,0],n:[0,0,1],depth:5,offset:0,shape:'polygon',points};
test('concave point selection cuts its actual footprint, retaining the notch',()=>{
 const base=M.cube([10,10,2]),letter=M.cube([1,1,1]).translate([6,6,2]),source=base.add(letter),part=fromSolid(source);
 for(const reversed of [false,true]){const result=editPart(wasm,part,[{...area,points:reversed?[...points].reverse():points}],'cut'),solid=toSolid(wasm,result);assert.ok(Math.abs(solid.volume()-123)<1e-5);assert.equal(solid.boundingBox().max[2],3);solid.delete();}
 [base,letter,source].forEach(s=>s.delete());
});
test('polygon fallback keeps original triangles in the excluded concave notch',()=>{
 const base=M.cube([10,10,2]),letter=M.cube([1,1,1]).translate([6,6,2]),source=base.add(letter),part=fromSolid(source);part.triangles.push([...part.triangles[0]]);
 const result=editSurface(part,[area],'cut'),key=(p,t)=>t.map(i=>p.vertices[i].map(Math.fround).join(',')).sort().join('|'),actual=new Set(result.triangles.map(t=>key(result,t))),notch=part.triangles.filter(t=>t.every(i=>part.vertices[i][0]>=6&&part.vertices[i][1]>=6));assert.ok(notch.length>=10);for(const t of notch)assert.ok(actual.has(key(part,t)));[base,letter,source].forEach(s=>s.delete());
});
test('crossing and degenerate selections fail before modifying geometry',()=>{
 assert.throws(()=>polygonPoints([[0,0],[5,5],[0,5],[5,0]]),/kesişiyor/);assert.throws(()=>polygonPoints([[0,0],[1,0],[2,0]]),/aynı çizgide/);assert.throws(()=>polygonPoints([[0,0],[0,0],[0,1]]),/Aynı noktayı/);assert.equal(footprintsOverlap(points,[[5,5],[6,5],[5,6]]),false);assert.equal(footprintsOverlap(points,[[1,1],[2,1],[1,2]]),true);
});
