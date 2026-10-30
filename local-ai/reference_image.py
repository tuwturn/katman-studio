"""Prepare a model input without smoothing, enlarging, recoloring or erasing thin parts."""
def prepare_reference(image):
    import numpy as np
    from PIL import Image
    rgba=image.convert('RGBA');pixels=np.array(rgba);alpha=pixels[:,:,3]
    # Ignore faint segmentation haze for framing; retain every pixel above 1% alpha.
    significant=alpha>=8
    if not significant.any():raise RuntimeError('Görselde görünür nesne bulunamadı.')
    # Low-alpha detached haze can otherwise stretch the model's crop to the canvas edge.
    pixels[:,:,3][alpha<=2]=0
    visible=pixels[:,:,3]>0;y,x=np.where(visible)
    left,top,right,bottom=int(x.min()),int(y.min()),int(x.max())+1,int(y.max())+1
    crop=Image.fromarray(pixels).crop((left,top,right,bottom))
    # A one-pixel transparent border preserves the final row/column in upstream recenter().
    side=max(crop.size)+2;canvas=Image.new('RGBA',(side,side))
    canvas.paste(crop,((side-crop.width)//2,(side-crop.height)//2))
    return canvas

class FaithfulImageProcessor:
    """Inclusive crop and one resize; avoids the upstream exclusive-edge/double resize."""
    def __init__(self,size=512,border_ratio=.15):self.size=size;self.border_ratio=border_ratio
    def __call__(self,image,**_):
        import torch,numpy as np
        from PIL import Image
        prepared=prepare_reference(image);alpha=prepared.getchannel('A');bbox=alpha.getbbox()
        crop=prepared.crop(bbox);size=self.size;available=max(1,int(size*(1-self.border_ratio)))
        scale=min(available/crop.width,available/crop.height)
        resized=crop.resize((max(1,round(crop.width*scale)),max(1,round(crop.height*scale))),Image.Resampling.LANCZOS)
        canvas=Image.new('RGBA',(size,size));canvas.paste(resized,((size-resized.width)//2,(size-resized.height)//2))
        rgba=np.asarray(canvas,dtype=np.float32)/255;mask=rgba[:,:,3:4];rgb=rgba[:,:,:3]*mask+(1-mask)
        return {'image':torch.from_numpy((rgb*2-1).transpose(2,0,1).copy()).unsqueeze(0),'mask':torch.from_numpy((mask*2-1).transpose(2,0,1).copy()).unsqueeze(0)}
