// View quality only: never changes model geometry, colors or exported dimensions.
export function previewProfile({memoryGB=8,cores=8,software=false}={}){
 const low=software||memoryGB<=4||cores<=4;
 return{pixelRatio:low?1:2,shadowSize:low?1024:2048};
}
export function rendererProfile(renderer,nav=globalThis.navigator){
 const gl=renderer.getContext(),extension=gl.getExtension('WEBGL_debug_renderer_info');
 const name=extension?String(gl.getParameter(extension.UNMASKED_RENDERER_WEBGL)):'';
 return previewProfile({memoryGB:nav?.deviceMemory||8,cores:nav?.hardwareConcurrency||4,software:/swiftshader|llvmpipe|software rasterizer|basic render driver|warp/i.test(name)});
}
