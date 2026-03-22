const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(filePath));
    } else { 
      results.push(filePath);
    }
  });
  return results;
}

const imgDir = path.join(__dirname, 'public/images');
const files = walk(imgDir);

(async () => {
  for (const file of files) {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      const ext = path.extname(file);
      const webpFile = file.replace(ext, '.webp');
      
      // Skip if already converted
      if (fs.existsSync(webpFile)) continue;

      try {
        await sharp(file)
          .webp({ quality: 90 }) // 90% quality is visually lossless but heavily compressed
          .toFile(webpFile);
        console.log(`Converted: ${path.basename(file)} -> ${path.basename(webpFile)}`);
      } catch (err) {
        console.error(`Failed to convert ${file}:`, err);
      }
    }
  }
  console.log("Optimization complete!");
})();
