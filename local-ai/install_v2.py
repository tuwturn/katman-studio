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

def repo_download(repo,revision,root,patterns):
    from huggingface_hub import HfApi
    from concurrent.futures import ThreadPoolExecutor
    info=HfApi().model_info(repo,revision=revision,files_metadata=True)
    def fetch(item):
        name=item.rfilename;target=root / name
        digest=item.lfs.sha256 if item.lfs else None;size=item.size
        url=f'https://huggingface.co/{repo}/resolve/{revision}/{name}'
        if not digest or size<16*1024*1024:
            return download(url,target,digest)
        if target.exists() and target.stat().st_size==size and file_hash(target)==digest:return
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

if __name__=='__main__':
    parser=argparse.ArgumentParser();parser.add_argument('--home',required=True);parser.add_argument('--models',action='store_true');args=parser.parse_args()
    try:
        home=pathlib.Path(args.home).resolve()
        if args.models:models(home)
        else:install(home)
    except Exception as error:report(str(error),error=True);raise
