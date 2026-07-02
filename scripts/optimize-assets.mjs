// One-off asset optimization: resize + convert screenshots/portrait to WebP,
// and render a branded 1200×630 OG image. Run with `node scripts/optimize-assets.mjs`.
import sharp from 'sharp';
import { unlink } from 'node:fs/promises';

const shots = ['ogs-pizza', 'autumn-house', 'stock-prediction'];

async function run() {
  // Project screenshots (1920×1080) → 1600px-wide WebP (retina-crisp for a ~600px slot)
  for (const name of shots) {
    const src = `public/projects/${name}.png`;
    const out = `public/projects/${name}.webp`;
    await sharp(src).resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 80 }).toFile(out);
    await unlink(src);
    console.log('shot →', out);
  }

  // Portrait (1187×1600) → 800px-wide WebP (displayed ~384px, retina)
  await sharp('public/profile.jpg')
    .resize({ width: 800, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile('public/profile.webp');
  await unlink('public/profile.jpg');
  console.log('portrait → public/profile.webp');

  // Branded OG image (1200×630) for social share previews
  const og = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="72%" cy="26%" r="60%">
      <stop offset="0%" stop-color="#2563EB" stop-opacity="0.45"/>
      <stop offset="55%" stop-color="#2563EB" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="#2563EB" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#0A0A0B"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect x="80" y="86" width="76" height="76" rx="18" fill="#2563EB"/>
  <text x="118" y="138" font-family="'Segoe UI',Arial,sans-serif" font-size="38" font-weight="700" fill="#ffffff" text-anchor="middle">TS</text>
  <text x="80" y="300" font-family="'Segoe UI',Arial,sans-serif" font-size="82" font-weight="700" fill="#F5F5F7">Tarun Sherwal</text>
  <text x="80" y="372" font-family="'Segoe UI',Arial,sans-serif" font-size="40" font-weight="600" fill="#4D8BFF">Full Stack Developer</text>
  <text x="80" y="452" font-family="'Segoe UI',Arial,sans-serif" font-size="30" font-weight="400" fill="#A1A1AA">Fast, modern websites &amp; web apps that grow your business.</text>
  <text x="80" y="560" font-family="'JetBrains Mono',monospace" font-size="24" font-weight="400" fill="#6B6B73">Greater Noida, India  ·  Available worldwide</text>
</svg>`;
  await sharp(Buffer.from(og)).png().toFile('public/og-image.png');
  console.log('og → public/og-image.png');

  // Remove junk assets that would otherwise ship in dist/
  for (const junk of ['public/icons.svg', 'public/projects/desktop.ini']) {
    try {
      await unlink(junk);
      console.log('removed', junk);
    } catch {
      /* already gone */
    }
  }
}

run();
