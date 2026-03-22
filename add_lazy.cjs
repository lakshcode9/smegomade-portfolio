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
  if (file.endsWith('.jsx')) {
    let content = fs.readFileSync(file, 'utf8');
    // Skip Above the fold images
    if (file.includes('Hero.jsx') || file.includes('Footer.jsx')) {
      return; 
    }
    
    if (content.includes('<img ') && !content.includes('loading="lazy"')) {
      content = content.replace(/<img /g, '<img loading="lazy" ');
      fs.writeFileSync(file, content);
      console.log(`Updated ${path.basename(file)}`);
    }
  }
});
