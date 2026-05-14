/**
 * Generates PWA / favicon PNGs from public/ll-logo-white.png
 * Run: node scripts/generate-pwa-icons.mjs
 */
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const sharp = require("sharp");

const root = path.join(__dirname, "..", "public");
const input = path.join(root, "ll-logo-white.png");
const black = { r: 0, g: 0, b: 0, alpha: 1 };

async function squareIcon(size, outName, innerRatio = 0.72) {
  const inner = Math.round(size * innerRatio);
  const logoBuf = await sharp(input)
    .resize(inner, inner, {
      fit: "inside",
      background: black,
    })
    .toBuffer();

  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: black,
    },
  })
    .composite([{ input: logoBuf, gravity: "center" }])
    .png()
    .toFile(path.join(root, outName));
}

async function maskableIcon(size, outName) {
  // Smaller mark + padding so rounded icon masks do not clip artwork
  const inner = Math.floor(size * 0.58);
  const logoBuf = await sharp(input)
    .resize(inner, inner, {
      fit: "inside",
      background: black,
    })
    .toBuffer();

  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: black,
    },
  })
    .composite([{ input: logoBuf, gravity: "center" }])
    .png()
    .toFile(path.join(root, outName));
}

async function main() {
  await squareIcon(192, "icon-192x192.png");
  await squareIcon(512, "icon-512x512.png");
  await maskableIcon(512, "icon-512-maskable.png");
  await squareIcon(180, "apple-touch-icon.png", 0.7);
  await squareIcon(32, "favicon-32x32.png", 0.82);
  console.log("Wrote PWA icons to public/");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
