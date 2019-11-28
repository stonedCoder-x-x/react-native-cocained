import os 
import shutil

username = input('Enter username of this computer: ')
projPath = input('Drag and Drop project folder here and press enter: ')
projPath = projPath.replace(" ","")
desktopDir = '/Users/{}/Desktop'.format(username)
src = '/Users/{}/Desktop/React Project structure'.format(username)
os.chdir(desktopDir)

def renamePackageName():
    projName = os.path.basename(projPath)
    os.chdir(projPath)
    customProjName = input('Enter project name if you want to specify any custom name, or leave blank to use directory name instead: ')
    if len(customProjName) > 0:
        projName = customProjName
    
    renameCommand = 'react-native-rename "{}" -b com.{}'.format(projName,projName.lower())
    os.system(renameCommand)
    
def copyFolders(fromSrc,toPath,symlinks=False, ignore=None):
    for item in os.listdir(fromSrc):
        s = os.path.join(fromSrc,item)
        d = os.path.join(toPath,item)
        if os.path.isdir(s):
            shutil.copytree(s, d, symlinks, ignore)
        else:
            
            shutil.copy2(s,d)
    
    print('Project ready.Renaming android package name,  Change ios bundleid manually')
    renamePackageName()  
            
print('Copying...')

copyFolders(src,projPath)
        





