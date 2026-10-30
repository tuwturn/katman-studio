"""Isolated AMD ROCm setup; leaves the CPU environment and drivers intact."""
import argparse,json,pathlib,re,subprocess,sys
from install import report,run

INDEX='https://stable.repo.amd.com/rocm/whl-next/'
TORCH='2.12.0+rocm10.1.0'
VISION='0.27.0+rocm10.1.0'

def architecture():
    import torch
    if not torch.version.hip or not torch.cuda.is_available():raise RuntimeError('AMD ROCm uyumlu ekran kartı bulunamadı. İşlemci seçeneğini kullanabilirsiniz.')
    arch=torch.cuda.get_device_properties(0).gcnArchName.split(':')[0]
    if not re.fullmatch(r'gfx[0-9a-f]+',arch):raise RuntimeError('Ekran kartı mimarisi doğrulanamadı.')
    return arch

def install(home):
    if sys.platform!='win32':raise RuntimeError('Bu GPU kurulumu Windows üzerinde AMD içindir. Bu sistemde işlemci kullanılabilir.')
    env=home/'venv-rocm';python=env/'Scripts/python.exe'
    if not python.exists():
        report('AMD için ayrı çalışma ortamı hazırlanıyor…')
        base=home/'python-base/python.exe'
        run([str(base if base.exists() else sys.executable),'-m','venv',str(env)])
    report('AMD ROCm hesaplama kütüphaneleri indiriliyor…')
    run([str(python),'-m','pip','install','--disable-pip-version-check',f'torch=={TORCH}',f'torchvision=={VISION}','rocm[libraries]==10.1.0','--index-url',INDEX])
    arch=subprocess.check_output([str(python),str(pathlib.Path(__file__).resolve()),'--home',str(home),'--architecture'],text=True).strip()
    if not re.fullmatch(r'gfx[0-9a-f]+',arch):raise RuntimeError('Ekran kartı mimarisi okunamadı.')
    report('Ekran kartına özel hesaplama çekirdekleri kuruluyor: '+arch)
    run([str(python),'-m','pip','install','--disable-pip-version-check',f'torch[device-{arch}]=={TORCH}',f'torchvision[device-{arch}]=={VISION}','--index-url',INDEX])
    folder=pathlib.Path(__file__).parent
    run([str(python),'-m','pip','install','--disable-pip-version-check','-r',str(folder/'requirements.txt'),'-r',str(folder/'requirements-v2.txt')])
    run([str(python),str(pathlib.Path(__file__).resolve()),'--home',str(home),'--probe'])

def probe(home):
    import torch
    from gpu_runtime import chunked_attention
    arch=architecture();device=torch.device('cuda:0');torch.set_num_threads(4);torch.manual_seed(1)
    a=torch.randn(256,256);b=torch.randn(256,256)
    if not torch.allclose((a.to(device)@b.to(device)).cpu(),a@b,atol=.001,rtol=.001):raise RuntimeError('GPU çarpım doğrulaması başarısız.')
    q=torch.randn(1,4,64,32);expected=torch.nn.functional.scaled_dot_product_attention(q,q,q)
    if not torch.allclose(chunked_attention(q.to(device),q.to(device),q.to(device)).cpu(),expected,atol=.001,rtol=.001):raise RuntimeError('GPU dikkat doğrulaması başarısız.')
    conv=torch.nn.Conv2d(3,8,3).eval();image=torch.randn(1,3,32,32)
    with torch.inference_mode():
        expected=conv(image);actual=conv.to(device)(image.to(device)).cpu()
    if not torch.allclose(actual,expected,atol=.001,rtol=.001):raise RuntimeError('GPU evrişim doğrulaması başarısız.')
    info={'backend':'rocm','name':torch.cuda.get_device_name(0),'architecture':arch,'torch':torch.__version__}
    home.mkdir(parents=True,exist_ok=True);temporary=home/'gpu-ready.json.tmp';temporary.write_text(json.dumps(info),encoding='utf-8');temporary.replace(home/'gpu-ready.json')
    report('AMD GPU hesaplama testleri geçti: '+info['name'],device=info['name'],backend='rocm')

if __name__=='__main__':
    parser=argparse.ArgumentParser();parser.add_argument('--home',required=True);parser.add_argument('--probe',action='store_true');parser.add_argument('--architecture',action='store_true');args=parser.parse_args()
    try:
        home=pathlib.Path(args.home).resolve()
        if args.architecture:print(architecture())
        elif args.probe:probe(home)
        else:install(home)
    except Exception as error:report(str(error),error=True);raise
