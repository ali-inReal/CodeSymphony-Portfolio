/**
 * One-off asset pipeline:
 * - Converts team/project/hero images in src/assets to appropriately sized WebP
 * - Generates public/og-image.png (1200x630) and public/apple-touch-icon.png (180x180)
 *
 * Run with: node scripts/optimize-images.mjs
 */
import sharp from 'sharp';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const assetsDir = path.join(root, 'src', 'assets');
const publicDir = path.join(root, 'public');

const kb = (file) => `${Math.round(fs.statSync(file).size / 1024)} KB`;
const webpName = (file) => file.replace(/\.(jpe?g|png)$/i, '.webp');

const teamPhotos = ['mali.jpg', 'touseef.jpg', 'hassan.jpg', 'mohib.jpg', 'final.jpg', 'jerry.jpg', 'profile.jpg', 'toheed.png'];
const projectImages = ['lightning-os-logo.png', 'orderswala.jpeg', 'leadaspect.png', 'linky.png'];

for (const file of teamPhotos) {
  const src = path.join(assetsDir, file);
  const out = path.join(assetsDir, webpName(file));
  await sharp(src).resize(320, 320, { fit: 'cover' }).webp({ quality: 80 }).toFile(out);
  console.log(`${file} (${kb(src)}) -> ${path.basename(out)} (${kb(out)})`);
}

for (const file of projectImages) {
  const src = path.join(assetsDir, file);
  const out = path.join(assetsDir, webpName(file));
  await sharp(src).resize({ width: 1000, withoutEnlargement: true }).webp({ quality: 80 }).toFile(out);
  console.log(`${file} (${kb(src)}) -> ${path.basename(out)} (${kb(out)})`);
}

{
  const src = path.join(assetsDir, 'orchestrated-core.png');
  const out = path.join(assetsDir, 'orchestrated-core.webp');
  await sharp(src).resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 70 }).toFile(out);
  console.log(`orchestrated-core.png (${kb(src)}) -> orchestrated-core.webp (${kb(out)})`);
}

// Apple touch icon from the brand favicon
{
  const out = path.join(publicDir, 'apple-touch-icon.png');
  await sharp(path.join(publicDir, 'favicon.svg'), { density: 300 })
    .resize(180, 180)
    .png()
    .toFile(out);
  console.log(`apple-touch-icon.png (${kb(out)})`);
}

// Social share card
{
  const ogSvg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0a0a0b"/>
  <defs>
    <radialGradient id="glow" cx="50%" cy="0%" r="90%">
      <stop offset="0%" stop-color="#00E5FF" stop-opacity="0.14"/>
      <stop offset="100%" stop-color="#00E5FF" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect x="565" y="170" width="14" height="40" rx="7" fill="#00E5FF"/>
  <rect x="593" y="150" width="14" height="80" rx="7" fill="#00E5FF"/>
  <rect x="621" y="170" width="14" height="40" rx="7" fill="#00E5FF"/>
  <text x="600" y="345" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="76" font-weight="700" fill="#ffffff">CodeSymphony</text>
  <text x="600" y="410" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="30" fill="#9ca3af">Turning complex code into beautiful solutions</text>
  <text x="600" y="490" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="20" letter-spacing="8" fill="#00E5FF">SOFTWARE DEVELOPMENT AGENCY</text>
</svg>`;
  const out = path.join(publicDir, 'og-image.png');
  await sharp(Buffer.from(ogSvg)).png().toFile(out);
  console.log(`og-image.png (${kb(out)})`);
}

console.log('Done.');
