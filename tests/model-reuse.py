"""A reused checkpoint is accepted only if it matches the whole official digest."""
import hashlib,json,pathlib,struct,sys,tempfile,unittest,io
from unittest.mock import patch
sys.path.insert(0,str(pathlib.Path(__file__).resolve().parents[1]/'local-ai'))
from install_v2 import reuse_encoder

def checkpoint(encoder,model):
    header=json.dumps({'conditioner.weight':{'dtype':'U8','shape':[len(encoder)],'data_offsets':[0,len(encoder)]},'model.weight':{'dtype':'U8','shape':[len(model)],'data_offsets':[len(encoder),len(encoder)+len(model)]}}).encode()
    return struct.pack('<Q',len(header))+header+encoder+model

class ReuseTests(unittest.TestCase):
    def test_matching_frozen_encoder_is_reused_and_a_mismatch_never_becomes_an_installed_model(self):
        target_bytes=checkpoint(bytes(range(100)),b'new model')
        ranges=[]
        class Response(io.BytesIO):
            status=206
        def request(value,**kwargs):
            start,end=map(int,value.get_header('Range').removeprefix('bytes=').split('-'));ranges.append((start,end))
            response=Response(target_bytes[start:end+1]);response.headers={'Content-Range':f'bytes {start}-{end}/{len(target_bytes)}'};return response
        with tempfile.TemporaryDirectory() as folder:
            source=pathlib.Path(folder)/'source';target=pathlib.Path(folder)/'target';source.write_bytes(checkpoint(bytes(range(100)),b'old model'))
            digest=hashlib.sha256(target_bytes).hexdigest()
            with patch('install_v2.urllib.request.urlopen',side_effect=request):self.assertTrue(reuse_encoder('https://weights.example/file',target,source,len(target_bytes),digest,minimum_bytes=1))
            self.assertEqual(target.read_bytes(),target_bytes);self.assertEqual(ranges[-1][1]-ranges[-1][0]+1,len(b'new model'))
            target.unlink();source.write_bytes(checkpoint(b'x'*100,b'old model'))
            with patch('install_v2.urllib.request.urlopen',side_effect=request):self.assertFalse(reuse_encoder('https://weights.example/file',target,source,len(target_bytes),digest,minimum_bytes=1))
            self.assertFalse(target.exists());self.assertFalse(target.with_suffix('.reuse').exists())

if __name__=='__main__':unittest.main()
