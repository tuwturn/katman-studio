"""Bounded, disposable numerical cache. Never loads pickle or references another job."""
import hashlib,json,os,pathlib,time
VERSION=3

def key_for(*values):
    return hashlib.sha256(json.dumps([VERSION,*values],sort_keys=True,separators=(',',':')).encode()).hexdigest()

def file_identity(path):
    path=pathlib.Path(path);stat=path.stat()
    return [path.name,stat.st_size,stat.st_mtime_ns]

class ProductionCache:
    def __init__(self,home,mode='balanced'):
        self.folder=pathlib.Path(home)/'cache-v3';self.limit=(256 if mode=='low' else 2048 if mode=='high' else 1024)*1024**2

    def load(self,key):
        import numpy as np,zipfile
        path=self.folder/(key+'.npz')
        try:
            if path.stat().st_size>64*1024**2:return None
            with zipfile.ZipFile(path) as archive:
                if sum(f.file_size for f in archive.infolist())>64*1024**2:return None
            with np.load(path,allow_pickle=False) as archive:
                result={name:archive[name] for name in archive.files}
            if not result or any(a.dtype.kind not in 'fiu' or not np.isfinite(a).all() for a in result.values()):return None
            os.utime(path,None);return result
        except (OSError,ValueError,EOFError,zipfile.BadZipFile):return None

    def save(self,key,**arrays):
        import numpy as np
        if sum(a.nbytes for a in arrays.values())>64*1024**2:return
        temporary=self.folder/(key+'.tmp')
        try:
            self.folder.mkdir(parents=True,exist_ok=True);path=self.folder/(key+'.npz');temporary=path.with_suffix('.tmp')
            with temporary.open('wb') as stream:np.savez_compressed(stream,**arrays)
            temporary.replace(path);self.prune()
        except OSError:
            try:temporary.unlink(missing_ok=True)
            except OSError:pass # A full/unwritable cache must not fail a valid production job.

    def prune(self):
        files=sorted(self.folder.glob('*.npz'),key=lambda p:p.stat().st_mtime,reverse=True);total=0
        for index,path in enumerate(files):
            total+=path.stat().st_size
            if total>self.limit or index>=256:path.unlink(missing_ok=True)

