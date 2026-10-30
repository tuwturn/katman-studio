"""Explicit GPU devices and bounded attention; no global CUDA/device impersonation."""
import math,os

def chunked_attention(query,key,value,attn_mask=None,dropout_p=0.,is_causal=False,scale=None,enable_gqa=False):
    import torch
    if dropout_p:raise RuntimeError('Parçalı GPU dikkat yolu yalnızca çıkarım içindir.')
    if enable_gqa and query.shape[-3]!=key.shape[-3]:
        repeats=query.shape[-3]//key.shape[-3];key=key.repeat_interleave(repeats,dim=-3);value=value.repeat_interleave(repeats,dim=-3)
    length=query.shape[-2];keys=key.shape[-2]
    heads=math.prod(query.shape[:-2])
    budget=max(16,min(128,int(os.environ.get('KATMAN_ATTENTION_MB','64'))))*1024**2
    chunk=max(1,min(512,budget//max(1,heads*keys*query.element_size())))
    scale=scale if scale is not None else query.shape[-1]**-.5
    transposed=key.transpose(-2,-1);result=[]
    for start in range(0,length,chunk):
        end=min(start+chunk,length)
        scores=(query[...,start:end,:]@transposed)*scale
        if attn_mask is not None:
            mask=attn_mask[...,start:end,:] if attn_mask.ndim>=2 and attn_mask.shape[-2]==length else attn_mask
            scores=scores.masked_fill(~mask,float('-inf')) if mask.dtype==torch.bool else scores+mask
        if is_causal:
            rows=torch.arange(start,end).to(query.device);cols=torch.arange(keys).to(query.device)
            scores=scores.masked_fill(cols[None,:]>rows[:,None],float('-inf'))
        probabilities=torch.softmax(scores,dim=-1)
        probabilities=torch.where(torch.isnan(probabilities),torch.zeros_like(probabilities),probabilities)
        result.append(probabilities@value)
    return torch.cat(result,dim=-2)

def install_attention():
    import torch.nn.functional as functional
    original=functional.scaled_dot_product_attention
    def attention(query,key,value,attn_mask=None,dropout_p=0.,is_causal=False,scale=None,enable_gqa=False):
        if query.device.type!='cuda':
            return original(query,key,value,attn_mask=attn_mask,dropout_p=dropout_p,is_causal=is_causal,scale=scale,**({'enable_gqa':True} if enable_gqa else {}))
        return chunked_attention(query,key,value,attn_mask,dropout_p,is_causal,scale,enable_gqa)
    functional.scaled_dot_product_attention=attention

def device_for(backend):
    import torch
    if backend=='cpu':return torch.device('cpu'),'İşlemci'
    if backend=='rocm':
        if not torch.version.hip or not torch.cuda.is_available():raise RuntimeError('AMD ROCm bu ortamda ekran kartını başlatamadı.')
    elif backend=='cuda':
        if torch.version.hip or not torch.version.cuda or not torch.cuda.is_available():raise RuntimeError('NVIDIA CUDA başlatılamadı. Sürücü ve kart uyumunu kontrol edin veya işlemciyi seçin.')
    else:raise RuntimeError('Bilinmeyen hesaplama aygıtı.')
    index=max(range(torch.cuda.device_count()),key=lambda i:torch.cuda.get_device_properties(i).total_memory)
    torch.cuda.set_device(index);device=torch.device('cuda',index);name=torch.cuda.get_device_name(index)
    # FP32 models need bounded attention on either GPU backend.
    install_attention()
    return device,name

def stage_device(device,required_bytes=0):
    """Leave VRAM for activations; large components can run on CPU on small cards."""
    import torch
    if device.type!='cuda':return device
    free,_=torch.cuda.mem_get_info(device)
    return device if free>required_bytes+2*1024**3 else torch.device('cpu')

def release_device(device):
    import gc,torch
    gc.collect()
    if device.type=='cuda':torch.cuda.empty_cache()
