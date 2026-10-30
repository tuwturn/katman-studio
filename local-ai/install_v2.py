"""Local concept -> Hunyuan3D setup. No cloud generation service is used."""
import argparse, fnmatch, hashlib, json, os, pathlib, shutil, sys, time, urllib.request, zipfile
from install import download, private_python, report, run

SOURCE = 'f8db63096c8282cb27354314d896feba5ba6ff8a'
SHAPE = 'f90a0f7df7d5e6f71109cf333f6a95a0ae3194a6'
IMAGE = 'b261bac6fd2cf515557d5d0707481eafa0485ec2'

def file_hash(path):
    digest=hashlib.sha256()
    with path.open('rb') as stream:
        for block in iter(lambda:stream.read(4*1024*1024),b''):digest.update(block)
    return digest.hexdigest()

def reuse_encoder(url,target,source,size,digest,minimum_bytes=256*1024**2):
    """Reuse frozen encoder bytes, but accept the result only after full official SHA-256."""
    import struct
    from concurrent.futures import ThreadPoolExecutor,wait,FIRST_COMPLETED
    temporary=target.with_suffix('.reuse')
    def read_range(start,end):
        for attempt in range(4):
            try:
                request=urllib.request.Request(url+f'?download=true&reuse={start}',headers={'Range':f'bytes={start}-{end}','User-Agent':'Katman-Studio-local-ai'})
                with urllib.request.urlopen(request,timeout=120) as response:
                    if response.status!=206 or response.headers.get('Content-Range')!=f'bytes {start}-{end}/{size}':raise RuntimeError('Ağırlık aralığı doğrulanamadı.')
                    data=response.read(end-start+1)
                    if len(data)!=end-start+1:raise RuntimeError('Ağırlık aralığı eksik.')
                    return data
            except Exception:
                if attempt==3:raise
                time.sleep(1)
    try:
        first=read_range(0,7);length=struct.unpack('<Q',first)[0]
        if length>4*1024**2:return False
        header=read_range(8,7+length);index=json.loads(header);offset=8+length
        with source.open('rb') as local:
            source_length=struct.unpack('<Q',local.read(8))[0];source_index=json.loads(local.read(source_length));source_offset=8+source_length
            target.parent.mkdir(parents=True,exist_ok=True)
            with temporary.open('wb') as out:
                out.truncate(size);out.write(first+header);missing=[];reused=0
                for name,entry in index.items():
                    if name=='__metadata__':continue
                    start,end=entry['data_offsets'];other=source_index.get(name)
                    if name.startswith('conditioner.') and other and other['shape']==entry['shape'] and other['dtype']==entry['dtype']:
                        local.seek(source_offset+other['data_offsets'][0]);out.seek(offset+start);remaining=end-start
                        while remaining:
                            block=local.read(min(4*1024**2,remaining))
                            if not block:raise RuntimeError('Yerel ağırlık eksik.')
                            out.write(block);remaining-=len(block)
                        reused+=end-start
                    else:missing.append((offset+start,offset+end-1))
                if reused<minimum_bytes:return False
                merged=[]
                for start,end in sorted(missing):
                    if merged and merged[-1][1]+1==start:merged[-1]=(merged[-1][0],end)
                    else:merged.append((start,end))
                ranges=[(start,min(start+16*1024**2-1,end)) for left,end in merged for start in range(left,end+1,16*1024**2)]
                report('Mevcut görsel kodlayıcı ağırlıkları yeniden kullanılıyor; kalan kalite ağırlıkları indiriliyor…')
                received=offset+reused
                with ThreadPoolExecutor(max_workers=4) as pool:
                    remaining=iter(ranges);pending={}
                    for pair in [next(remaining,None) for _ in range(4)]:
                        if pair:pending[pool.submit(read_range,*pair)]=pair
                    while pending:
                        done,_=wait(pending,return_when=FIRST_COMPLETED)
                        for future in done:
                            start,end=pending.pop(future);out.seek(start);block=future.result();out.write(block);received+=len(block)
                            report(f'Kalite modeli hazırlanıyor · %{min(99,int(received*100/size))}',progress=min(99,int(received*100/size)))
                            pair=next(remaining,None)
                            if pair:pending[pool.submit(read_range,*pair)]=pair
        if file_hash(temporary)!=digest:
            report('Ortak ağırlıklar farklı; modelin tamamı normal indirme ile doğrulanacak.');return False
        temporary.replace(target);return True
    except Exception as error:
        report('Ortak ağırlık kısayolu kullanılamadı; normal indirmeye dönülüyor.');return False
    finally:temporary.unlink(missing_ok=True)


def repo_download(repo,revision,root,patterns,reuse=False):
    from huggingface_hub import HfApi
    from concurrent.futures import ThreadPoolExecutor
    info=HfApi().model_info(repo,revision=revision,files_metadata=True)
    def fetch(item):
        name=item.rfilename;target=root / name
        digest=item.lfs.sha256 if item.lfs else None;size=item.size
        url=f'https://huggingface.co/{repo}/resolve/{revision}/{name}'
        if not digest or size<16*1024*1024:
            return download(url,target,digest)
        if target.exists() and target.stat().st_size==size and file_hash(target)==digest:
            target.with_suffix(target.suffix+'.part').unlink(missing_ok=True);return
        if reuse:
            source=root / name.replace('hunyuan3d-dit-v2-mini/','hunyuan3d-dit-v2-mini-turbo/').replace('hunyuan3d-vae-v2-mini/','hunyuan3d-vae-v2-mini-turbo/')
            if source!=target and source.exists():
                if source.stat().st_size==size and file_hash(source)==digest:
                    target.parent.mkdir(parents=True,exist_ok=True);copy=target.with_suffix('.copy');shutil.copyfile(source,copy);copy.replace(target)
                    target.with_suffix(target.suffix+'.part').unlink(missing_ok=True);return
                if 'hunyuan3d-dit-v2-mini/' in name and reuse_encoder(url,target,source,size,digest):
                    target.with_suffix(target.suffix+'.part').unlink(missing_ok=True);return
        target.parent.mkdir(parents=True,exist_ok=True);partial=target.with_suffix(target.suffix+'.part')
        # Preserve useful partial data from an interrupted Hugging Face download.
        cache=root / '.cache' / 'huggingface' / 'download' / pathlib.Path(name).parent
        if not partial.exists() and cache.exists():
            candidates=list(cache.glob(f'*.{digest}.incomplete'))
            if candidates:shutil.copyfile(candidates[0],partial)
        offset=partial.stat().st_size if partial.exists() else 0
        if offset>size:partial.write_bytes(b'');offset=0
        def segment(start,end):
            for attempt in range(4):
                request=urllib.request.Request(url+f'?download=true&part={start}',headers={'Range':f'bytes={start}-{end}','User-Agent':'Katman-Studio-local-ai'})
                try:
                    with urllib.request.urlopen(request,timeout=90) as response:
                        expected=f'bytes {start}-{end}/{size}'
                        if response.status!=206 or response.headers.get('Content-Range')!=expected:raise RuntimeError('Model sunucusu istenen dosya aralığını döndürmedi.')
                        data=response.read(end-start+1)
                        if len(data)!=end-start+1:raise RuntimeError('Model indirmesi erken kesildi.')
                        return data
                except Exception:
                    if attempt==3:raise
                    time.sleep(2)
        with ThreadPoolExecutor(max_workers=3) as chunks:
            while offset<size:
                ranges=[(start,min(start+32*1024*1024,size)-1) for start in range(offset,min(offset+96*1024*1024,size),32*1024*1024)]
                futures=[chunks.submit(segment,start,end) for start,end in ranges]
                for future in futures:
                    block=future.result()
                    with partial.open('ab') as out:out.write(block)
                    offset+=len(block)
                    report(f'{name} indiriliyor · %{int(offset*100/size)}',progress=int(offset*100/size))
        if file_hash(partial)!=digest:
            partial.write_bytes(b'');raise RuntimeError(f'{name} SHA-256 doğrulaması başarısız. Kurulumu tekrar deneyin.')
        os.replace(partial,target)
    files=[item for item in info.siblings if any(fnmatch.fnmatch(item.rfilename,pattern) for pattern in patterns)]
    with ThreadPoolExecutor(max_workers=3) as pool:list(pool.map(fetch,files))

def models(home):
    from huggingface_hub import snapshot_download
    root = home / 'models-v2'
    report('Yerel görsel modeli indiriliyor…')
    repo_download('stabilityai/sd-turbo', IMAGE, root / 'image', ['model_index.json','scheduler/*.json','tokenizer/*','text_encoder/config.json','text_encoder/model.fp16.safetensors','unet/config.json','unet/diffusion_pytorch_model.fp16.safetensors','vae/config.json','vae/diffusion_pytorch_model.fp16.safetensors','LICENSE*','README.md'])
    report('Yerel 3D modeli indiriliyor…')
    repo_download('tencent/Hunyuan3D-2mini', SHAPE, root / 'shape', ['hunyuan3d-dit-v2-mini-turbo/config.yaml','hunyuan3d-dit-v2-mini-turbo/model.fp16.safetensors','hunyuan3d-vae-v2-mini-turbo/config.yaml','hunyuan3d-vae-v2-mini-turbo/model.fp16.safetensors','LICENSE*','NOTICE*','README.md'])
    # Reuse the existing local translation model, downloading it for a fresh installation.
    report('Yerel Türkçe çevirisi hazırlanıyor…')
    translation=home / 'models' / 'tr-en'
    if not (translation / 'model.safetensors').exists():
        snapshot_download('Helsinki-NLP/opus-mt-tr-en', local_dir=str(translation), allow_patterns=['config.json','generation_config.json','pytorch_model.bin','tokenizer_config.json','source.spm','target.spm','vocab.json','special_tokens_map.json'])
        import torch
        from safetensors.torch import save_file
        state=torch.load(translation / 'pytorch_model.bin',map_location='cpu',weights_only=True)
        save_file({key:value.contiguous().clone() for key,value in state.items()},str(translation / 'model.safetensors'),metadata={'format':'pt'})
        del state
    os.environ['U2NET_HOME']=str(root / 'background')
    report('Yerel arka plan ayırma modeli hazırlanıyor…')
    from rembg import new_session
    new_session('u2netp',providers=['CPUExecutionProvider'])
    (home / 'ready-v2.json').write_text(json.dumps({'engine':'sd-turbo+hunyuan3d-mini','source':SOURCE,'shape':SHAPE,'image':IMAGE}),encoding='utf-8')
    report('Yeni yerel motor kuruldu. Görsel ve 3D üretimi internetsiz çalışır.',ready=True)

def install(home):
    home.mkdir(parents=True,exist_ok=True)
    base=private_python(home); python=home / 'venv' / ('Scripts/python.exe' if os.name=='nt' else 'bin/python')
    if not python.exists():run([str(base),'-m','venv',str(home / 'venv')])
    report('Yerel üretim kütüphaneleri hazırlanıyor…')
    import platform
    versions=['torch==2.2.2','torchvision==0.17.2'] if sys.platform=='darwin' and platform.machine()=='x86_64' else ['torch==2.9.1','torchvision==0.24.1']
    run([str(python),'-m','pip','install','--disable-pip-version-check',*versions,*(['--index-url','https://download.pytorch.org/whl/cpu'] if sys.platform!='darwin' else [])])
    folder=pathlib.Path(__file__).parent
    run([str(python),'-m','pip','install','--disable-pip-version-check','-r',str(folder / 'requirements.txt'),'-r',str(folder / 'requirements-v2.txt')])
    archive=home / 'downloads' / f'hunyuan-{SOURCE}.zip'
    download(f'https://codeload.github.com/Tencent-Hunyuan/Hunyuan3D-2/zip/{SOURCE}',archive)
    vendor=home / 'vendor'
    with zipfile.ZipFile(archive) as files:files.extractall(vendor)
    run([str(python),str(pathlib.Path(__file__).resolve()),'--home',str(home),'--models'])

def quality_models(home):
    report('Ayrı Mini kalite motoru indiriliyor · yaklaşık 4 GB…')
    repo_download('tencent/Hunyuan3D-2mini',SHAPE,home/'models-v2'/'shape',[
        'hunyuan3d-dit-v2-mini/config.yaml','hunyuan3d-dit-v2-mini/model.fp16.safetensors',
        'hunyuan3d-vae-v2-mini/config.yaml','hunyuan3d-vae-v2-mini/model.fp16.safetensors'],reuse=True)
    report('Mini kalite motoru hazır. API olmadan yerel çalışır.',ready=True)

if __name__=='__main__':
    parser=argparse.ArgumentParser();parser.add_argument('--home',required=True);parser.add_argument('--models',action='store_true');parser.add_argument('--quality-models',action='store_true');args=parser.parse_args()
    try:
        home=pathlib.Path(args.home).resolve()
        if args.quality_models:quality_models(home)
        elif args.models:models(home)
        else:install(home)
    except Exception as error:report(str(error),error=True);raise
