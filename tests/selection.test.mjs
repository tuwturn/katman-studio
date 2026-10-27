import {test} from 'node:test';
import assert from 'node:assert/strict';
import {matchingRegions,regionsInRectangle} from '../src/selection.js';
test('workspace exact color and tolerance select independent same/near-shade islands',()=>{
  const palette=[[150,40,20],[155,45,25],[20,100,40]],regions=[{id:0,color:0},{id:1,color:1},{id:2,color:2},{id:3,color:0}];
  assert.deepEqual(matchingRegions(regions,palette,0,0),[0,3]);
  assert.deepEqual(matchingRegions(regions,palette,0,3),[0,1,3]);
  assert.deepEqual(matchingRegions(regions,palette,0,100),[0,1,2,3]);
});
test('rectangle selects all touched vector regions, excluding transparent pixels; reverse drags work',()=>{
  const ids=new Int32Array([0,0,-1,1,0,-1,2,1,3,3,2,1]);
  assert.deepEqual(regionsInRectangle(ids,4,3,{x:1,y:0},{x:2,y:1}),[0,2]);
  assert.deepEqual(regionsInRectangle(ids,4,3,{x:2,y:1},{x:1,y:0}),[0,2]);
  assert.deepEqual(regionsInRectangle(ids,4,3,{x:10,y:10},{x:11,y:11}),[]);
});
