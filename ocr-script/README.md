# Image to text script

This script converts images to text using Tesseract.js. Meant for my local usage because web apps are too slow.

## Resources
- https://medium.com/@abhishekchamoli007/convert-images-to-text-in-node-js-with-tesseract-js-a-step-by-step-guide-b4fa5f5ee809
- https://github.com/naptha/tesseract.js
- https://github.com/naptha/tesseract.js/blob/master/docs/api.md

## Installation

```bash
git clone https://github.com/ongaro/my-ocr-script.git
cd my-ocr-script
npm install

## Usage

node ocr.js --image /path/to/image.jpg [--lang eng]
