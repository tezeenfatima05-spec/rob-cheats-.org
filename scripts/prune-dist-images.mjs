import fs from 'node:fs';
import path from 'node:path';

/** Drop source PNGs from dist — pages serve WebP variants only. */
const distRoots = [
  path.resolve('dist/images'),
  path.resolve('dist/client/images'),
];
let removed = 0;
let bytes = 0;

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }
    if (!/\.png$/i.test(entry.name)) continue;
    const stat = fs.statSync(full);
    if (stat.size < 80_000) continue;
    bytes += stat.size;
    fs.unlinkSync(full);
    removed += 1;
  }
}

for (const root of distRoots) walk(root);

console.log(
  `Pruned ${removed} source PNG(s) from dist/images (${(bytes / 1024 / 1024).toFixed(1)} MB).`,
);
