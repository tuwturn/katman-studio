"""Portable CPU tests: image fidelity, disposable cache and numerical policy."""
import pathlib,sys,tempfile,unittest,zipfile,io,base64,types
from unittest.mock import patch,Mock
import numpy as np
from PIL import Image
sys.path.insert(0,str(pathlib.Path(__file__).resolve().parents[1]/'local-ai'))
from production_cache import ProductionCache,key_for
from reference_image import prepare_reference,FaithfulImageProcessor
from gpu_runtime import dtype_for
from generate_v2 import import_image,build_image_prompt,concept,normalize_translated_subject,image_parameters,decode_realistic_latents,cpu_vae_required
import torch

class ProductionTests(unittest.TestCase):
    def test_fp32_vae_decodes_the_same_latent_with_bounded_tiles_and_no_invalid_pixels(self):
        class Decoder(torch.nn.Module):
            def __init__(self):
                super().__init__();self.weight=torch.nn.Parameter(torch.zeros(1,dtype=torch.float16));self.config=types.SimpleNamespace(scaling_factor=.5)
            def enable_tiling(self):self.tiled=True
            def decode(self,latent,return_dict):
                self.input=latent;return (torch.cat([latent[:,:1]]*3,dim=1),)
        vae=Decoder();pixels=decode_realistic_latents(vae,torch.full((1,4,2,2),.25,dtype=torch.float16),torch.device('cpu'))
        self.assertEqual(vae.weight.dtype,torch.float32);self.assertEqual(vae.input.dtype,torch.float32)
        self.assertEqual((vae.tile_sample_min_size,vae.tile_latent_min_size),(512,64));self.assertTrue(vae.tiled)
        np.testing.assert_allclose(pixels,.75)
        with self.assertRaisesRegex(RuntimeError,'sayısal taşma'):decode_realistic_latents(vae,torch.full((1,4,2,2),float('nan')),torch.device('cpu'))
        self.assertTrue(cpu_vae_required('rocm','win32','gfx1031'))
        self.assertFalse(cpu_vae_required(None,'win32',''))
        self.assertFalse(cpu_vae_required('rocm','win32','gfx1100'))
        self.assertFalse(cpu_vae_required('rocm','linux','gfx1031'))
    def test_realism_uses_a_different_checkpoint_resolution_and_guided_sampling(self):
        real=image_parameters('realistic');fast=image_parameters('xl')
        self.assertNotEqual(real['revision'],fast['revision'])
        self.assertEqual((real['size'],real['steps'],real['guidance']),(1024,30,5.0))
        self.assertEqual((fast['size'],fast['steps'],fast['guidance']),(512,4,0.0))
        self.assertIn('realistic photograph',build_image_prompt('a child','realistic'))
        self.assertIn('a wooden chair',build_image_prompt('a wooden chair','realistic'))
        self.assertIn('head and feet visible',build_image_prompt('a person','realistic',person=True))
        self.assertNotIn('full-length',build_image_prompt('a portrait bust of a person','realistic'))
        self.assertNotIn('photograph',build_image_prompt('a monochrome pencil sketch','realistic'))
        self.assertTrue(real['negative']);self.assertIsNone(fast['negative'])
        with self.assertRaises(ValueError):image_parameters('unknown')
    def test_single_word_person_is_disambiguated_without_replacing_explicit_anatomy(self):
        self.assertEqual(normalize_translated_subject('human'),'a person')
        self.assertEqual(normalize_translated_subject('human skeleton'),'human skeleton')
        self.assertEqual(normalize_translated_subject('a human-shaped glass sculpture'),'a human-shaped glass sculpture')
    def test_xl_rejects_insufficient_cpu_ram_before_loading_weights(self):
        from diffusers import StableDiffusionXLPipeline
        with tempfile.TemporaryDirectory() as home:
            root=pathlib.Path(home);model=root/'models-v2/image-xl';output=root/'output';output.mkdir()
            for folder,name in [('unet','diffusion_pytorch_model.fp16.safetensors'),('vae','diffusion_pytorch_model.fp16.safetensors'),('text_encoder','model.fp16.safetensors'),('text_encoder_2','model.fp16.safetensors')]:
                path=model/folder/name;path.parent.mkdir(parents=True,exist_ok=True);path.touch()
            with patch('psutil.virtual_memory',return_value=types.SimpleNamespace(total=8*1024**3,available=4*1024**3)),patch.object(StableDiffusionXLPipeline,'from_pretrained') as load:
                with self.assertRaisesRegex(RuntimeError,'24 GB RAM'):concept(root,{'imageEngine':'xl','backend':'cpu','prompt':'a chair','language':'en','seed':42,'precision':'auto'},output)
                load.assert_not_called()

    def test_prompt_does_not_invent_material_or_pattern_but_keeps_user_requests(self):
        human=build_image_prompt('human')
        self.assertIn('showing human,',human)
        for forbidden in ['intricate','sculpture','product photograph','texture','woven','metallic']:
            self.assertNotIn(forbidden,human)
        self.assertIn('a woven basket,',build_image_prompt('a woven basket'))
        self.assertIn('a realistic person in cotton clothes,',build_image_prompt('a realistic person in cotton clothes'))
        self.assertNotIn('color image',build_image_prompt('a monochrome pencil sketch of a chair'))
    def test_background_reuse_keeps_a_new_reference_name_and_seed(self):
        image=Image.new('RGBA',(32,32),(100,120,180,255));stream=io.BytesIO();image.save(stream,format='PNG')
        separated=image.copy();alpha=Image.new('L',(32,32));alpha.paste(255,(8,8,24,24));separated.putalpha(alpha)
        remove=Mock(return_value=separated);module=types.SimpleNamespace(remove=remove,new_session=lambda *a,**kw:object())
        with tempfile.TemporaryDirectory() as home,patch.dict(sys.modules,{'rembg':module}):
            root=pathlib.Path(home);weights=root/'models-v2/background/u2netp.onnx';weights.parent.mkdir(parents=True);weights.touch()
            for seed in [42,43]:
                output=root/str(seed);output.mkdir();import_image(root,{'image':base64.b64encode(stream.getvalue()).decode(),'prompt':str(seed),'seed':seed},output)
                np.testing.assert_array_equal(np.asarray(Image.open(output/'reference.png')),np.asarray(separated))
            self.assertEqual(remove.call_count,1)

    def test_inclusive_framing_keeps_last_row_column_and_disconnected_thin_parts(self):
        pixels=np.zeros((60,100,4),np.uint8);pixels[10:50,20:80]=[220,90,30,255]
        pixels[2:59,99]=[10,100,200,255];pixels[59,0]=[80,170,20,255]
        image=Image.fromarray(pixels);prepared=np.asarray(prepare_reference(image))
        self.assertEqual(int((prepared[:,:,3]>0).sum()),int((pixels[:,:,3]>0).sum()))
        for color in [[10,100,200,255],[80,170,20,255]]:self.assertTrue(np.any(np.all(prepared==color,axis=-1)))
        np.testing.assert_array_equal(np.asarray(image),pixels)
        output=FaithfulImageProcessor(size=256)(image)
        self.assertEqual(tuple(output['image'].shape),(1,3,256,256))
        self.assertEqual(tuple(output['mask'].shape),(1,1,256,256))
        self.assertTrue(torch.isfinite(output['image']).all());self.assertGreater(output['mask'].max(),.9)

    def test_opaque_background_is_preserved_and_invisible_haze_does_not_expand_frame(self):
        opaque=Image.new('RGBA',(32,20),(12,80,170,255));prepared=prepare_reference(opaque)
        self.assertEqual(prepared.getchannel('A').getbbox(),(1,7,33,27))
        pixels=np.zeros((100,100,4),np.uint8);pixels[30:70,40:60]=[255,90,20,255];pixels[0,0]=[0,0,0,1]
        self.assertEqual(prepare_reference(Image.fromarray(pixels)).size,(42,42))

    def test_cache_preserves_values_and_rejects_corruption_or_pickled_arrays(self):
        with tempfile.TemporaryDirectory() as home:
            cache=ProductionCache(home);key=key_for('image',42);value=np.arange(30,dtype=np.float32).reshape(10,3)
            cache.save(key,vertices=value);np.testing.assert_array_equal(cache.load(key)['vertices'],value)
            path=cache.folder/(key+'.npz');path.write_bytes(b'corrupted');self.assertIsNone(cache.load(key))
            np.savez(path,unsafe=np.array([{'code':'never execute'}],dtype=object));self.assertIsNone(cache.load(key))
            self.assertNotEqual(key_for('image',42),key_for('image',43))

    def test_cache_pruning_and_precision_leave_cpu_float32(self):
        with tempfile.TemporaryDirectory() as home:
            cache=ProductionCache(home);cache.limit=400
            for n in range(5):cache.save(key_for(n),values=np.arange(20,dtype=np.float32)+n)
            self.assertLessEqual(sum(p.stat().st_size for p in cache.folder.glob('*.npz')),400)
        self.assertEqual(dtype_for(torch.device('cpu')),torch.float32)
        self.assertEqual(dtype_for(torch.device('cuda:0'),'auto'),torch.float16)
        self.assertEqual(dtype_for(torch.device('cuda:0'),'float32'),torch.float32)

    def test_full_disk_does_not_fail_production_or_leave_partial_cache(self):
        with tempfile.TemporaryDirectory() as home:
            cache=ProductionCache(home);key=key_for('full-disk')
            with patch('numpy.savez_compressed',side_effect=OSError('disk full')):cache.save(key,value=np.ones(10))
            self.assertFalse((cache.folder/(key+'.tmp')).exists());self.assertIsNone(cache.load(key))

if __name__=='__main__':unittest.main()
