import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {acceleratedRaycast} from 'three-mesh-bvh';
import {demandRenderer} from '../src/demand-render.js';
import {displayBuffers,displayTransfers,geometryFromDisplay} from '../src/mesh-display.js';
import {exportMesh} from '../src/mesh-export.js';
import {exportSTL} from '../src/core.js';
import {unzipSync,strFromU8} from 'fflate';
test('idle scenes stop drawing, invalidations coalesce, and hidden scenes resume',()=>{
 const queue=[];let draws=0,visible=true,moving=0;const invalidate=demandRenderer({requestFrame:fn=>queue.push(fn),visible:()=>visible,update:()=>moving-->0,render:()=>draws++});invalidate();invalidate();assert.equal(queue.length,1);queue.shift()();assert.equal(draws,1);assert.equal(queue.length,0);moving=2;invalidate();while(queue.length)queue.shift()();assert.equal(draws,4);visible=false;invalidate();assert.equal(queue.length,0);visible=true;invalidate();queue.shift()();assert.equal(draws,5);
});
test('transferred display buffers preserve triangle order, colors and BVH picking',()=>{
 const source=new THREE.SphereGeometry(1,128,64),p=source.getAttribute('position'),part={vertices:Array.from({length:p.count},(_,i)=>[p.getX(i),p.getY(i),p.getZ(i)]),triangles:Array.from({length:source.index.count/3},(_,i)=>[source.index.getX(i*3),source.index.getX(i*3+1),source.index.getX(i*3+2)])};const buffers=displayBuffers(part),index=Array.from(buffers.index),copy=structuredClone(buffers,{transfer:displayTransfers([buffers])});assert.equal(buffers.position.byteLength,0);const g=geometryFromDisplay(copy);assert.deepEqual(Array.from(g.index.array),index);assert.deepEqual(Array.from(g.getAttribute('color').array.slice(0,3)),[.48,.63,.85].map(Math.fround));const material=new THREE.MeshBasicMaterial({side:THREE.DoubleSide}),plain=new THREE.Mesh(source,material),fast=new THREE.Mesh(g,material);fast.raycast=acceleratedRaycast;const ray=new THREE.Raycaster(new THREE.Vector3(.1,.1,3),new THREE.Vector3(0,0,-1)),a=ray.intersectObject(plain),b=ray.intersectObject(fast);assert.equal(a.length,b.length);a.forEach((hit,i)=>{assert.ok(Math.abs(hit.distance-b[i].distance)<1e-6);assert.equal(hit.faceIndex,b[i].faceIndex);});g.dispose();source.dispose();material.dispose();
});
test('background export keeps STL geometry and per-vertex 3MF/OBJ colors',()=>{
 const part={name:'Colored',vertices:[[0,0,0],[1,0,0],[0,1,0]],triangles:[[0,1,2]],colors:[[1,0,0],[0,1,0],[0,0,1]]};assert.deepEqual(exportMesh([part],'stl'),exportSTL([part]));const xml=strFromU8(unzipSync(exportMesh([part],'3mf'))['3D/3dmodel.model']);for(const color of ['#ff0000','#00ff00','#0000ff'])assert.ok(xml.includes(color));const obj=strFromU8(unzipSync(exportMesh([part],'obj'))['model.obj']);assert.match(obj,/v 0 0 0 1 0 0/);assert.match(obj,/v 1 0 0 0 1 0/);
});
