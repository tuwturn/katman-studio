import * as THREE from 'three';
import {MeshBVH} from 'three-mesh-bvh';
export function displayBuffers(part){
 const position=new Float32Array(part.vertices.length*3),color=new Float32Array(position.length),index=new Uint32Array(part.triangles.length*3);
 for(let i=0;i<part.vertices.length;i++){position.set(part.vertices[i],i*3);color.set(part.colors?.[i]||[.48,.63,.85],i*3);}for(let i=0;i<part.triangles.length;i++)index.set(part.triangles[i],i*3);
 const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(position,3));g.setIndex(new THREE.BufferAttribute(index,1));g.computeVertexNormals();g.computeBoundingBox();g.computeBoundingSphere();
 const bvh=part.triangles.length>5000?MeshBVH.serialize(new MeshBVH(g,{indirect:true}),{cloneBuffers:false}):null;
 const result={position,color,index,normal:g.getAttribute('normal').array,bvh,box:[g.boundingBox.min.toArray(),g.boundingBox.max.toArray()],sphere:[g.boundingSphere.center.toArray(),g.boundingSphere.radius]};g.dispose();return result;
}
export function displayTransfers(displays){const buffers=new Set();for(const d of displays){for(const a of [d.position,d.color,d.index,d.normal,d.bvh?.index,d.bvh?.indirectBuffer])if(a)buffers.add(a.buffer);for(const root of d.bvh?.roots||[])buffers.add(root);}return[...buffers];}
export function geometryFromDisplay(d){const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(d.position,3));g.setAttribute('color',new THREE.BufferAttribute(d.color,3));if(d.normal)g.setAttribute('normal',new THREE.BufferAttribute(d.normal,3));g.setIndex(new THREE.BufferAttribute(d.index,1));g.boundingBox=new THREE.Box3(new THREE.Vector3(...d.box[0]),new THREE.Vector3(...d.box[1]));g.boundingSphere=new THREE.Sphere(new THREE.Vector3(...d.sphere[0]),d.sphere[1]);if(d.bvh)g.boundsTree=MeshBVH.deserialize(d.bvh,g,{setIndex:false});return g;}
