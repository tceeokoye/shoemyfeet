import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imagesDir = path.resolve('public/images');
const files = fs.readdirSync(imagesDir);

console.log('Optimizing images in', imagesDir);

for (const file of files) {
  if (file.endsWith('.jpg') || file.endsWith('.png')) {
    const filePath = path.join(imagesDir, file);
    const stat = fs.statSync(filePath);
    const originalSizeKb = Math.round(stat.size / 1024);

    // Read buffer
    const buffer = fs.readFileSync(filePath);

    // Create optimized webp
    const webpName = file.replace(/\.(jpg|png)$/, '.webp');
    const webpPath = path.join(imagesDir, webpName);

    await sharp(buffer)
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(webpPath);

    // Overwrite original jpg with optimized lower filesize version
    const tempJpg = path.join(imagesDir, `opt_${file}`);
    await sharp(buffer)
      .resize({ width: 1600, withoutEnlargement: true })
      .jpeg({ quality: 80, progressive: true })
      .toFile(tempJpg);

    fs.renameSync(tempJpg, filePath);

    const newJpgSizeKb = Math.round(fs.statSync(filePath).size / 1024);
    const webpSizeKb = Math.round(fs.statSync(webpPath).size / 1024);

    console.log(`[Optimized] ${file}: ${originalSizeKb}KB -> JPG: ${newJpgSizeKb}KB, WebP: ${webpSizeKb}KB`);
  }
}

console.log('Image optimization complete!');
