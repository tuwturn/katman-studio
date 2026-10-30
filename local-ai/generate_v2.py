"""Offline, two-stage free text -> approved concept -> real 3D geometry."""
import gc, json, os, pathlib, socket, sys, time
from install_v2 import SOURCE

def report(message, **extra):
    print(json.dumps({'message':message,**extra}),flush=True)

def deny_network(*args,**kwargs):
    raise RuntimeError('Üretimde ağ erişimi kapalı. Yerel motor kurulumunu tamamlayın.')

def clean_mesh(vertices,faces):
    """Remove coincident/zero-area output faces without moving or inventing a surface."""
    import numpy as np,trimesh
    mesh=trimesh.Trimesh(np.asarray(vertices).round(6),faces,process=False)
    mesh.merge_vertices(digits_vertex=6)
    mesh.update_faces(mesh.unique_faces())
    mesh.update_faces(mesh.nondegenerate_faces(height=0))
    mesh.remove_unreferenced_vertices()
    if not len(mesh.faces):raise RuntimeError('Geçerli 3D yüzey kalmadı. Başka bir kontrol görseli deneyin.')
    return mesh

def translate(home,job):
    if job.get('language')=='en':return job['prompt']
    report('Tarif bilgisayarınızda İngilizceye çevriliyor…',phase='translate')
    from transformers import MarianMTModel,MarianTokenizer
    import torch
    folder=str(home / 'models' / 'tr-en')
    tokenizer=MarianTokenizer.from_pretrained(folder,local_files_only=True)
    translator=MarianMTModel.from_pretrained(folder,local_files_only=True).eval()
    with torch.inference_mode():
        tokens=tokenizer([job['prompt']],return_tensors='pt',truncation=True,max_length=256)
        output=translator.generate(**tokens,max_new_tokens=256)
        prompt=tokenizer.decode(output[0],skip_special_tokens=True)
    del translator,tokenizer,tokens,output;gc.collect()
    return prompt

def concept(home,job,output):
    import torch
    from diffusers import StableDiffusionPipeline
    prompt=translate(home,job)
    # Presentation only; no object names or predefined shapes are added.
    image_prompt=f'{prompt}, single complete object, full body, isolated on a plain white background, 3D sculpture, studio product photograph'
    report('Tariften kontrol görseli üretiliyor…',phase='concept',translated=prompt)
    pipe=StableDiffusionPipeline.from_pretrained(str(home / 'models-v2' / 'image'),variant='fp16',torch_dtype=torch.float32,local_files_only=True)
    device=job.get('_device',torch.device('cpu'))
    if device.type=='cuda' and torch.cuda.mem_get_info(device)[0]<6*1024**3:
        pipe.enable_model_cpu_offload(gpu_id=device.index);pipe.enable_vae_tiling()
    else:pipe.to(device)
    if len(pipe.tokenizer(image_prompt,truncation=False).input_ids)>pipe.tokenizer.model_max_length:
        raise RuntimeError('Tarif bu görsel modeli için çok uzun. Ana nesne ve önemli ayrıntıları koruyarak kısaltın; tarifin sonu sessizce atılmadı.')
    pipe.set_progress_bar_config(disable=True);pipe.enable_attention_slicing();pipe.enable_vae_slicing()
    def progress(pipe,step,timestep,kwargs):
        report(f'Kontrol görseli üretiliyor · {step+1}/4',phase='concept',progress=(step+1)*25)
        return kwargs
    with torch.inference_mode():
        image=pipe(image_prompt,num_inference_steps=4,guidance_scale=0.0,height=512,width=512,generator=torch.Generator('cpu').manual_seed(job['seed']),callback_on_step_end=progress).images[0]
    image.save(output / 'concept.png')
    del pipe;gc.collect()
    report('Görselin arka planı ayrılıyor…',phase='background')
    from rembg import remove,new_session
    session=new_session('u2netp',providers=['CPUExecutionProvider'])
    rgba=remove(image,session=session)
    import numpy as np
    mask=np.asarray(rgba.getchannel('A'))
    if (mask>128).sum()<512:raise RuntimeError('Görselde ayrılabilir bir nesne bulunamadı. Tarifi değiştirip tekrar üretin.')
    rgba.save(output / 'reference.png')
    metadata={'prompt':job['prompt'],'translated':prompt,'image_prompt':image_prompt,'seed':job['seed'],'language':job.get('language','tr')}
    (output / 'concept.json').write_text(json.dumps(metadata,ensure_ascii=False),encoding='utf-8')
    report('Kontrol görseli hazır. Doğru görünüyorsa onaylayıp 3D üretin.',phase='concept-ready',translated=prompt)

def import_image(home,job,output):
    import base64,io,warnings
    import numpy as np
    from PIL import Image,ImageOps
    Image.MAX_IMAGE_PIXELS=25_000_000
    report('Yüklediğin görsel hazırlanıyor…',phase='image',translated='')
    with warnings.catch_warnings():
        warnings.simplefilter('error',Image.DecompressionBombWarning)
        original=Image.open(io.BytesIO(base64.b64decode(job['image'],validate=True)))
        if original.format not in ['PNG','JPEG','WEBP']:raise RuntimeError('PNG, JPG veya WEBP görseli gerekli.')
        if original.width*original.height>25_000_000:raise RuntimeError('Görsel en fazla 25 milyon piksel olabilir.')
        image=ImageOps.exif_transpose(original).convert('RGBA')
    image.thumbnail((1024,1024),Image.Resampling.LANCZOS)
    image.save(output / 'concept.png')
    # Existing transparency is meaningful; do not run segmentation on it again.
    if job.get('removeBackground',True) and image.getchannel('A').getextrema()==(255,255):
        report('Yüklenen görselin arka planı ayrılıyor…',phase='background')
        from rembg import remove,new_session
        image=remove(image,session=new_session('u2netp',providers=['CPUExecutionProvider']))
    if (np.asarray(image.getchannel('A'))>128).sum()<64:raise RuntimeError('Görselde yeterli görünür nesne kalmadı. Arka plan ayırmayı kapatarak yeniden yükleyin.')
    image.save(output / 'reference.png')
    metadata={'prompt':job['prompt'],'translated':'','seed':job['seed'],'language':'en','source':'upload','removeBackground':job.get('removeBackground',True)}
    (output / 'concept.json').write_text(json.dumps(metadata,ensure_ascii=False),encoding='utf-8')
    report('Yüklenen görsel hazır. Doğruysa onaylayıp 3D üretin.',phase='concept-ready',translated='')

def mesh(home,job,output):
    import torch,numpy as np
    from PIL import Image
    sys.path.insert(0,str(home / 'vendor' / f'Hunyuan3D-2-{SOURCE}'))
    from hy3dgen.shapegen import Hunyuan3DDiTFlowMatchingPipeline
    from hy3dgen.shapegen.pipelines import instantiate_from_config,export_to_trimesh
    from hy3dgen.shapegen.models.autoencoders import ShapeVAE
    from safetensors import safe_open
    import yaml
    from gpu_runtime import release_device,stage_device
    from accelerate import init_empty_weights
    device=job.get('_device',torch.device('cpu'))
    reference=home / 'jobs' / job['referenceId']
    metadata=json.loads((reference / 'concept.json').read_text(encoding='utf-8'))
    image=Image.open(reference / 'reference.png').convert('RGBA')
    report('Onaylanan görselden yerel 3D modeli yükleniyor…',phase='load',translated=metadata['translated'])
    folder=home / 'models-v2' / 'shape' / 'hunyuan3d-dit-v2-mini-turbo'
    config=yaml.safe_load((folder / 'config.yaml').read_text(encoding='utf-8'))
    def component(name):
        # Load and release one component at a time instead of keeping the giant
        # image encoder, diffusion model and decoder resident simultaneously.
        with init_empty_weights():module=instantiate_from_config(config[name])
        with safe_open(str(folder / 'model.fp16.safetensors'),framework='pt',device='cpu') as weights:
            prefix=name+'.';state={key[len(prefix):]:weights.get_tensor(key) for key in weights.keys() if key.startswith(prefix)}
            module.load_state_dict(state,strict=True,assign=True)
        del state
        target=stage_device(device,sum(p.numel()*4 for p in module.parameters()))
        report(('GPU' if target.type=='cuda' else 'İşlemci')+' · '+name+' yükleniyor',phase='load',device=torch.cuda.get_device_name(target) if target.type=='cuda' else 'İşlemci')
        return module.eval().to(device=target,dtype=torch.float32)
    processor=instantiate_from_config(config['image_processor'])
    report('Onaylanan görselin 3D özellikleri çıkarılıyor…',phase='encode')
    conditioner=component('conditioner')
    layers=conditioner.main_image_encoder.model.encoder.layer
    for number,layer in enumerate(layers,1):
        if number%5==0 or number==len(layers):
            layer.register_forward_hook(lambda _m,_a,_o,n=number:report(f'Görselin 3D özellikleri çözümleniyor · {n}/{len(layers)}',phase='encode'))
    encoder_device=next(conditioner.parameters()).device
    inputs={key:value.to(encoder_device) if isinstance(value,torch.Tensor) else value for key,value in processor(image).items()}
    with torch.inference_mode():embedding=conditioner(**inputs)['main']
    del conditioner,inputs,layers,layer;release_device(device)
    class CachedConditioner(torch.nn.Module):
        def __init__(self,value):super().__init__();self.register_buffer('value',value)
        def forward(self,**kwargs):return {'main':self.value}
    class LatentShape(torch.nn.Module):
        latent_shape=(config['vae']['params']['num_latents'],config['vae']['params']['embed_dim'])
    model=component('model')
    model_device=next(model.parameters()).device;embedding=embedding.to(model_device)
    scheduler=instantiate_from_config(config['scheduler'])
    pipeline=Hunyuan3DDiTFlowMatchingPipeline(vae=LatentShape(),model=model,scheduler=scheduler,conditioner=CachedConditioner(embedding),image_processor=processor,device=model_device,dtype=torch.float32)
    steps=5
    def progress(step,*args):report(f'Onaylanan görselden 3D biçim üretiliyor · {step+1}/{steps}',phase='sample',progress=(step+1)*100/steps)
    with torch.inference_mode():
        latents=pipeline(image=image,num_inference_steps=steps,guidance_scale=5.0,output_type='latent',generator=torch.Generator('cpu').manual_seed(job['seed']),callback=progress,callback_steps=1,enable_pbar=False)
    del pipeline,model,embedding;release_device(device)
    report('3D yüzey çıkarılıyor…',phase='decode')
    vae_folder=folder.parent / 'hunyuan3d-vae-v2-mini-turbo'
    decoder_device=stage_device(device,2*1024**3)
    report('3D yüzey çözücüsü: '+('GPU' if decoder_device.type=='cuda' else 'İşlemci'),phase='decode',device=torch.cuda.get_device_name(decoder_device) if decoder_device.type=='cuda' else 'İşlemci')
    latents=latents.to(decoder_device)
    vae=ShapeVAE.from_single_file(str(vae_folder / 'model.fp16.safetensors'),str(vae_folder / 'config.yaml'),device=decoder_device,dtype=torch.float32,use_safetensors=True).eval()
    vae.enable_flashvdm_decoder(adaptive_kv_selection=True,topk_mode='mean',mc_algo='mc')
    chunks=[0];last_report=[0.]
    def decoding_progress(*_):
        chunks[0]+=1
        if time.monotonic()-last_report[0]>2:
            last_report[0]=time.monotonic();report(f'3D yüzey çıkarılıyor · {chunks[0]} bölge hesaplandı',phase='decode')
    vae.geo_decoder.register_forward_hook(decoding_progress)
    resolution=192 if job.get('steps')==32 else 256
    with torch.inference_mode():
        decoded=vae(latents/vae.scale_factor)
        shape=export_to_trimesh(vae.latents2mesh(decoded,bounds=1.01,mc_level=0.,num_chunks=job.get('resources',{}).get('decodeChunks',2048),octree_resolution=resolution,enable_pbar=False))[0]
    if shape is None:raise RuntimeError('Model yüzeyi çıkarılamadı. Başka bir kontrol görseli deneyin.')
    report('3D yüzey uygulamaya hazırlanıyor…',phase='mesh')
    vertices=np.asarray(shape.vertices,dtype=np.float64)
    # Hunyuan is Y-up, Katman Studio uses Z-up. This rotation preserves winding.
    vertices=vertices[:,[0,2,1]]*np.array([1,-1,1])
    faces=np.asarray(shape.faces,dtype=np.int64)
    low=vertices.min(axis=0);high=vertices.max(axis=0);height=high[2]-low[2]
    if len(faces)<4 or height<1e-6 or not np.isfinite(vertices).all():raise RuntimeError('Geçerli bir 3D yüzey oluşmadı.')
    vertices=(vertices-np.array([(low[0]+high[0])/2,(low[1]+high[1])/2,low[2]]))*(float(job['height'])/height)
    cleaned=clean_mesh(vertices,faces)
    vertices=np.asarray(cleaned.vertices);faces=np.asarray(cleaned.faces)
    # Shape generation is monochrome. Do not invent colors by projecting the front image onto the back.
    result={'engine':'hunyuan3d-mini','color_space':'linear','name':metadata['prompt'][:80],'vertices':vertices.round(6).tolist(),'triangles':faces.tolist(),'colors':np.tile([.58,.65,.75],(len(vertices),1)).tolist()}
    temporary=output / 'mesh.tmp';temporary.write_text(json.dumps(result,separators=(',',':')),encoding='utf-8');temporary.replace(output / 'mesh.json')
    (output / 'prompt.json').write_text(json.dumps({**metadata,'referenceId':job['referenceId'],'height':job['height']},ensure_ascii=False),encoding='utf-8')
    report('3D model hazır. Görsel uyumunu önizlemede kontrol edin.',phase='done',vertices=len(vertices),triangles=len(faces))

def main():
    home=pathlib.Path(sys.argv[1]).resolve();job=json.load(sys.stdin)
    resources=job.get('resources',{});threads=max(1,min(12,int(resources.get('threads',max(1,min(4,(os.cpu_count() or 2)//2))))))
    os.environ['KATMAN_ATTENTION_MB']=str(max(16,min(128,int(resources.get('attentionMB',64)))))
    os.environ.update({'HF_HUB_OFFLINE':'1','TRANSFORMERS_OFFLINE':'1','HF_HUB_DISABLE_TELEMETRY':'1','TOKENIZERS_PARALLELISM':'false','U2NET_HOME':str(home / 'models-v2' / 'background'),'HY3DGEN_DEBUG':'0','CA_USE_SAGEATTN':'0','OMP_NUM_THREADS':str(threads),'MKL_NUM_THREADS':str(threads)})
    socket.create_connection=deny_network;socket.socket.connect=deny_network;socket.socket.connect_ex=deny_network
    from filelock import FileLock,Timeout
    lock=FileLock(str(home / 'generation-v2.lock'))
    try:lock.acquire(timeout=0)
    except Timeout:raise RuntimeError('Yerel motor başka bir pencerede veya ağ istemcisinde çalışıyor. Önce o işlemi tamamlayın.')
    try:
        if job['action']!='upload':
            import torch
            torch.set_num_threads(threads)
            from gpu_runtime import device_for
            job['_device'],device_name=device_for(job.get('backend','cpu'))
            report('Hesaplama aygıtı: '+device_name,phase='device',device=device_name,backend=job.get('backend','cpu'),threads=threads,memoryMode=resources.get('memoryMode','balanced'),deviceMemoryGB=round(torch.cuda.get_device_properties(job['_device']).total_memory/1024**3,2) if job['_device'].type=='cuda' else None)
        output=home / 'jobs' / job['id'];output.mkdir(parents=True,exist_ok=True)
        if job['action']=='concept':concept(home,job,output)
        elif job['action']=='upload':import_image(home,job,output)
        else:mesh(home,job,output)
    finally:lock.release()

if __name__=='__main__':
    try:main()
    except Exception as error:report(str(error),error=True);raise
