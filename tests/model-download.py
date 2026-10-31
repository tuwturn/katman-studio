"""Range transfers must resume exactly and verify the complete model before publish."""
import hashlib,io,pathlib,sys,tempfile,types,unittest
from unittest.mock import patch
sys.path.insert(0,str(pathlib.Path(__file__).resolve().parents[1]/'local-ai'))
from install_v2 import repo_download

class DownloadTests(unittest.TestCase):
    def transfer(self,root,content,bad_range=False):
        item=types.SimpleNamespace(rfilename='unet/model.fp16.safetensors',size=len(content),lfs=types.SimpleNamespace(sha256=hashlib.sha256(content).hexdigest()))
        api=types.SimpleNamespace(model_info=lambda *a,**kw:types.SimpleNamespace(siblings=[item]))
        ranges=[]
        class Response(io.BytesIO):
            url='https://weights.example/signed'
            status=206
        def request(value,**kwargs):
            if value.get_method()=='HEAD':return Response()
            start,end=map(int,value.get_header('Range').removeprefix('bytes=').split('-'))
            ranges.append((start,end));response=Response(content[start:end+1])
            response.headers={'Content-Range':'incorrect' if bad_range else f'bytes {start}-{end}/{len(content)}'}
            return response
        with patch('huggingface_hub.HfApi',return_value=api),patch('install_v2.urllib.request.urlopen',side_effect=request),patch('install_v2.time.sleep'),patch('install_v2.report'):
            repo_download('owner/model','fixed-revision',root,['unet/*'])
        return ranges

    def test_resume_at_non_aligned_offset_reconstructs_exact_official_bytes(self):
        content=bytes(range(256))*(80*1024)
        with tempfile.TemporaryDirectory() as folder:
            root=pathlib.Path(folder);target=root/'unet/model.fp16.safetensors';target.parent.mkdir()
            partial=target.with_suffix(target.suffix+'.part');offset=5*1024**2+19;partial.write_bytes(content[:offset])
            ranges=self.transfer(root,content)
            self.assertEqual(target.read_bytes(),content);self.assertFalse(partial.exists())
            self.assertEqual(min(start for start,_ in ranges),offset)
            self.assertTrue(all(end-start+1<=4*1024**2 for start,end in ranges))

    def test_wrong_range_and_corrupted_prefix_never_publish_a_model(self):
        content=b'correct model data'*1024**2
        with tempfile.TemporaryDirectory() as folder:
            root=pathlib.Path(folder);target=root/'unet/model.fp16.safetensors'
            with self.assertRaisesRegex(RuntimeError,'dosya aralığı'):self.transfer(root,content,bad_range=True)
            self.assertFalse(target.exists())
            partial=target.with_suffix(target.suffix+'.part');partial.write_bytes(b'corrupt prefix')
            with self.assertRaisesRegex(RuntimeError,'SHA-256'):self.transfer(root,content)
            self.assertFalse(target.exists());self.assertEqual(partial.stat().st_size,0)

if __name__=='__main__':unittest.main()
