"use client";

import { useEffect, useRef, useState } from "react";

const HERO_LINES = ["Welcome to", "the LAB."];

const vertexShader = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

const fragmentShader = `
precision highp float;

uniform sampler2D uText;
uniform vec2 uPointer;
uniform vec2 uResolution;
uniform float uTime;
uniform vec3 uInk;
uniform vec3 uAccent;
uniform float uThemeMix;

varying vec2 vUv;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);

  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));

  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float textMask(vec4 texel) {
  return max(max(texel.r, texel.g), max(texel.b, texel.a));
}

void main() {
  vec2 pixel = 1.0 / uResolution;
  vec2 pointer = mix(vec2(0.5, 0.32), uPointer, 0.9);
  vec2 toLight = pointer - vUv;
  float lightDistance = length(toLight);
  vec2 lightDir = normalize(toLight + vec2(0.0001));

  float grain = noise(vUv * vec2(52.0, 26.0) + uTime * 0.08);
  float wave = sin((vUv.x * 18.0) + (vUv.y * 11.0) + uTime * 0.7) * 0.5 + 0.5;
  vec2 warp = lightDir * (0.002 + grain * 0.006) + vec2(wave - 0.5, grain - 0.5) * 0.004;

  float alpha = textMask(texture2D(uText, vUv + warp));
  float alphaR = textMask(texture2D(uText, vUv + warp + lightDir * pixel * 1.8));
  float alphaG = textMask(texture2D(uText, vUv + warp));
  float alphaB = textMask(texture2D(uText, vUv + warp - lightDir * pixel * 2.4));

  float edge = 0.0;
  edge += textMask(texture2D(uText, vUv + vec2(pixel.x * 2.0, 0.0)));
  edge += textMask(texture2D(uText, vUv - vec2(pixel.x * 2.0, 0.0)));
  edge += textMask(texture2D(uText, vUv + vec2(0.0, pixel.y * 2.0)));
  edge += textMask(texture2D(uText, vUv - vec2(0.0, pixel.y * 2.0)));
  edge = clamp(edge - alpha * 3.25, 0.0, 1.0);

  float specular = pow(max(0.0, 1.0 - lightDistance), 3.2);
  specular += smoothstep(0.018, 0.0, abs(dot(vUv - pointer, normalize(vec2(0.75, -0.42))))) * 0.55;
  specular *= alpha;

  vec3 smokyDark = vec3(0.52, 0.62, 0.76);
  vec3 smokyLight = vec3(0.20, 0.23, 0.30);
  vec3 body = mix(smokyDark, smokyLight, uThemeMix);
  body = mix(body, uInk, 0.06 + grain * 0.08);

  vec3 dispersion = vec3(alphaR * 0.82, alphaG * 0.9, alphaB * 1.02);
  vec3 color = body * (0.74 + alpha * 0.58) + dispersion * vec3(0.16, 0.22, 0.34);
  color += edge * mix(vec3(0.82, 0.92, 1.0), vec3(0.08, 0.12, 0.18), uThemeMix);
  color += specular * mix(vec3(1.0), uAccent, 0.18);

  float finalAlpha = clamp(alpha * 0.98 + edge * 0.72 + specular * 0.45, 0.0, 1.0);
  gl_FragColor = vec4(color, finalAlpha);
}
`;

function cssColorToRgb(color: string): [number, number, number] {
  const trimmed = color.trim();
  const hex = trimmed.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (hex) {
    return [
      Number.parseInt(hex[1], 16) / 255,
      Number.parseInt(hex[2], 16) / 255,
      Number.parseInt(hex[3], 16) / 255,
    ];
  }

  const match = color.match(/rgba?\(([^)]+)\)/);
  if (!match) return [1, 1, 1];

  const channels = match[1].split(",").slice(0, 3).map((value) => Number.parseFloat(value.trim()) / 255);
  return [
    Number.isFinite(channels[0]) ? channels[0] : 1,
    Number.isFinite(channels[1]) ? channels[1] : 1,
    Number.isFinite(channels[2]) ? channels[2] : 1,
  ];
}

export default function HeroRefractionTitle() {
  const rootRef = useRef<HTMLHeadingElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    if (!root || !canvas) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let disposed = false;
    let frame = 0;
    let cleanup = () => {};

    async function init() {
      const THREE = await import("three");
      if (disposed || !rootRef.current || !canvasRef.current) return;

      await document.fonts.ready;
      if (disposed || !rootRef.current || !canvasRef.current) return;

      const rootNode = rootRef.current;
      const canvasNode = canvasRef.current;
      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        canvas: canvasNode,
        premultipliedAlpha: false,
        powerPreference: "high-performance",
      });
      renderer.setClearColor(0x000000, 0);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      const textureCanvas = document.createElement("canvas");
      const textureContext = textureCanvas.getContext("2d");
      if (!textureContext) return;

      const textTexture = new THREE.CanvasTexture(textureCanvas);
      textTexture.colorSpace = THREE.SRGBColorSpace;
      textTexture.minFilter = THREE.LinearFilter;
      textTexture.magFilter = THREE.LinearFilter;
      textTexture.premultiplyAlpha = false;

      const uniforms = {
        uText: { value: textTexture },
        uPointer: { value: new THREE.Vector2(0.5, 0.32) },
        uResolution: { value: new THREE.Vector2(1, 1) },
        uTime: { value: 0 },
        uInk: { value: new THREE.Vector3(1, 1, 1) },
        uAccent: { value: new THREE.Vector3(0.92, 1, 0.35) },
        uThemeMix: { value: 0 },
      };

      const material = new THREE.ShaderMaterial({
        uniforms,
        vertexShader,
        fragmentShader,
        transparent: true,
        depthWrite: false,
        depthTest: false,
      });

      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
      scene.add(mesh);

      const updateThemeUniforms = () => {
        const styles = getComputedStyle(document.documentElement);
        const ink = cssColorToRgb(styles.getPropertyValue("--ink"));
        const accent = cssColorToRgb(styles.getPropertyValue("--accent"));
        uniforms.uInk.value.set(ink[0], ink[1], ink[2]);
        uniforms.uAccent.value.set(accent[0], accent[1], accent[2]);
        uniforms.uThemeMix.value = document.documentElement.getAttribute("data-theme") === "light" ? 1 : 0;
      };

      const measureTextBox = () => {
        return rootNode.querySelector<HTMLElement>(".hero-title-fallback")?.getBoundingClientRect() ?? rootNode.getBoundingClientRect();
      };

      const drawTextTexture = () => {
        const rect = measureTextBox();
        if (rect.width <= 0 || rect.height <= 0) return;

        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const rootStyles = getComputedStyle(rootNode);
        const fontSize = Number.parseFloat(rootStyles.fontSize);
        const fontWeight = rootStyles.fontWeight || "700";
        const fontFamily = rootStyles.fontFamily || "Bricolage Grotesque, sans-serif";
        const letterSpacing = Number.parseFloat(rootStyles.letterSpacing);
        const lineHeight = Number.isFinite(fontSize) ? fontSize * 0.9 : rect.height / HERO_LINES.length;
        const firstBaseline = Number.isFinite(fontSize) ? fontSize * 0.78 : lineHeight * 0.78;

        textureCanvas.width = Math.max(1, Math.round(rect.width * dpr));
        textureCanvas.height = Math.max(1, Math.round(rect.height * dpr));
        textureContext.setTransform(dpr, 0, 0, dpr, 0, 0);
        textureContext.clearRect(0, 0, rect.width, rect.height);
        textureContext.fillStyle = "#ffffff";
        textureContext.textBaseline = "alphabetic";
        textureContext.font = `${fontWeight} ${fontSize}px ${fontFamily}`;

        HERO_LINES.forEach((text, index) => {
          const x = 0;
          const y = firstBaseline + lineHeight * index;

          if (Number.isFinite(letterSpacing) && letterSpacing !== 0) {
            let cursor = x;
            Array.from(text).forEach((char) => {
              textureContext.fillText(char, cursor, y);
              cursor += textureContext.measureText(char).width + letterSpacing;
            });
          } else {
            textureContext.fillText(text, x, y);
          }
        });

        textTexture.needsUpdate = true;
      };

      const resize = () => {
        const rect = measureTextBox();
        if (rect.width <= 0 || rect.height <= 0) return;
        renderer.setSize(rect.width, rect.height, false);
        uniforms.uResolution.value.set(rect.width, rect.height);
        drawTextTexture();
      };

      const onResize = () => {
        window.requestAnimationFrame(resize);
      };

      const onPointerMove = (event: PointerEvent) => {
        const rect = measureTextBox();
        const x = (event.clientX - rect.left) / rect.width;
        const y = 1 - (event.clientY - rect.top) / rect.height;
        uniforms.uPointer.value.set(Math.min(Math.max(x, 0), 1), Math.min(Math.max(y, 0), 1));
      };

      const onPointerLeave = () => {
        uniforms.uPointer.value.set(0.5, 0.32);
      };

      const themeObserver = new MutationObserver(() => {
        updateThemeUniforms();
        drawTextTexture();
      });

      themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
      window.addEventListener("resize", onResize);
      rootNode.addEventListener("pointermove", onPointerMove);
      rootNode.addEventListener("pointerleave", onPointerLeave);

      updateThemeUniforms();
      resize();
      setIsReady(true);

      const render = (time: number) => {
        if (disposed) return;
        uniforms.uTime.value = time * 0.001;
        renderer.render(scene, camera);
        frame = window.requestAnimationFrame(render);
      };
      frame = window.requestAnimationFrame(render);

      cleanup = () => {
        window.cancelAnimationFrame(frame);
        themeObserver.disconnect();
        window.removeEventListener("resize", onResize);
        rootNode.removeEventListener("pointermove", onPointerMove);
        rootNode.removeEventListener("pointerleave", onPointerLeave);
        scene.remove(mesh);
        mesh.geometry.dispose();
        material.dispose();
        textTexture.dispose();
        renderer.dispose();
      };
    }

    init().catch(() => {
      setIsReady(false);
    });

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return (
    <h1
      ref={rootRef}
      className="hero-title anim font-display text-[clamp(48px,8.5vw,130px)] font-bold leading-[0.9] tracking-[-0.04em] text-ink [font-variation-settings:'opsz'_96,'wdth'_100] d2"
      data-hero-title
      data-webgl-ready={isReady ? "true" : undefined}
    >
      <span className="hero-title-fallback">
        {HERO_LINES.map((line, index) => (
          <span
            key={line}
            className={`hero-title-line ${index === 0 ? "block" : "inline-block"}`}
            data-refraction-text={line}
            data-text={line}
          >
            {line}
          </span>
        ))}
      </span>
      <canvas ref={canvasRef} className="hero-refraction-canvas" aria-hidden="true" />
    </h1>
  );
}
