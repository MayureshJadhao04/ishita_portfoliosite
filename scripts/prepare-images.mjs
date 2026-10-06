// Turns original photos into web-ready project images.
// Usage:  npm run images -- ../Ishita-originals
// Expects: <originals>/<project>/<photo files>, e.g. hero, editorial, layout, lumea, desserts, about
// ORDER: name files 01-..., 02-..., 03-... The site shows them in that order; the first is the project's cover and hover preview.
// Output:  src/assets/images/<project>/<project>-<name>.jpg  (long edge 2000px, hero 2400px)
//          src/data/images.json (width, height, alt text; existing alt text is kept)
import { readdir, mkdir, stat, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const SRC = path.resolve(process.argv[2] ?? '../Ishita-originals');
const OUT = path.resolve('src/assets/images');
const DATA = path.resolve('src/data/images.json');
const MAX = { hero: 2400 };
const DEFAULT_MAX = 2000, QUALITY = 82, WARN_KB = 1024;
const OK = /\.(jpe?g|png|webp|tiff?|avif)$/i;
const slug = (s) => s.toLowerCase().replace(/\.[^.]+$/, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

if (!existsSync(SRC)) { console.error(`Originals folder not found: ${SRC}`); process.exit(1); }
let manifest = {};
try { manifest = JSON.parse(await readFile(DATA, 'utf8')); } catch {}

let made = 0, skipped = 0, big = 0;
const projects = (await readdir(SRC, { withFileTypes: true })).filter((d) => d.isDirectory()).map((d) => d.name).sort();
for (const project of projects) {
  const all = (await readdir(path.join(SRC, project))).sort();
  for (const f of all.filter((f) => /\.(heic|heif)$/i.test(f))) console.warn(`! ${project}/${f}: HEIC not supported, convert to JPEG first`);
  await mkdir(path.join(OUT, project), { recursive: true });
  const list = (manifest[project] ??= []);
  for (const f of all.filter((f) => OK.test(f))) {
    const base = slug(f);
    const name = `${base.startsWith(project + '-') ? base : project + '-' + base}.jpg`;
    const inp = path.join(SRC, project, f), out = path.join(OUT, project, name);
    let info;
    if (existsSync(out) && (await stat(out)).mtimeMs > (await stat(inp)).mtimeMs) {
      info = await sharp(out).metadata(); skipped++;
    } else {
      const max = MAX[project] ?? DEFAULT_MAX;
      const r = await sharp(inp, { failOn: 'none' }).rotate()
        .resize({ width: max, height: max, fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: QUALITY, mozjpeg: true }).toBuffer({ resolveWithObject: true });
      await writeFile(out, r.data); info = r.info; made++;
      const kb = Math.round(r.data.length / 1024);
      if (kb > WARN_KB) big++;
      console.log(`${kb > WARN_KB ? '!' : '+'} ${project}/${name}  ${info.width}x${info.height}  ${kb} KB`);
    }
    const prev = list.find((e) => e.file === name);
    const entry = { file: name, width: info.width, height: info.height, alt: prev?.alt ?? '' };
    prev ? Object.assign(prev, entry) : list.push(entry);
  }
  list.sort((a, b) => a.file.localeCompare(b.file, undefined, { numeric: true })); // order on the site = this order
}
await mkdir(path.dirname(DATA), { recursive: true });
await writeFile(DATA, JSON.stringify(manifest, null, 2) + '\n');
const noAlt = Object.values(manifest).flat().filter((e) => !e.alt).length;
console.log(`\nDone: ${made} processed, ${skipped} unchanged, ${big} over ${WARN_KB} KB, ${noAlt} missing alt text.`);
