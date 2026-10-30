"""First-time local setup; generation itself never downloads models."""
import argparse, hashlib, json, os, pathlib, platform, shutil, subprocess, sys, urllib.request, venv, zipfile

SHAPE = '50131012ee11c9d2617f3886c10f000d3c7a3b43'
CLIP = 'd05afc436d78f1c48dc0dbf8e5980a9d471f35f6'

def report(message, **extra):
    print(json.dumps({'message': message, **extra}, ensure_ascii=True), flush=True)

def download(url, path, digest=None):
    path = pathlib.Path(path); path.parent.mkdir(parents=True, exist_ok=True)
    if path.exists() and (not digest or hashlib.sha256(path.read_bytes()).hexdigest() == digest):
        return
    partial = path.with_suffix(path.suffix + '.part'); offset = partial.stat().st_size if partial.exists() else 0
    request = urllib.request.Request(url, headers={'User-Agent': 'Katman-Studio-local-ai', **({'Range': f'bytes={offset}-'} if offset else {})})
    with urllib.request.urlopen(request, timeout=120) as response:
        if response.status != 206: offset = 0
        total = int(response.headers.get('Content-Length', '0')) + offset
        with partial.open('ab' if offset else 'wb') as out:
            previous = -1
            while True:
                block = response.read(1024 * 1024)
                if not block: break
                out.write(block); offset += len(block)
                percent = int(offset * 100 / total) if total else 0
                if percent != previous:
                    previous = percent; report(f'{path.name} indiriliyor · %{percent}', progress=percent)
    if digest:
        hasher = hashlib.sha256()
        with partial.open('rb') as stream:
            for block in iter(lambda: stream.read(4 * 1024 * 1024), b''): hasher.update(block)
        if hasher.hexdigest() != digest: raise RuntimeError(f'{path.name} doğrulaması başarısız. Eksik dosyayı kaldırıp kurulumu yeniden deneyin.')
    os.replace(partial, path)

def run(command):
    subprocess.run(command, check=True, stdout=sys.stderr, stderr=sys.stderr)

def private_python(home):
    if os.name != 'nt': return pathlib.Path(sys.executable)
    target=home / 'python-base'; source=pathlib.Path(sys.base_prefix)
    if target.resolve()!=source.resolve() and not (target / 'Lib' / 'encodings' / '__init__.py').exists():
        report('Bağımsız Python çalışma dosyaları kopyalanıyor…');target.mkdir(parents=True,exist_ok=True)
        for item in source.iterdir():
            if item.is_file() and (item.suffix.lower() in ['.exe','.dll'] or item.name=='LICENSE.txt'):shutil.copy2(item,target / item.name)
        for name in ['Lib','DLLs']:
            if (source / name).exists():shutil.copytree(source / name,target / name,dirs_exist_ok=True,ignore=shutil.ignore_patterns('site-packages','__pycache__','test','tests'))
    config=home / 'venv' / 'pyvenv.cfg'
    if config.exists():
        lines=config.read_text(encoding='utf-8').splitlines();config.write_text('\n'.join(('home = '+str(target)) if line.startswith('home = ') else ('executable = '+str(target / 'python.exe')) if line.startswith('executable = ') else line for line in lines)+'\n',encoding='utf-8')
    return target / 'python.exe'

def install(home):
    home = pathlib.Path(home).resolve(); home.mkdir(parents=True, exist_ok=True)
    if not (3, 10) <= sys.version_info[:2] <= (3, 12): raise RuntimeError('Yerel motor için Python 3.10–3.12 gerekli.')
    base=private_python(home)
    env = home / 'venv'; python = env / ('Scripts/python.exe' if os.name == 'nt' else 'bin/python')
    if not python.exists():
        report('Bağımsız Python ortamı hazırlanıyor…'); run([str(base),'-m','venv',str(env)])
    report('Yerel hesaplama kütüphaneleri kuruluyor…')
    run([str(python), '-m', 'pip', 'install', '--disable-pip-version-check', '--upgrade', 'pip', 'setuptools', 'wheel'])
    torch_versions=['torch==2.2.2','torchvision==0.17.2'] if sys.platform=='darwin' and platform.machine()=='x86_64' else ['torch==2.9.1','torchvision==0.24.1']
    run([str(python), '-m', 'pip', 'install', '--disable-pip-version-check', *torch_versions, '--index-url', 'https://download.pytorch.org/whl/cpu'])
    run([str(python), '-m', 'pip', 'install', '--disable-pip-version-check', '-r', str(pathlib.Path(__file__).with_name('requirements.txt'))])
    for name, repo, revision in [('shap-e', 'shap-e', SHAPE), ('CLIP', 'CLIP', CLIP)]:
        archive = home / 'downloads' / f'{name}-{revision}.zip'
        download(f'https://codeload.github.com/openai/{repo}/zip/{revision}', archive)
        vendor = home / 'vendor'; vendor.mkdir(exist_ok=True)
        with zipfile.ZipFile(archive) as files: files.extractall(vendor)
        source = vendor / f'{repo}-{revision}'
        run([str(python), '-m', 'pip', 'install', '--disable-pip-version-check', '--no-deps', str(source)])
    run([str(python), str(pathlib.Path(__file__).resolve()), '--home', str(home), '--models'])

def models(home):
    home = pathlib.Path(home).resolve(); os.environ['XDG_CACHE_HOME'] = str(home / 'models')
    from shap_e.models.download import MODEL_PATHS, CONFIG_PATHS, URL_HASHES
    import clip
    from concurrent.futures import ThreadPoolExecutor
    from huggingface_hub import snapshot_download
    jobs=[]
    for name in ['text300M','decoder']:
        for url in [MODEL_PATHS[name],CONFIG_PATHS[name]]: jobs.append((url, home / 'models' / 'shap-e' / url.rsplit('/',1)[-1], URL_HASHES[url]))
    url=CONFIG_PATHS['diffusion'];jobs.append((url,home / 'models' / 'shap-e' / url.rsplit('/',1)[-1],URL_HASHES[url]))
    url=clip.clip._MODELS['ViT-L/14'];jobs.append((url,home / 'models' / 'clip' / url.rsplit('/',1)[-1],url.split('/')[-2]))
    def translation():
        report('Türkçe–İngilizce yerel çeviri modeli indiriliyor…')
        snapshot_download('Helsinki-NLP/opus-mt-tr-en',local_dir=str(home / 'models' / 'tr-en'),allow_patterns=['config.json','generation_config.json','pytorch_model.bin','tokenizer_config.json','source.spm','target.spm','vocab.json','special_tokens_map.json'])
    with ThreadPoolExecutor(max_workers=3) as pool:
        futures=[pool.submit(download,*job) for job in jobs];futures.append(pool.submit(translation))
        for future in futures: future.result()
    report('Yerel çeviri ağırlıkları hazırlanıyor…')
    import torch
    from safetensors.torch import save_file
    translation_dir=home / 'models' / 'tr-en'; safe=translation_dir / 'model.safetensors'
    if not safe.exists():
        state=torch.load(translation_dir / 'pytorch_model.bin',map_location='cpu',weights_only=True)
        save_file({key:value.contiguous().clone() for key,value in state.items()},str(safe),metadata={'format':'pt'})
        del state
    (home / 'ready.json').write_text(json.dumps({'engine': 'shap-e', 'revision': SHAPE, 'translation': 'Helsinki-NLP/opus-mt-tr-en'}), encoding='utf-8')
    report('Yerel motor hazır. Üretim internetsiz çalışır.', ready=True)

if __name__ == '__main__':
    parser = argparse.ArgumentParser(); parser.add_argument('--home', required=True); parser.add_argument('--models', action='store_true'); args = parser.parse_args()
    try:
        if args.models: models(args.home)
        else: install(args.home)
    except Exception as error:
        report(str(error), error=True); raise
