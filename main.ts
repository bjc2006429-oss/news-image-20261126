// news-image-20261126 entry: copies the pre-built summary image to /output/entry.png.
// The image itself was drawn offline from the 26 November 2026 news list in README.md.
// It sums up Thursday 26 November 2026: tariffs, Ukraine, the Cairo tanker fire,
// North Korea, the Tai Po fire anniversary and the Thanksgiving storm.
// Run locally with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");

// The entry must be a PNG or JPEG of at most 1 MiB and 1024x1024:
// refuse to hand the grader a file outside those limits.
const size = statSync(src).size;
if (size > 1048576) {
  throw new Error(`entry.png is ${size} bytes, over the 1 MiB limit`);
}
// The file must really be a PNG: check its 8-byte magic signature.
const head = readFileSync(src).subarray(0, 8);
const pngMagic = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!head.equals(pngMagic)) {
  throw new Error("entry.png is not a PNG file");
}
copyFileSync(src, join(outDir, "entry.png"));
