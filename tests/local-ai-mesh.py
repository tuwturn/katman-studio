"""Run with the installed AI environment's Python; no inference or network required."""
import pathlib,sys,unittest
import numpy as np
import trimesh
sys.path.insert(0,str(pathlib.Path(__file__).resolve().parents[1] / 'local-ai'))
from generate_v2 import clean_mesh

class OutputMeshTests(unittest.TestCase):
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
