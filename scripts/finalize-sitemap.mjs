import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const distRoot = path.join(root, 'dist');

/** Astro static → `dist/`; @astrojs/cloudflare adapter → `dist/client/`. */
function resolvePublishDir() {
  const clientDir = path.join(distRoot, 'client');
  const clientSitemap = path.join(clientDir, 'sitemap-0.xml');
  const rootSitemap = path.join(distRoot, 'sitemap-0.xml');

  if (fs.existsSync(clientSitemap)) return clientDir;
  if (fs.existsSync(rootSitemap)) return distRoot;

  const clientIndex = path.join(clientDir, 'sitemap-index.xml');
  const rootIndex = path.join(distRoot, 'sitemap-index.xml');
  if (fs.existsSync(clientIndex)) return clientDir;
  if (fs.existsSync(rootIndex)) return distRoot;

  return null;
}

const publishDir = resolvePublishDir();
if (!publishDir) {
  console.error('finalize-sitemap: no dist/ or dist/client/ sitemap-0.xml — run astro build first.');
  process.exit(1);
}

const source = path.join(publishDir, 'sitemap-0.xml');
if (!fs.existsSync(source)) {
  console.error(`finalize-sitemap: ${path.relative(root, source)} not found.`);
  process.exit(1);
}

const raw = fs.readFileSync(source, 'utf8');
const urlCount = (raw.match(/<url>/g) ?? []).length;

if (urlCount === 0) {
  console.error('finalize-sitemap: sitemap-0.xml contains no URLs.');
  process.exit(1);
}

if (/workers\.dev/i.test(raw)) {
  console.error('finalize-sitemap: workers.dev URL found in sitemap — aborting.');
  process.exit(1);
}

if (!raw.includes('https://robcheats.org')) {
  console.error('finalize-sitemap: missing robcheats.org URLs in sitemap.');
  process.exit(1);
}

function formatUrlset(xml) {
  return xml
    .replace(/^<\?xml[^?]*\?>/, '<?xml version="1.0" encoding="UTF-8"?>\n')
    .replace(/<urlset([^>]*)>/, '<urlset$1>\n')
    .replace(/<\/urlset>/, '\n</urlset>\n')
    .replace(/<url>/g, '  <url>\n')
    .replace(/<\/url>/g, '\n  </url>\n')
    .replace(/<loc>/g, '    <loc>')
    .replace(/<\/loc>/g, '</loc>\n')
    .replace(/<lastmod>/g, '    <lastmod>')
    .replace(/<\/lastmod>/g, '</lastmod>\n')
    .replace(/<changefreq>/g, '    <changefreq>')
    .replace(/<\/changefreq>/g, '</changefreq>\n')
    .replace(/<priority>/g, '    <priority>')
    .replace(/<\/priority>/g, '</priority>\n');
}

const formatted = formatUrlset(raw);
const targets = new Set([publishDir]);
if (publishDir !== distRoot) targets.add(distRoot);

for (const dir of targets) {
  fs.writeFileSync(path.join(dir, 'sitemap.xml'), formatted, 'utf8');
  fs.writeFileSync(path.join(dir, 'sitemap-0.xml'), formatted, 'utf8');

  const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://robcheats.org/sitemap.xml</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
  </sitemap>
</sitemapindex>
`;
  fs.writeFileSync(path.join(dir, 'sitemap-index.xml'), indexXml, 'utf8');
}

console.log(`Sitemap finalized: ${urlCount} URLs → ${path.relative(root, publishDir)}/sitemap.xml`);
