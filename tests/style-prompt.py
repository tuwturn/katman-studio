import pathlib,sys,unittest
sys.path.insert(0,str(pathlib.Path(__file__).resolve().parents[1]/'local-ai'))
from prompt_policy import styled_prompt,negative_prompt,subject_caption,normalize_caption,figure_size

class StyleTests(unittest.TestCase):
    def test_singular_pose_and_accessories_survive_caption_constraints(self):
        caption=subject_caption("A person sitting down",True)
        self.assertEqual(caption,'one person sitting down')
        self.assertEqual(normalize_caption('The person who sits down.'),'The person sitting')
        self.assertEqual(subject_caption('A person holding two objects',True),'one person holding two objects')
        self.assertIn('one person sitting',styled_prompt('The person who sits down','realistic',True,True))
        self.assertIn('multiple people',negative_prompt('a person','realistic',True,True))
    def test_multi_subject_is_allowed_when_single_switch_is_off(self):
        self.assertEqual(subject_caption('Two seated figures',False),'Two seated figures')
        with self.assertRaisesRegex(ValueError,'Tek ana konu'):subject_caption('Two seated figures',True)
        self.assertNotIn('multiple people',negative_prompt('two figures','realistic',True,False))
    def test_styles_do_not_reintroduce_photographic_or_proportion_constraints(self):
        for style in ['caricature','cartoon','illustration','anime','sketch']:
            prompt=styled_prompt('a seated person',style,True,True)
            self.assertNotIn('photograph',prompt);self.assertNotIn('natural proportions',prompt)
            self.assertIn('photograph',negative_prompt('a person',style,True,True))
        self.assertIn('exaggerated',styled_prompt('a person','caricature',True))
        self.assertIn('full-color palette',styled_prompt('a person','caricature',True))
        self.assertIn('monochrome',negative_prompt('a person','caricature',True,True))
        self.assertIn('3D cartoon',styled_prompt('a person','cartoon',True))
        self.assertIn('full-color palette',styled_prompt('a person','cartoon',True))
        self.assertIn('watercolor painting',styled_prompt('a watercolor painting of a landscape','auto'))
        self.assertNotIn('photograph',styled_prompt('a watercolor painting of a landscape','auto'))
    def test_framing_keeps_seated_pose_and_explicit_close_up(self):
        self.assertEqual(figure_size('a person sitting',True),(1024,1024))
        self.assertEqual(figure_size('a standing person',True),(1024,1536))
        self.assertEqual(figure_size('a portrait bust',True),(1024,1024))
        self.assertNotIn('head and feet',styled_prompt('a portrait bust','clay',True))
        self.assertNotIn('cropped',negative_prompt('a portrait bust','clay',True))

if __name__=='__main__':unittest.main()
