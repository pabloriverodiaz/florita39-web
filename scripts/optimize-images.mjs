// Compresses the published JPEGs at deploy time: resizes to a web-sensible
// maximum and re-encodes with mozjpeg, keeping the result only when it is
// meaningfully smaller. Runs on Netlify builds (originals in git are never
// touched locally); use --force [--dir=path] to run it by hand.
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';
import { createRequire } from 'module';

const ROOT = new URL('..', import.meta.url).pathname;
const require = createRequire(join(ROOT, 'package.json'));
const sharp = require('sharp');

const FORCE = process.argv.includes('--force');
const dirArg = process.argv.find((a) => a.startsWith('--dir='));
const DIR = dirArg ? dirArg.slice(6) : join(ROOT, 'assets');
if (!process.env.NETLIFY && !FORCE) {
  console.log('optimize-images: skipped (not a Netlify build; pass --force to run locally)');
  process.exit(0);
}

const MAX_WIDTH = 1800;
const QUALITY = 78;
const KEEP_RATIO = 0.92; // only rewrite when at least 8% smaller

const jpgs = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.jpe?g$/i.test(name)) jpgs.push(p);
  }
})(DIR);

let before = 0, after = 0, rewritten = 0;
const pool = 8;
let idx = 0;
async function worker() {
  while (idx < jpgs.length) {
    const p = jpgs[idx++];
    const buf = readFileSync(p);
    before += buf.length;
    try {
      const out = await sharp(buf)
        .rotate() // bake EXIF orientation before it is stripped
        .resize({ width: MAX_WIDTH, height: MAX_WIDTH, fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: QUALITY, mozjpeg: true })
        .toBuffer();
      if (out.length < buf.length * KEEP_RATIO) {
        writeFileSync(p, out);
        after += out.length;
        rewritten++;
      } else {
        after += buf.length;
      }
    } catch (e) {
      console.warn('optimize-images: skipped ' + p + ' (' + e.message + ')');
      after += buf.length;
    }
  }
}
await Promise.all(Array.from({ length: pool }, worker));
const mb = (n) => (n / 1048576).toFixed(1) + ' MB';
console.log(`optimize-images: ${rewritten}/${jpgs.length} rewritten, ${mb(before)} → ${mb(after)}`);
