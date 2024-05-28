from PIL import Image
import os

PATH = "src/assets/pictures/skills"



for img_path in os.listdir(PATH):
    if(img_path.endswith(".png")):
        img = Image.open(os.path.join(PATH,img_path))
    
        ratio = min(200 / img.width, 200 / img.height)
        new_size = (int(img.width * ratio), int(img.height * ratio))
    
        new_img = img.resize(new_size, Image.Resampling.LANCZOS)
    
        new_img.save(os.path.join(PATH,img_path))
        print(f"Image {img_path} redimensionnée à {new_size}.")
    
    
   
   