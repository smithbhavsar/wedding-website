import os
from PIL import Image,ImageOps

input_folder = "C:/Users/ADMIN/OneDrive/Desktop/Upwork/Project/public/assets/reception"
output_folder = "C:/Users/ADMIN/OneDrive/Desktop/Upwork/Project/public/assets/reception/thumbnails"

os.makedirs(output_folder, exist_ok=True)

for filename in os.listdir(input_folder):
    if filename.endswith((".JPG")):
        img_path = os.path.join(input_folder, filename)
        print(f"image path: {img_path}")    
        img = Image.open(img_path)
        img = ImageOps.exif_transpose(img)
        output_path = os.path.join(output_folder, filename)
        img.save(output_path, "JPEG", quality=80)  # Compress with 80% quality
        print(f"Compressed {filename} ✅")

print("All images processed! 🚀")
