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

const srcDir = path.join(__dirname, 'src');
const files = walk(srcDir);

files.forEach(file => {
  if (file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.css')) {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;
    
    // Replace .png, .jpg, .jpeg in strings that contain /images/
    const regex = /(\/images\/[^'"`]+)\.(png|jpg|jpeg)/gi;
    content = content.replace(regex, '$1.webp');

    if (content !== originalContent) {
      fs.writeFileSync(file, content);
      console.log(`Updated formats to .webp in ${path.basename(file)}`);
    }
  }
});
