"""Checks the bounded GPU attention math against native SDPA on CPU."""
import pathlib,sys,unittest
import torch
sys.path.insert(0,str(pathlib.Path(__file__).resolve().parents[1]/'local-ai'))
from gpu_runtime import chunked_attention

class AttentionTests(unittest.TestCase):
    def test_cross_attention_and_masks(self):
        torch.manual_seed(42);torch.set_num_threads(2)
        q=torch.randn(1,2,1100,16);k=torch.randn(1,2,1200,16);v=torch.randn(1,2,1200,12)
        for mask,causal in [(None,False),(None,True),(torch.rand(1,1,1100,1200)>.3,False),(torch.randn(1,1,1100,1200)*.1,False),(torch.zeros(1,1,1100,1200,dtype=torch.bool),False)]:
            with self.subTest(causal=causal,mask=None if mask is None else str(mask.dtype)):
                expected=torch.nn.functional.scaled_dot_product_attention(q,k,v,attn_mask=mask,is_causal=causal)
                actual=chunked_attention(q,k,v,attn_mask=mask,is_causal=causal)
                torch.testing.assert_close(actual,expected,atol=2e-6,rtol=2e-5)

    def test_grouped_query_and_explicit_scale(self):
        q=torch.randn(1,4,40,16);k=torch.randn(1,2,50,16);v=torch.randn(1,2,50,16)
        expected=torch.nn.functional.scaled_dot_product_attention(q,k.repeat_interleave(2,dim=1),v.repeat_interleave(2,dim=1),scale=.3)
        torch.testing.assert_close(chunked_attention(q,k,v,scale=.3,enable_gqa=True),expected,atol=2e-6,rtol=2e-5)

if __name__=='__main__':unittest.main()
