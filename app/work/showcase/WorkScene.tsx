import Image from "next/image";
import type { CSSProperties } from "react";

import { themeVars, W } from "./mocks/frames";
import type { ScenePattern, ShowcaseWork } from "./types";

/**
 * The work's "brand poster": a themed panel with a generative CSS pattern
 * and the wordmark set in the work's own type. Used as the index card art
 * and the detail-page hero.
 */

function patternLayers(pattern: ScenePattern): CSSProperties {
  switch (pattern) {
    case "mesh":
      return {
        backgroundImage: `
          radial-gradient(52% 62% at 18% 22%, color-mix(in srgb, var(--w-accent) 52%, transparent), transparent 70%),
          radial-gradient(56% 66% at 84% 30%, color-mix(in srgb, var(--w-accent2) 42%, transparent), transparent 72%),
          radial-gradient(70% 70% at 55% 92%, color-mix(in srgb, var(--w-accent) 26%, transparent), transparent 75%)`,
      };
    case "grid":
      return {
        backgroundImage: `
          linear-gradient(color-mix(in srgb, var(--w-ink) 14%, transparent) 1px, transparent 1px),
          linear-gradient(90deg, color-mix(in srgb, var(--w-ink) 14%, transparent) 1px, transparent 1px),
          radial-gradient(60% 60% at 50% 40%, color-mix(in srgb, var(--w-accent) 22%, transparent), transparent 72%)`,
        backgroundSize: "9% 9%, 9% 9%, 100% 100%",
      };
    case "rings":
      return {
        backgroundImage: `repeating-radial-gradient(circle at 72% 34%,
          transparent 0, transparent 5.5cqw,
          color-mix(in srgb, var(--w-accent) 34%, transparent) 5.5cqw,
          color-mix(in srgb, var(--w-accent) 34%, transparent) calc(5.5cqw + 1.5px),
          transparent calc(5.5cqw + 1.5px))`,
      };
    case "stripes":
      return {
        backgroundImage: `repeating-linear-gradient(-32deg,
          transparent 0, transparent 4cqw,
          color-mix(in srgb, var(--w-accent) 22%, transparent) 4cqw,
          color-mix(in srgb, var(--w-accent) 22%, transparent) 8cqw)`,
      };
    case "halftone":
      return {
        backgroundImage: `
          radial-gradient(color-mix(in srgb, var(--w-accent) 55%, transparent) 1.2px, transparent 1.4px),
          radial-gradient(color-mix(in srgb, var(--w-ink) 22%, transparent) 1px, transparent 1.2px),
          radial-gradient(80% 90% at 80% 15%, color-mix(in srgb, var(--w-accent) 20%, transparent), transparent 70%)`,
        backgroundSize: "3.2% 5.5%, 5.8% 9.5%, 100% 100%",
        backgroundPosition: "0 0, 1.4% 2.4%, 0 0",
      };
    case "aurora":
      return {
        backgroundImage: `
          radial-gradient(42% 70% at 24% 18%, color-mix(in srgb, var(--w-accent) 58%, transparent), transparent 68%),
          radial-gradient(48% 80% at 62% 8%, color-mix(in srgb, var(--w-accent2) 46%, transparent), transparent 70%),
          radial-gradient(50% 68% at 88% 42%, color-mix(in srgb, var(--w-accent) 30%, transparent), transparent 72%)`,
        filter: "saturate(1.15)",
      };
    case "scan":
      return {
        backgroundImage: `
          repeating-linear-gradient(0deg,
            transparent 0, transparent 5px,
            color-mix(in srgb, var(--w-accent) 16%, transparent) 5px,
            color-mix(in srgb, var(--w-accent) 16%, transparent) 6px),
          radial-gradient(70% 90% at 50% 110%, color-mix(in srgb, var(--w-accent) 38%, transparent), transparent 70%)`,
      };
    case "orbit":
      return {
        backgroundImage: `
          radial-gradient(closest-side at 50% 50%, transparent 62%, color-mix(in srgb, var(--w-accent) 45%, transparent) 62.5%, transparent 63.5%),
          radial-gradient(closest-side at 50% 50%, transparent 42%, color-mix(in srgb, var(--w-ink) 30%, transparent) 42.5%, transparent 43.5%),
          radial-gradient(closest-side at 50% 50%, transparent 82%, color-mix(in srgb, var(--w-ink) 22%, transparent) 82.5%, transparent 83.5%),
          radial-gradient(3cqw 3cqw at 78% 28%, var(--w-accent) 40%, transparent 42%)`,
      };
    case "contour":
      return {
        backgroundImage: `
          repeating-radial-gradient(80% 120% at 110% -10%,
            transparent 0, transparent 4.5cqw,
            color-mix(in srgb, var(--w-accent) 26%, transparent) 4.5cqw,
            color-mix(in srgb, var(--w-accent) 26%, transparent) calc(4.5cqw + 1.5px)),
          repeating-radial-gradient(90% 130% at -15% 115%,
            transparent 0, transparent 6cqw,
            color-mix(in srgb, var(--w-ink) 16%, transparent) 6cqw,
            color-mix(in srgb, var(--w-ink) 16%, transparent) calc(6cqw + 1.5px))`,
      };
    case "type":
      return {};
  }
}

type WorkSceneProps = {
  work: ShowcaseWork;
  /** "card" fills its parent (index tiles); "hero" is the detail banner. */
  variant: "card" | "hero";
  className?: string;
  withVars?: boolean;
  /**
   * When true and the work has a `heroImage`, the generated photo is
   * composited behind the pattern + wordmark. Index cards leave this off so
   * they render the pure CSS scene. Layout is identical either way.
   */
  showImage?: boolean;
  priority?: boolean;
  /** Responsive `sizes` for the hero photo; defaults per variant if omitted. */
  sizes?: string;
};

const DEFAULT_SIZES: Record<WorkSceneProps["variant"], string> = {
  hero: "(max-width: 1024px) 100vw, 1320px",
  card: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
};

export default function WorkScene({
  work,
  variant,
  className = "",
  withVars = true,
  showImage = false,
  priority = false,
  sizes,
}: WorkSceneProps) {
  const { scene, theme } = work;
  const isHero = variant === "hero";
  const useImage = showImage && Boolean(work.heroImage);

  return (
    <div
      aria-hidden="true"
      style={{
        ...(withVars ? themeVars(theme) : {}),
      }}
      className={`relative h-full w-full select-none overflow-hidden bg-[var(--w-bg)] text-[var(--w-ink)] [container-type:inline-size] ${className}`}
    >
      {/* generated hero photo (detail page only) */}
      {useImage && work.heroImage ? (
        <Image
          src={work.heroImage.src}
          alt=""
          fill
          priority={priority}
          sizes={sizes ?? DEFAULT_SIZES[variant]}
          className="pointer-events-none object-cover"
        />
      ) : null}

      {/* pattern — full strength on CSS scenes, reduced over a photo */}
      {scene.pattern === "type" ? (
        <div
          className={`${W.heading} pointer-events-none absolute -inset-x-[6%] top-[-4%] leading-[0.92] ${useImage ? "opacity-[0.06] mix-blend-overlay" : "opacity-[0.09]"}`}
          style={{ fontSize: "16cqw", color: "var(--w-ink)" }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <p key={i} className="whitespace-nowrap" style={{ marginLeft: `${(i % 3) * -8}%` }}>
              {`${work.name} `.repeat(4)}
            </p>
          ))}
        </div>
      ) : (
        <div
          className={`pointer-events-none absolute inset-0 ${useImage ? "opacity-40 mix-blend-soft-light" : ""}`}
          style={patternLayers(scene.pattern)}
        />
      )}

      {/* legibility scrim: soft vignette on CSS scenes, bottom-heavy over a photo */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: useImage
            ? "linear-gradient(180deg, color-mix(in srgb, var(--w-bg) 30%, transparent) 0%, transparent 34%, color-mix(in srgb, var(--w-bg) 55%, transparent) 74%, var(--w-bg) 100%)"
            : "radial-gradient(90% 80% at 50% 62%, transparent 30%, color-mix(in srgb, var(--w-bg) 66%, transparent) 100%)",
        }}
      />

      {/* corner meta */}
      <span className={`${W.mono} absolute left-[5%] top-[5.5%] text-[2.2cqw] text-[var(--w-muted)]`}>
        {work.category}
      </span>
      <span className={`${W.mono} absolute right-[5%] top-[5.5%] text-[2.2cqw] text-[var(--w-muted)]`}>
        {work.year}
      </span>

      {/* wordmark */}
      <div className={`absolute inset-x-[5%] ${isHero ? "bottom-[9%]" : "bottom-[7%]"}`}>
        <p className={`${W.heading} leading-[0.95]`} style={{ fontSize: isHero ? "9.5cqw" : "11cqw" }}>
          {scene.glyph ? (
            <span className="mr-[0.18em] inline-block align-baseline text-[0.72em] text-[var(--w-accent)]">{scene.glyph}</span>
          ) : null}
          {work.name}
        </p>
        {scene.motto ? (
          <p className={`${W.mono} mt-[2.2cqw] text-[2.3cqw] text-[var(--w-muted)]`}>{scene.motto}</p>
        ) : null}
        <span className="mt-[3cqw] block h-[0.5cqw] w-[16%] bg-[var(--w-accent)]" />
      </div>
    </div>
  );
}
