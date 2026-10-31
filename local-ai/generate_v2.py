"""Offline, two-stage free text -> approved concept -> real 3D geometry."""
import gc, json, os, pathlib, socket, sys, time, hashlib,re
from install_v2 import SOURCE,SHAPE,IMAGE,IMAGE_XL,IMAGE_REALISTIC,VAE_XL_FP16
from production_cache import ProductionCache,key_for,file_identity
from reference_image import FaithfulImageProcessor

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

def normalize_translated_subject(prompt):
    prompt=str(prompt).strip()
    # Standalone "human" is often interpreted as anatomy/skin in image captions.
    # This is a lexical equivalent, not a predefined figure or a material override.
    return 'a person' if prompt.casefold() in ['human','human being'] else prompt

def translate(home,job):
    if job.get('language')=='en':return normalize_translated_subject(job['prompt'])
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
    return normalize_translated_subject(prompt)

def image_parameters(engine):
    if engine=='realistic':return {'folder':'image-realistic','revision':IMAGE_REALISTIC,'steps':30,'size':1024,'guidance':5.0,'negative':'close-up, headshot, cropped, out of frame, distorted anatomy, unnatural proportions, deformed hands, extra limbs, duplicate body, blurry'}
    if engine=='xl':return {'folder':'image-xl','revision':IMAGE_XL,'steps':4,'size':512,'guidance':0.0,'negative':None}
    if engine=='turbo':return {'folder':'image','revision':IMAGE,'steps':1,'size':512,'guidance':0.0,'negative':None}
    raise ValueError('Geçersiz görsel motoru.')

def close_view_requested(prompt):
    return bool(re.search(r'\b(?:portrait|headshot|bust|close[- ]up)\b',prompt,re.I))

def build_image_prompt(prompt,engine='turbo',person=False):
    # Default presentation is neutral; never invent material or surface motifs.
    prompt=str(prompt).strip()
    explicit_style=any(word in prompt.lower() for word in ['monochrome','black and white','grayscale','pencil','sketch','line drawing','silhouette'])
    if engine=='realistic' and close_view_requested(prompt):return ('A clear image showing ' if explicit_style else 'A realistic photograph of ')+prompt+', soft lighting, plain white background'
    if engine=='realistic' and not explicit_style:
        if person:return 'A full body photograph of '+prompt+', head and feet visible, entire figure in frame, realistic proportions, soft lighting, plain white background'
        return 'A wide full-length realistic photograph of '+prompt+', entire subject visible from top to bottom, centered with white space around it, natural proportions, soft lighting'
    prefix='A clear image showing ' if explicit_style else 'A clear color image showing '
    return prefix+prompt+', full body, entire subject visible, plain white background'

def portrait_subject(pipe,prompt,device):
    """Use the installed CLIP encoder to choose figure framing, not a figure template."""
    import torch
    if close_view_requested(prompt):return False
    encoder=pipe.text_encoder_2
    encoder.to(device)
    captions=[prompt,'a photograph of a person','a photograph of an object','a photograph of an animal','a photograph of a landscape']
    tokens=pipe.tokenizer_2(captions,padding='max_length',max_length=pipe.tokenizer_2.model_max_length,truncation=True,return_tensors='pt').input_ids.to(device)
    with torch.inference_mode():
        embedding=encoder(tokens).text_embeds.float();embedding=embedding/embedding.norm(dim=-1,keepdim=True).clamp_min(1e-8)
        scores=(embedding[1:]@embedding[0]).cpu()
    encoder.to('cpu');del embedding,tokens
    return bool(scores[0]>scores[1:].max()+.015)

def cpu_vae_required(hip,platform,architecture):
    # Windows gfx10 MIOpen FP32 VAE convolution can abort the process (not OOM).
    return bool(hip and platform=='win32' and (not architecture or architecture.startswith('gfx10')))

def decode_realistic_latents(vae,latents,device,precision='auto'):
    """Decode after releasing the denoiser using the verified FP16-safe VAE."""
    import torch
    from gpu_runtime import release_device
    latents=latents.detach().to('cpu',dtype=torch.float32)
    if not torch.isfinite(latents).all():raise RuntimeError('Görsel örneklemesinde sayısal taşma oluştu; tam hassasiyet gerekli.')
    # 512px overlapping VAE tiles avoid a full 1024px activation/workspace peak.
    vae.enable_tiling();vae.tile_sample_min_size=512;vae.tile_latent_min_size=64
    architecture=str(getattr(torch.cuda.get_device_properties(device),'gcnArchName','')) if device.type=='cuda' else ''
    use_cpu=precision=='float32' and cpu_vae_required(torch.version.hip,sys.platform,architecture)
    target=device if device.type=='cuda' and not use_cpu and torch.cuda.mem_get_info(device)[0]>3*1024**3 else torch.device('cpu')
    dtype=torch.float16 if target.type=='cuda' and precision=='auto' else torch.float32
    report('Görsel çözülüyor · '+('FP16 güvenli VAE' if dtype==torch.float16 else 'FP32 VAE'),phase='image-decode',progress=95,device='İşlemci · görüntü çözümü' if target.type=='cpu' else torch.cuda.get_device_name(target))
    try:
        vae.to(target,dtype=dtype)
        with torch.inference_mode():decoded=vae.decode(latents.to(target,dtype=dtype)/vae.config.scaling_factor,return_dict=False)[0]
        if not torch.isfinite(decoded).all():raise RuntimeError('VAE nonfinite')
    except RuntimeError as error:
        if target.type!='cuda' or not any(reason in str(error).lower() for reason in ['out of memory','vae nonfinite']):raise
        vae.to('cpu',dtype=torch.float32);release_device(device)
        report('GPU görüntü çözümü tamamlanamadı; aynı biçim işlemcide FP32 çözülüyor.',phase='image-decode',progress=95,device='İşlemci · görüntü çözümü')
        with torch.inference_mode():decoded=vae.decode(latents/vae.config.scaling_factor,return_dict=False)[0]
    if not torch.isfinite(decoded).all():raise RuntimeError('Görsel çözücüsünde sayısal taşma oluştu; geçersiz görüntü kaydedilmedi.')
    pixels=(decoded.float()/2+.5).clamp(0,1).cpu().permute(0,2,3,1).numpy()[0]
    return pixels


def concept(home,job,output):
    import numpy as np
    from PIL import Image as PILImage
    image_engine=job.get('imageEngine','turbo');settings=image_parameters(image_engine);is_xl=image_engine in ['xl','realistic'];steps=settings['steps']
    model=home/'models-v2'/settings['folder']
    weight_files=[('unet','diffusion_pytorch_model.fp16.safetensors'),('vae','diffusion_pytorch_model.fp16.safetensors'),('text_encoder','model.fp16.safetensors')]+([('text_encoder_2','model.fp16.safetensors')] if is_xl else [])
    identity=[settings['revision'],*[file_identity(model/folder/name) for folder,name in weight_files]]
    if image_engine=='realistic':identity.extend([VAE_XL_FP16,file_identity(home/'models-v2'/'image-realistic-vae'/'diffusion_pytorch_model.safetensors')])
    concept_key=key_for('concept-realism-v9',image_engine,settings,identity,job['prompt'],job.get('language','tr'),job['seed'],job.get('backend','cpu'),job.get('precision','auto'),job.get('runtime',{}))
    cache=ProductionCache(home,job.get('resources',{}).get('memoryMode','balanced'))
    cached=cache.load(concept_key)
    if cached is not None:
        try:
            metadata=json.loads(cached['metadata'].tobytes().decode('utf-8'))
            if metadata['prompt']!=job['prompt'] or metadata['seed']!=job['seed']:raise ValueError('cache metadata')
            for name in ['concept','reference']:
                array=cached[name]
                if array.dtype!=np.uint8 or array.ndim!=3 or array.shape[-1] not in [3,4] or max(array.shape[:2])>1536 or array.shape[0]*array.shape[1]>1536*1024:raise ValueError('cache image')
                PILImage.fromarray(array).save(output/(name+'.png'))
            (output/'concept.json').write_text(json.dumps(metadata,ensure_ascii=False),encoding='utf-8')
            report('Saklanan kontrol görseli hazır; yeniden görsel üretilmedi.',phase='concept-ready',translated=metadata['translated'],cache='concept',imageEngine=image_engine,imagePrompt=metadata['image_prompt'],device='Önbellek · yeni YZ hesaplaması yok');return
        except (KeyError,ValueError,UnicodeError):pass
    import torch
    from diffusers import StableDiffusionPipeline,StableDiffusionXLPipeline,DPMSolverMultistepScheduler,AutoencoderKL
    from gpu_runtime import dtype_for,release_device
    init_compute(job)
    prompt=translate(home,job)
    image_prompt=build_image_prompt(prompt,image_engine)
    negative=settings['negative']
    if negative and close_view_requested(prompt):negative=negative.removeprefix('close-up, headshot, cropped, out of frame, ')
    report('Tariften kontrol görseli üretiliyor · '+('RealVisXL' if image_engine=='realistic' else 'SDXL-Turbo' if is_xl else 'SD-Turbo'),phase='concept',translated=prompt,imageEngine=image_engine,imagePrompt=image_prompt)
    device=job['_device'];dtype=dtype_for(device,job.get('precision','auto'))
    if is_xl:
        import psutil
        memory=psutil.virtual_memory()
        if dtype==torch.float32 and (memory.total<23.5*1024**3 or memory.available<16*1024**3):raise RuntimeError('SDXL tam hassasiyet/işlemci üretimi için en az 24 GB RAM ve 16 GB boş bellek gerekli. GPU otomatik hassasiyetini veya hafif motoru seçin.')
        if dtype==torch.float16 and memory.total<15*1024**3:raise RuntimeError('SDXL için en az 16 GB RAM gerekli; hafif motoru seçin.')
    pipeline_class=StableDiffusionXLPipeline if is_xl else StableDiffusionPipeline
    components={'add_watermarker':False} if is_xl else {}
    if image_engine=='realistic':components['vae']=AutoencoderKL.from_pretrained(str(home/'models-v2'/'image-realistic-vae'),torch_dtype=dtype,local_files_only=True)
    pipe=pipeline_class.from_pretrained(str(model),variant='fp16',torch_dtype=dtype,local_files_only=True,**components)
    person=image_engine=='realistic' and portrait_subject(pipe,prompt,device)
    width,height=(768,1344) if person else (settings['size'],settings['size'])
    if person:
        image_prompt=build_image_prompt(prompt,image_engine,person=True)
        report('Tam figür kadrajı · dikey görüntü',phase='concept',imagePrompt=image_prompt)
    if image_engine=='realistic':pipe.scheduler=DPMSolverMultistepScheduler.from_config(pipe.scheduler.config,algorithm_type='dpmsolver++',use_karras_sigmas=True,solver_order=2)
    if is_xl and device.type=='cuda':
        if torch.cuda.mem_get_info(device)[0]<(7 if dtype==torch.float16 else 14)*1024**3:pipe.enable_sequential_cpu_offload(gpu_id=device.index)
        else:pipe.enable_model_cpu_offload(gpu_id=device.index)
        pipe.enable_vae_tiling()
    elif device.type=='cuda' and torch.cuda.mem_get_info(device)[0]<6*1024**3:
        pipe.enable_model_cpu_offload(gpu_id=device.index);pipe.enable_vae_tiling()
    else:pipe.to(device)
    for tokenizer in [pipe.tokenizer]+([pipe.tokenizer_2] if is_xl else []):
        if len(tokenizer(image_prompt,truncation=False).input_ids)>tokenizer.model_max_length:
            raise RuntimeError('Tarif bu görsel modeli için çok uzun. Ana nesne ve önemli ayrıntıları koruyarak kısaltın; tarifin sonu sessizce atılmadı.')
    pipe.set_progress_bar_config(disable=True);pipe.enable_attention_slicing();pipe.enable_vae_slicing()
    def progress(pipe,step,timestep,kwargs):
        if image_engine=='realistic' and device.type=='cuda':torch.cuda.synchronize(device)
        report(f'Kontrol görseli üretiliyor · {step+1}/{steps}',phase='concept',progress=(step+1)*(90 if image_engine=='realistic' else 100)/steps)
        return kwargs
    with torch.inference_mode():
        sampled=pipe(image_prompt,negative_prompt=negative,num_inference_steps=steps,guidance_scale=settings['guidance'],height=height,width=width,generator=torch.Generator('cpu').manual_seed(job['seed']),callback_on_step_end=progress,output_type='latent' if image_engine=='realistic' else 'np').images
    if image_engine=='realistic':
        latents=sampled.detach().cpu();vae=pipe.vae;pipe.remove_all_hooks()
        del pipe,sampled;release_device(device)
        pixels=decode_realistic_latents(vae,latents,device,job.get('precision','auto'))
        del vae,latents;release_device(device)
    else:
        pixels=sampled[0];del pipe,sampled;release_device(device)
    if not np.isfinite(pixels).all():raise RuntimeError('Görsel üretiminde sayısal taşma oluştu; tam hassasiyet gerekli.')
    image=PILImage.fromarray((np.clip(pixels,0,1)*255).round().astype(np.uint8))
    image.save(output / 'concept.png')
    report('Görselin arka planı ayrılıyor…',phase='background')
    from rembg import remove,new_session
    session=new_session('u2netp',providers=['CPUExecutionProvider'])
    rgba=remove(image,session=session)
    import numpy as np
    mask=np.asarray(rgba.getchannel('A'))
    if (mask>128).sum()<512:raise RuntimeError('Görselde ayrılabilir bir nesne bulunamadı. Tarifi değiştirip tekrar üretin.')
    rgba.save(output / 'reference.png')
    metadata={'prompt':job['prompt'],'translated':prompt,'image_prompt':image_prompt,'image_engine':image_engine,'image_steps':steps,'image_size':[width,height],'negative_prompt':negative,'seed':job['seed'],'language':job.get('language','tr')}
    (output / 'concept.json').write_text(json.dumps(metadata,ensure_ascii=False),encoding='utf-8')
    cache.save(concept_key,concept=np.asarray(image),reference=np.asarray(rgba),metadata=np.frombuffer(json.dumps(metadata,ensure_ascii=False).encode('utf-8'),dtype=np.uint8))
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
    image.thumbnail((1024,1024) if job.get('resources',{}).get('memoryMode')=='low' else (2048,2048),Image.Resampling.LANCZOS)
    image.save(output / 'concept.png')
    # Existing transparency is meaningful; do not run segmentation on it again.
    if job.get('removeBackground',True) and image.getchannel('A').getextrema()==(255,255):
        report('Yüklenen görselin arka planı ayrılıyor…',phase='background')
        cache=ProductionCache(home,job.get('resources',{}).get('memoryMode','balanced'))
        background_key=key_for('background',hashlib.sha256(image.tobytes()).hexdigest(),image.size,file_identity(home/'models-v2/background/u2netp.onnx'))
        saved=cache.load(background_key)
        if saved is not None and saved.get('rgba',np.empty(0)).shape==(image.height,image.width,4) and saved['rgba'].dtype==np.uint8:
            image=Image.fromarray(saved['rgba']);report('Saklanan arka plan ayrımı kullanılıyor.',phase='background',cache='background')
        else:
            from rembg import remove,new_session
            image=remove(image,session=new_session('u2netp',providers=['CPUExecutionProvider']))
            if (np.asarray(image.getchannel('A'))>128).sum()>=64:cache.save(background_key,rgba=np.asarray(image))
    if (np.asarray(image.getchannel('A'))>128).sum()<64:raise RuntimeError('Görselde yeterli görünür nesne kalmadı. Arka plan ayırmayı kapatarak yeniden yükleyin.')
    image.save(output / 'reference.png')
    metadata={'prompt':job['prompt'],'translated':'','seed':job['seed'],'language':'en','source':'upload','removeBackground':job.get('removeBackground',True)}
    (output / 'concept.json').write_text(json.dumps(metadata,ensure_ascii=False),encoding='utf-8')
    report('Yüklenen görsel hazır. Doğruysa onaylayıp 3D üretin.',phase='concept-ready',translated='')

def mesh(home,job,output):
    import numpy as np
    from PIL import Image
    reference=home/'jobs'/job['referenceId'];metadata=json.loads((reference/'concept.json').read_text(encoding='utf-8'))
    image=Image.open(reference/'reference.png').convert('RGBA')
    fidelity=job.get('quality')=='fidelity';suffix='' if fidelity else '-turbo'
    folder=home/'models-v2'/'shape'/('hunyuan3d-dit-v2-mini'+suffix)
    vae_folder=folder.parent/('hunyuan3d-vae-v2-mini'+suffix)
    if not (folder/'model.fp16.safetensors').exists():raise RuntimeError('Önce alternatif Mini motorunu kurun.')
    identity=[SOURCE,SHAPE,file_identity(folder/'model.fp16.safetensors'),file_identity(folder/'config.yaml')]
    image_key=key_for(hashlib.sha256((reference/'reference.png').read_bytes()).hexdigest(),identity,job.get('backend','cpu'),job.get('precision','auto'),job.get('runtime',{}))
    latent_key=key_for('latent',image_key,job['seed'],30 if fidelity else 5)
    resolution=384 if job.get('steps')==128 else 256 if fidelity or job.get('steps')!=32 else 192
    surface_key=key_for('surface',latent_key,resolution,file_identity(vae_folder/'model.fp16.safetensors'))
    cache=ProductionCache(home,job.get('resources',{}).get('memoryMode','balanced'))
    surface=cache.load(surface_key)
    if surface is not None and valid_surface(surface):
        report('Saklanan 3D yüzey kullanılıyor; model yeniden üretilmiyor.',phase='cache',cache='surface',device='Önbellek · işlemciyle çıktı hazırlama',precision='cache')
        finish_mesh(surface['vertices'],surface['faces'],metadata,job,output);return
    init_compute(job)
    import torch,yaml
    from gpu_runtime import release_device,stage_device,dtype_for
    from accelerate import init_empty_weights
    from safetensors import safe_open
    sys.path.insert(0,str(home/'vendor'/f'Hunyuan3D-2-{SOURCE}'))
    from hy3dgen.shapegen import Hunyuan3DDiTFlowMatchingPipeline
    from hy3dgen.shapegen.pipelines import instantiate_from_config,export_to_trimesh
    from hy3dgen.shapegen.models.autoencoders import ShapeVAE
    device=job['_device'];config=yaml.safe_load((folder/'config.yaml').read_text(encoding='utf-8'))
    processor=FaithfulImageProcessor(**config['image_processor']['params'])
    def component(name):
        with init_empty_weights():module=instantiate_from_config(config[name])
        with safe_open(str(folder/'model.fp16.safetensors'),framework='pt',device='cpu') as weights:
            prefix=name+'.';state={key[len(prefix):]:weights.get_tensor(key) for key in weights.keys() if key.startswith(prefix)}
            module.load_state_dict(state,strict=True,assign=True)
        del state
        dtype=dtype_for(device,job.get('precision','auto'))
        target=stage_device(device,sum(p.numel()*(2 if dtype==torch.float16 else 4) for p in module.parameters()))
        dtype=dtype_for(target,job.get('precision','auto'))
        report(('GPU' if target.type=='cuda' else 'İşlemci')+' · '+name+' yükleniyor',phase='load',device=torch.cuda.get_device_name(target) if target.type=='cuda' else 'İşlemci',precision=str(dtype).split('.')[-1])
        return module.eval().to(device=target,dtype=dtype)
    saved=cache.load(latent_key)
    if saved is not None and saved.get('latents',np.empty(0)).shape==(1,config['vae']['params']['num_latents'],config['vae']['params']['embed_dim']):
        latents=torch.from_numpy(saved['latents']);report('Saklanan 3D biçimden yeni ayrıntı yüzeyi çıkarılıyor.',phase='cache',cache='latent')
    else:
        encoded=cache.load(image_key)
        if encoded is not None and encoded.get('embedding',np.empty(0)).ndim==3 and encoded['embedding'].shape[-1]==1536:
            embedding=torch.from_numpy(encoded['embedding']);report('Görsel özellikleri yeniden kullanılıyor.',phase='cache',cache='embedding')
        else:
            conditioner=component('conditioner');encoder_device=next(conditioner.parameters()).device
            inputs={key:value.to(encoder_device,dtype=next(conditioner.parameters()).dtype) if isinstance(value,torch.Tensor) else value for key,value in processor(image).items()}
            report('Görselin 3D özellikleri çıkarılıyor…',phase='encode')
            with torch.inference_mode():embedding=conditioner(**inputs)['main']
            if not torch.isfinite(embedding).all():raise RuntimeError('Görsel kodlayıcısında sayısal taşma oluştu.')
            cache.save(image_key,embedding=embedding.detach().cpu().numpy())
            del conditioner,inputs;release_device(device)
        class CachedConditioner(torch.nn.Module):
            def __init__(self,value):super().__init__();self.register_buffer('value',value)
            def forward(self,**kwargs):return {'main':self.value}
            def unconditional_embedding(self,batch_size,**kwargs):return {'main':torch.zeros_like(self.value[:batch_size])}
        class LatentShape(torch.nn.Module):
            latent_shape=(config['vae']['params']['num_latents'],config['vae']['params']['embed_dim'])
        model=component('model');parameter=next(model.parameters());model_device=parameter.device;embedding=embedding.to(device=model_device,dtype=parameter.dtype)
        pipeline=Hunyuan3DDiTFlowMatchingPipeline(vae=LatentShape(),model=model,scheduler=instantiate_from_config(config['scheduler']),conditioner=CachedConditioner(embedding),image_processor=processor,device=model_device,dtype=parameter.dtype)
        steps=30 if fidelity else 5
        def progress(step,*args):report(f'Görselden 3D biçim üretiliyor · {step+1}/{steps}',phase='sample',progress=(step+1)*100/steps)
        with torch.inference_mode():latents=pipeline(image=image,num_inference_steps=steps,guidance_scale=5.0,output_type='latent',generator=torch.Generator('cpu').manual_seed(job['seed']),callback=progress,callback_steps=1,enable_pbar=False)
        if not torch.isfinite(latents).all():raise RuntimeError('3D üretiminde sayısal taşma oluştu.')
        cache.save(latent_key,latents=latents.detach().cpu().numpy())
        del pipeline,model,embedding,parameter;release_device(device)
    decoder_device=stage_device(device,2*1024**3)
    report('3D yüzey çözücüsü: '+('GPU' if decoder_device.type=='cuda' else 'İşlemci'),phase='decode',device=torch.cuda.get_device_name(decoder_device) if decoder_device.type=='cuda' else 'İşlemci')
    # Keep surface decoding FP32 even with FP16 sampling to protect small details.
    latents=latents.to(device=decoder_device,dtype=torch.float32)
    vae=ShapeVAE.from_single_file(str(vae_folder/'model.fp16.safetensors'),str(vae_folder/'config.yaml'),device=decoder_device,dtype=torch.float32,use_safetensors=True).eval()
    vae.enable_flashvdm_decoder(adaptive_kv_selection=True,topk_mode='mean',mc_algo='mc')
    with torch.inference_mode():
        decoded=vae(latents/vae.scale_factor)
        shape=export_to_trimesh(vae.latents2mesh(decoded,bounds=1.01,mc_level=0.,num_chunks=job.get('resources',{}).get('decodeChunks',2048),octree_resolution=resolution,enable_pbar=False))[0]
    if shape is None:raise RuntimeError('Model yüzeyi çıkarılamadı. Başka bir görsel deneyin.')
    surface={'vertices':np.asarray(shape.vertices,dtype=np.float64),'faces':np.asarray(shape.faces,dtype=np.int64)}
    if not valid_surface(surface):raise RuntimeError('Geçerli bir 3D yüzey oluşmadı.')
    # Commit geometry only after cleanup/output also succeeds.
    finish_mesh(surface['vertices'],surface['faces'],metadata,job,output)
    cache.save(surface_key,**surface)


def valid_surface(surface):
    import numpy as np
    v=surface.get('vertices',np.empty(0));f=surface.get('faces',np.empty(0))
    return v.ndim==2 and v.shape[1]==3 and len(v)>3 and f.ndim==2 and f.shape[1]==3 and len(f)>3 and f.dtype.kind in 'iu' and f.min()>=0 and f.max()<len(v) and np.isfinite(v).all()


def init_compute(job):
    if '_device' in job:return
    import torch
    from gpu_runtime import device_for
    resources=job.get('resources',{});threads=max(1,min(12,int(resources.get('threads',max(1,min(4,(os.cpu_count() or 2)//2))))))
    torch.set_num_threads(threads);job['_device'],name=device_for(job.get('backend','cpu'))
    report('Hesaplama aygıtı: '+name,phase='device',device=name,backend=job.get('backend','cpu'),threads=threads,memoryMode=resources.get('memoryMode','balanced'))


def finish_mesh(vertices,faces,metadata,job,output):
    import numpy as np
    report('3D yüzey uygulamaya hazırlanıyor…',phase='mesh')
    vertices=np.asarray(vertices,dtype=np.float64)
    # Hunyuan is Y-up, Katman Studio uses Z-up. This rotation preserves winding.
    vertices=vertices[:,[0,2,1]]*np.array([1,-1,1])
    faces=np.asarray(faces,dtype=np.int64)
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
        output=home / 'jobs' / job['id'];output.mkdir(parents=True,exist_ok=True)
        if job['action']=='concept':concept(home,job,output)
        elif job['action']=='upload':import_image(home,job,output)
        else:mesh(home,job,output)
    finally:lock.release()

if __name__=='__main__':
    try:main()
    except Exception as error:report(str(error),error=True);raise
