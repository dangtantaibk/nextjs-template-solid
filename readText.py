import pytesseract
from PIL import Image

# Open the image using PIL (Python Imaging Library)
image = Image.open('1.jpg')

# Perform OCR on the image
text = pytesseract.image_to_string(image)

# Print the extracted text
print(text)
