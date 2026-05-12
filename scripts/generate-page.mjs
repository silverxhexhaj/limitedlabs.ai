import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const htmlPath = path.join(root, "index (2).html");

const html = fs.readFileSync(htmlPath, "utf8");
const match = html.match(/<header class="nav"[\s\S]*?<\/footer>/);
if (!match) {
  throw new Error("Could not extract header..footer fragment from index (2).html");
}
let jsx = match[0];

jsx = jsx.replace(/\bclass=/g, "className=");

const attrMap = [
  ["stroke-width", "strokeWidth"],
  ["stroke-linecap", "strokeLinecap"],
  ["stroke-linejoin", "strokeLinejoin"],
  ["stroke-dasharray", "strokeDasharray"],
  ["stroke-dashoffset", "strokeDashoffset"],
  ["fill-opacity", "fillOpacity"],
  ["fill-rule", "fillRule"],
  ["clip-rule", "clipRule"],
  ["stroke-opacity", "strokeOpacity"],
  ["text-anchor", "textAnchor"],
  ["dominant-baseline", "dominantBaseline"],
  ["font-family", "fontFamily"],
  ["font-weight", "fontWeight"],
  ["font-size", "fontSize"],
  ["letter-spacing", "letterSpacing"],
];

for (const [from, to] of attrMap) {
  jsx = jsx.replace(new RegExp(`\\b${from}=`, "g"), `${to}=`);
}

// HTML comments are invalid in TSX
jsx = jsx.replace(/<!--[\s\S]*?-->/g, "");

function styleAttrToJsx(styleStr) {
  const declarations = styleStr.split(";").map((s) => s.trim()).filter(Boolean);
  const parts = [];
  for (const decl of declarations) {
    const idx = decl.indexOf(":");
    if (idx === -1) continue;
    const rawKey = decl.slice(0, idx).trim();
    const rawVal = decl.slice(idx + 1).trim();
    const camel = rawKey.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    if (/^[\d.]+$/.test(rawVal)) {
      parts.push(`${camel}: ${rawVal}`);
    } else {
      parts.push(`${camel}: ${JSON.stringify(rawVal)}`);
    }
  }
  return `style={{ ${parts.join(", ")} }}`;
}

jsx = jsx.replace(/style="([^"]*)"/g, (_, inner) => styleAttrToJsx(inner));

const page = `import LandingInteractions from "./LandingInteractions";

export default function Home() {
  return (
    <>
${indent(jsx, 6)}
      <LandingInteractions />
    </>
  );
}
`;

function indent(block, spaces) {
  const pad = " ".repeat(spaces);
  return block
    .split("\n")
    .map((line) => (line.length ? pad + line : line))
    .join("\n");
}

fs.writeFileSync(path.join(root, "app", "page.tsx"), page, "utf8");
console.log("Wrote app/page.tsx");
