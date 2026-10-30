"""Isolated NVIDIA CUDA / AMD ROCm setup; leaves the CPU environment and drivers intact."""
import argparse,json,pathlib,re,subprocess,sys
from install import report,run

INDEX='https://stable.repo.amd.com/rocm/whl-next/'
TORCH='2.12.0+rocm10.1.0'
VISION='0.27.0+rocm10.1.0'

def architecture():
    import torch
    if not torch.version.hip or not torch.cuda.is_available():raise RuntimeError('AMD ROCm uyumlu ekran kartı bulunamadı. İşlemci seçeneğini kullanabilirsiniz.')
    index=max(range(torch.cuda.device_count()),key=lambda i:torch.cuda.get_device_properties(i).total_memory)
    arch=torch.cuda.get_device_properties(index).gcnArchName.split(':')[0]
    if not re.fullmatch(r'gfx[0-9a-f]+',arch):raise RuntimeError('Ekran kartı mimarisi doğrulanamadı.')
    return arch

def install(home,backend):
    if sys.platform not in ['win32','linux'] or (backend=='rocm' and sys.platform!='win32'):raise RuntimeError('Bu sistem için doğrulanabilir GPU kurulum yolu yok; işlemci kullanılabilir.')
    env=home/('venv-cuda' if backend=='cuda' else 'venv-rocm');python=env/('Scripts/python.exe' if sys.platform=='win32' else 'bin/python')
    if not python.exists():
        report('GPU için ayrı çalışma ortamı hazırlanıyor…')
        base=home/'python-base/python.exe'
        run([str(base if base.exists() else sys.executable),'-m','venv',str(env)])
    if backend=='cuda':
        report('NVIDIA CUDA hesaplama kütüphaneleri indiriliyor…')
        run([str(python),'-m','pip','install','--disable-pip-version-check','torch==2.9.1','torchvision==0.24.1','--index-url','https://download.pytorch.org/whl/cu128'])
    else:
        report('AMD ROCm hesaplama kütüphaneleri indiriliyor…')
        run([str(python),'-m','pip','install','--disable-pip-version-check',f'torch=={TORCH}',f'torchvision=={VISION}','rocm[libraries]==10.1.0','--index-url',INDEX])
        arch=subprocess.check_output([str(python),str(pathlib.Path(__file__).resolve()),'--home',str(home),'--architecture'],text=True).strip()
        if not re.fullmatch(r'gfx[0-9a-f]+',arch):raise RuntimeError('Ekran kartı mimarisi okunamadı.')
        report('Ekran kartına özel hesaplama çekirdekleri kuruluyor: '+arch)
        run([str(python),'-m','pip','install','--disable-pip-version-check',f'torch[device-{arch}]=={TORCH}',f'torchvision[device-{arch}]=={VISION}','--index-url',INDEX])
    folder=pathlib.Path(__file__).parent
    run([str(python),'-m','pip','install','--disable-pip-version-check','-r',str(folder/'requirements.txt'),'-r',str(folder/'requirements-v2.txt')])
    run([str(python),str(pathlib.Path(__file__).resolve()),'--home',str(home),'--backend',backend,'--probe'])

def probe(home,backend):
    import torch
    from gpu_runtime import chunked_attention,device_for
    device,name=device_for(backend);arch=architecture() if backend=='rocm' else '.'.join(map(str,torch.cuda.get_device_capability(device)));torch.set_num_threads(4);torch.manual_seed(1)
    a=torch.randn(256,256);b=torch.randn(256,256)
    if not torch.allclose((a.to(device)@b.to(device)).cpu(),a@b,atol=.001,rtol=.001):raise RuntimeError('GPU çarpım doğrulaması başarısız.')
    q=torch.randn(1,4,64,32);expected=torch.softmax(q@q.transpose(-2,-1)/(q.shape[-1]**.5),dim=-1)@q
    if not torch.allclose(chunked_attention(q.to(device),q.to(device),q.to(device)).cpu(),expected,atol=.001,rtol=.001):raise RuntimeError('GPU dikkat doğrulaması başarısız.')
    conv=torch.nn.Conv2d(3,8,3).eval();image=torch.randn(1,3,32,32)
    with torch.inference_mode():
        expected=conv(image);actual=conv.to(device)(image.to(device)).cpu()
    if not torch.allclose(actual,expected,atol=.001,rtol=.001):raise RuntimeError('GPU evrişim doğrulaması başarısız.')
    info={'backend':backend,'name':name,'architecture':arch,'torch':torch.__version__,'memoryGB':round(torch.cuda.get_device_properties(device).total_memory/1024**3,2),'index':device.index}
    home.mkdir(parents=True,exist_ok=True);temporary=home/'gpu-ready.json.tmp';temporary.write_text(json.dumps(info),encoding='utf-8');temporary.replace(home/'gpu-ready.json')
    report('GPU hesaplama testleri geçti: '+info['name'],device=info['name'],backend=backend)

if __name__=='__main__':
    parser=argparse.ArgumentParser();parser.add_argument('--home',required=True);parser.add_argument('--backend',choices=['rocm','cuda'],default='rocm');parser.add_argument('--probe',action='store_true');parser.add_argument('--architecture',action='store_true');args=parser.parse_args()
    try:
        home=pathlib.Path(args.home).resolve()
        if args.probe:
            marker=home/'gpu-ready.json'
            if marker.exists() and json.loads(marker.read_text(encoding='utf-8')).get('backend')==args.backend:marker.unlink()
        if args.architecture:print(architecture())
        elif args.probe:probe(home,args.backend)
        else:install(home,args.backend)
    except Exception as error:report(str(error),error=True);raise
