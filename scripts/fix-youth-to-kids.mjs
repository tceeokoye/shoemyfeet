import fs from 'fs';
import path from 'path';

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  content = content.replace(/youths/gi, "children");
  content = content.replace(/youth-shoemaking/gi, "kids-shoemaking");
  content = content.replace(/youth-empowerment/gi, "kids-empowerment");
  content = content.replace(/youth/gi, "kids");

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`[Updated] ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      walkDir(full);
    } else if (/\.(tsx?|jsx?|json|md)$/.test(file)) {
      processFile(full);
    }
  }
}

walkDir('src');
console.log('Finished thorough update of youth references!');
