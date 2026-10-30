"""Offline Shap-E text-to-mesh runner. Stdout is an NDJSON progress channel."""
import gc, json, os, pathlib, socket, sys

def report(message, **extra):
    print(json.dumps({'message': message, **extra}), flush=True)

def deny_network(*args, **kwargs):
    raise RuntimeError('Üretimde ağ erişimi kapalı. Önce yerel motor kurulumunu tamamlayın.')

def main():
    home = pathlib.Path(sys.argv[1]).resolve(); job = json.load(sys.stdin)
    os.environ.update({'XDG_CACHE_HOME': str(home / 'models'), 'HF_HUB_OFFLINE': '1', 'TRANSFORMERS_OFFLINE': '1', 'HF_HUB_DISABLE_TELEMETRY': '1', 'TOKENIZERS_PARALLELISM': 'false'})
    socket.create_connection = deny_network; socket.socket.connect = deny_network; socket.socket.connect_ex = deny_network
    import numpy as np
    import torch
    torch.set_num_threads(max(1, min(4, (os.cpu_count() or 2) // 2)))
    prompt = job['prompt'].strip(); seed = int(job['seed']); torch.manual_seed(seed)
    if job.get('language', 'tr') == 'tr':
        report('Türkçe tarif bilgisayarınızda çevriliyor…', phase='translate')
        from transformers import MarianMTModel, MarianTokenizer
        folder = str(home / 'models' / 'tr-en'); tokenizer = MarianTokenizer.from_pretrained(folder, local_files_only=True); translator = MarianMTModel.from_pretrained(folder, local_files_only=True).eval()
        with torch.inference_mode():
            encoded = tokenizer([prompt], return_tensors='pt', truncation=True, max_length=256); translated = translator.generate(**encoded, max_new_tokens=256); prompt = tokenizer.decode(translated[0], skip_special_tokens=True)
        del translator, tokenizer, encoded, translated; gc.collect()
    report('Yerel metin ve 3D modeli yükleniyor…', phase='load', translated=prompt)
    from shap_e.models.download import load_model, load_config
    import shap_e.models.generation.pretrained_clip as pretrained_clip
    pretrained_clip.default_cache_dir = lambda: str(home / 'models' / 'clip')
    from shap_e.diffusion.gaussian_diffusion import diffusion_from_config
    from shap_e.diffusion.sample import sample_latents
    device = torch.device('cpu'); cache = str(home / 'models' / 'shap-e')
    model = load_model('text300M', device=device, cache_dir=cache)
    diffusion = diffusion_from_config(load_config('diffusion', cache_dir=cache))
    calls = [0]
    def progress(*_):
        calls[0] += 1
        report(f'3D biçim üretiliyor · hesaplama {calls[0]}', phase='sample', calculations=calls[0])
    model.register_forward_pre_hook(progress)
    report('3D biçim üretiliyor. İşlemci üzerinde birkaç dakika sürebilir…', phase='sample')
    with torch.inference_mode():
        latents = sample_latents(batch_size=1, model=model, diffusion=diffusion, guidance_scale=15.0, model_kwargs={'texts': [prompt]}, progress=False, clip_denoised=True, use_fp16=False, use_karras=True, karras_steps=job.get('steps', 64), sigma_min=1e-3, sigma_max=160, s_churn=0, device=device)
    del model, diffusion; gc.collect()
    report('Üçgen yüzey ve renkler çıkarılıyor…', phase='mesh')
    from shap_e.util.notebooks import decode_latent_mesh
    decoder = load_model('decoder', device=device, cache_dir=cache)
    with torch.inference_mode(): mesh = decode_latent_mesh(decoder, latents[0]).tri_mesh()
    vertices = np.asarray(mesh.verts, dtype=np.float64); faces = np.asarray(mesh.faces, dtype=np.int64)
    if len(faces) < 4 or not np.isfinite(vertices).all(): raise RuntimeError('Motor geçerli bir yüzey üretemedi. Tarifi sadeleştirip farklı bir varyasyon deneyin.')
    low = vertices.min(axis=0); high = vertices.max(axis=0); height = high[2] - low[2]
    if height < 1e-6: raise RuntimeError('Üretilen modelin yüksekliği geçersiz. Başka bir varyasyon deneyin.')
    vertices = (vertices - np.array([(low[0]+high[0])/2, (low[1]+high[1])/2, low[2]])) * (float(job['height'])/height)
    channels = mesh.vertex_channels or {}
    if all(c in channels for c in ['R', 'G', 'B']):
        colors = np.stack([channels[c] for c in ['R','G','B']], axis=-1).reshape(-1,3)
        if colors.max() > 1: colors = colors / 255
        # Shap-E raw mesh vertex channels are already linear RGB.
        colors = np.clip(colors,0,1)
    else: colors = np.full(vertices.shape, .65)
    result = {'color_space': 'linear', 'name': job['prompt'][:80], 'vertices': vertices.round(6).tolist(), 'triangles': faces.tolist(), 'colors': colors.round(6).tolist()}
    output = home / 'jobs' / job['id']; output.mkdir(parents=True, exist_ok=True)
    temporary = output / 'mesh.tmp'; temporary.write_text(json.dumps(result, separators=(',',':')), encoding='utf-8'); temporary.replace(output / 'mesh.json')
    (output / 'prompt.json').write_text(json.dumps({'prompt': job['prompt'], 'translated': prompt, 'seed': seed, 'steps': job['steps']}, ensure_ascii=False), encoding='utf-8')
    report('Model hazır.', phase='done', done=True, translated=prompt, vertices=len(vertices), triangles=len(faces))

if __name__ == '__main__':
    try: main()
    except Exception as error:
        report(str(error), error=True); raise
