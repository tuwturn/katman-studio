"""Portable CPU tests: image fidelity, disposable cache and numerical policy."""
import pathlib,sys,tempfile,unittest,zipfile,io,base64,types
from unittest.mock import patch,Mock
import numpy as np
from PIL import Image
sys.path.insert(0,str(pathlib.Path(__file__).resolve().parents[1]/'local-ai'))
from production_cache import ProductionCache,key_for
from reference_image import prepare_reference,FaithfulImageProcessor
from gpu_runtime import dtype_for
from generate_v2 import import_image
import torch

class ProductionTests(unittest.TestCase):
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
