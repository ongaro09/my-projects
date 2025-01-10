#!/usr/bin/env node
/**
 * ocr.js
 * 
 * A script to perform OCR on an image using Tesseract.js.
 * Accepts arguments for the image path and language code.
 * 
 * Usage:
 *   node ocr.js --image /path/to/image.jpeg --lang eng
 * 
 * Environment Variables:
 *   OCR_IMAGE   Path to image if not provided via --image
 *   OCR_LANG    Language code if not provided via --lang
 */

import Tesseract from "tesseract.js";

const args = process.argv.slice(2);

function getArgValue(argName, defaultValue) {
  const index = args.indexOf(`--${argName}`);
  if (index !== -1 && args[index + 1]) {
    return args[index + 1];
  }
  return process.env[`OCR_${argName.toUpperCase()}`] || defaultValue;
}

const imagePath = getArgValue("image");
const ocrLang = getArgValue("lang", "eng");

if (!imagePath) {
  console.error("Usage: node ocr.js --image /path/to/image.jpeg [--lang eng]");
  console.error("Or set environment variables: OCR_IMAGE, OCR_LANG");
  process.exit(1);
}

/**
 * Performs OCR on a given image using Tesseract.js
 * @param {string} filePath - The path to the image file
 * @param {string} language - The language code (e.g., 'eng', 'spa', etc.)
 * @returns {Promise<string>} The recognized text
 */
async function ocrImage(filePath, language) {
  console.log(`Starting OCR on: ${filePath}, Language: ${language}`);
  try {
        const { data: { text } } = await Tesseract.recognize(filePath, language, {
      logger: m => {
        if (m.status === "recognizing text") {
          console.log(`Progress: ${(m.progress * 100).toFixed(2)}%`);
        } else {
          console.log(`Status: ${m.status}`);
        }
      }
    });
    return text;
  } catch (error) {
    throw new Error(`Failed to process OCR: ${error.message}`);
  }
}

(async () => {
  try {
    const recognizedText = await ocrImage(imagePath, ocrLang);
    console.log("Recognized text:\n", recognizedText);
  } catch (err) {
    console.error("Error recognizing text:", err);
    process.exit(1);
  }
})();
