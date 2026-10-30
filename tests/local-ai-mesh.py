"""Run with the installed AI environment's Python; no inference or network required."""
import pathlib,sys,unittest,base64,io,json,tempfile
from unittest.mock import patch
from PIL import Image
import numpy as np
import trimesh
sys.path.insert(0,str(pathlib.Path(__file__).resolve().parents[1] / 'local-ai'))
from generate_v2 import clean_mesh,import_image

class OutputMeshTests(unittest.TestCase):
    def test_uploaded_transparency_is_preserved_and_background_can_be_kept(self):
        for transparent in [True,False]:
            source=Image.new('RGBA',(32,32),(80,100,150,0 if transparent else 255))
            if transparent:
                for x in range(8,24):
                    for y in range(8,24):source.putpixel((x,y),(255,0,0,255))
            stream=io.BytesIO();source.save(stream,format='PNG')
            with tempfile.TemporaryDirectory() as folder,patch.dict(sys.modules,{'rembg':None}):
                output=pathlib.Path(folder)
                import_image(output,{'image':base64.b64encode(stream.getvalue()).decode(),'prompt':'Uploaded image','seed':1,'removeBackground':transparent},output)
                np.testing.assert_array_equal(np.asarray(Image.open(output/'reference.png')),np.asarray(source))
                self.assertEqual(json.loads((output/'concept.json').read_text(encoding='utf-8'))['source'],'upload')

    def test_duplicates_and_collapsed_faces_do_not_make_a_closed_surface_nonmanifold(self):
        source=trimesh.creation.box(extents=[2,3,4])
        vertices=np.vstack([source.vertices,source.vertices[0]])
        faces=source.faces.copy()
        faces[faces==0]=len(vertices)-1
        faces=np.vstack([faces,np.tile(faces[:3],(15,1)),[0,0,1]])
        result=clean_mesh(vertices,faces)
        self.assertEqual(len(result.faces),len(source.faces))
        self.assertTrue(result.is_watertight)
        self.assertTrue(result.is_winding_consistent)
        self.assertAlmostEqual(result.volume,source.volume)
        np.testing.assert_array_equal(result.bounds,source.bounds)

    def test_separate_valid_parts_remain_and_empty_output_is_rejected(self):
        left=trimesh.creation.box();right=trimesh.creation.box();right.apply_translation([10,0,0])
        source=trimesh.util.concatenate([left,right])
        result=clean_mesh(source.vertices,source.faces)
        self.assertEqual(len(result.split()),2)
        self.assertAlmostEqual(result.volume,2)
        np.testing.assert_array_equal(result.bounds,source.bounds)
        with self.assertRaisesRegex(RuntimeError,'yüzey'):
            clean_mesh([[0,0,0],[1,0,0]],[[0,0,1]])

if __name__=='__main__':unittest.main()
