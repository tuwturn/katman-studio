import {test} from 'node:test';
import assert from 'node:assert/strict';
import Module from 'manifold-3d';
import {editPart,fromSolid,toSolid,splitPart} from '../src/mesh-ops.js';
const wasm=await Module();wasm.setup();const M=wasm.Manifold;
const area={center:[0,0,2],u:[1,0,0],v:[0,1,0],n:[0,0,1],width:8,height:8,depth:3,offset:0,shape:'box'};
test('local raised text on inner floor is erased without cutting surrounding walls',()=>{
 const outer=M.cube([30,30,12]),voidBox=M.cube([26,26,12]).translate([2,2,2]),cup=outer.subtract(voidBox),letter=M.cube([4,2,1]).translate([13,14,2]),source=cup.add(letter);
 const part=fromSolid(source,{name:'Cup'}),region={...area,center:[15,15,2]},result=editPart(wasm,part,[region],'erase'),actual=toSolid(wasm,result);
 assert.ok(Math.abs(actual.volume()-cup.volume())<1e-5,'only raised lettering is removed');assert.deepEqual(actual.boundingBox(),cup.boundingBox());assert.equal(actual.status(),'NoError');
 for(const p of [outer,voidBox,cup,letter,source,actual])p.delete();
});
test('engraved text is filled locally up to the picked plane',()=>{
 const base=M.cube([20,20,4],true),cutter=M.cube([4,2,2],true).translate([0,0,2]),engraved=base.subtract(cutter),part=fromSolid(engraved),result=editPart(wasm,part,[{...area,depth:2}],'fill'),actual=toSolid(wasm,result);
 assert.ok(Math.abs(actual.volume()-base.volume())<1e-5);assert.equal(actual.status(),'NoError');[base,cutter,engraved,actual].forEach(p=>p.delete());
});
test('inner vertical wall text uses its own reference normal, not a global Z cut',()=>{
 const base=M.cube([3,20,20]),letter=M.cube([1,3,3]).translate([3,8,8]),source=base.add(letter),part=fromSolid(source),result=editPart(wasm,part,[{...area,center:[3,10,10],u:[0,1,0],v:[0,0,1],n:[1,0,0]}],'erase'),actual=toSolid(wasm,result);
 assert.ok(Math.abs(actual.volume()-base.volume())<1e-5);assert.deepEqual(actual.boundingBox(),base.boundingBox());[base,letter,source,actual].forEach(p=>p.delete());
});
test('disconnected letters can be separated, malformed open meshes fail without editing',()=>{
 const a=M.cube([2,2,2]),b=M.cube([2,2,2]).translate([5,0,0]),c=a.add(b),part=fromSolid(c),pieces=splitPart(wasm,part);assert.equal(pieces.length,2);
 assert.throws(()=>editPart(wasm,{vertices:[[0,0,0],[1,0,0],[0,1,0]],triangles:[[0,1,2]]},[area],'erase'),/kapalı/);[a,b,c].forEach(p=>p.delete());
});
test('a circular edit leaves nearby unselected raised text intact',()=>{
 const base=M.cube([30,20,4],true),a=M.cube([2,2,1]).translate([-1,-1,2]),b=M.cube([2,2,1]).translate([9,-1,2]),one=base.add(a),source=one.add(b),part=fromSolid(source),result=editPart(wasm,part,[{...area,shape:'circle'}],'erase'),solid=toSolid(wasm,result);
 assert.ok(Math.abs(solid.volume()-(base.volume()+b.volume()))<1e-5);assert.equal(solid.status(),'NoError');[base,a,b,one,source,solid].forEach(p=>p.delete());
});
test('full-depth area cut is bounded to its footprint and can remove a whole isolated part',()=>{
 const base=M.cube([10,10,4],true),part=fromSolid(base),result=editPart(wasm,part,[{...area,width:2,height:3}],'cut'),actual=toSolid(wasm,result);
 assert.ok(Math.abs(actual.volume()-376)<1e-5);assert.equal(actual.status(),'NoError');
 assert.equal(editPart(wasm,part,[{...area,width:30,height:30}],'cut'),null);
 [base,actual].forEach(p=>p.delete());
});
