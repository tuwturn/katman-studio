"""Installer routing tests; do not download packages or claim hardware inference."""
import pathlib,sys,tempfile,unittest
from unittest.mock import patch
sys.path.insert(0,str(pathlib.Path(__file__).resolve().parents[1]/'local-ai'))
from install_gpu import install

class InstallerTests(unittest.TestCase):
    def test_nvidia_uses_its_own_environment_and_official_cuda_index(self):
        with tempfile.TemporaryDirectory() as folder:
            home=pathlib.Path(folder);python=home/'venv-cuda/Scripts/python.exe';python.parent.mkdir(parents=True);python.touch()
            with patch('install_gpu.sys.platform','win32'),patch('install_gpu.run') as run:
                install(home,'cuda')
            commands=[call.args[0] for call in run.call_args_list]
            self.assertEqual(len(commands),3)
            self.assertIn('https://download.pytorch.org/whl/cu128',commands[0])
            self.assertIn('torch==2.9.1',commands[0])
            self.assertTrue(all(command[0]==str(python) for command in commands))
            self.assertEqual(commands[-1][-3:],['--backend','cuda','--probe'])

    def test_amd_uses_detected_architecture_extras_and_preserves_cpu_environment(self):
        with tempfile.TemporaryDirectory() as folder:
            home=pathlib.Path(folder);python=home/'venv-rocm/Scripts/python.exe';python.parent.mkdir(parents=True);python.touch()
            with patch('install_gpu.sys.platform','win32'),patch('install_gpu.run') as run,patch('install_gpu.subprocess.check_output',return_value='gfx1031\n'):
                install(home,'rocm')
            commands=[call.args[0] for call in run.call_args_list]
            self.assertIn('torch[device-gfx1031]==2.12.0+rocm10.1.0',commands[1])
            self.assertTrue(all(command[0]==str(python) for command in commands))

if __name__=='__main__':unittest.main()
