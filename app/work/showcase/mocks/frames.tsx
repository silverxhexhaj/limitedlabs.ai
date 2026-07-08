import type { CSSProperties, ReactNode } from "react";

import type { WorkTheme } from "../types";

/* ------------------------------------------------------------------ */
/* Theme plumbing                                                      */
/* ------------------------------------------------------------------ */

/** Builds the `--w-*` custom-property map for a work's theme. */
export function themeVars(theme: WorkTheme): CSSProperties {
  return {
    "--w-bg": theme.bg,
    "--w-surface": theme.surface,
    "--w-ink": theme.ink,
    "--w-muted": theme.muted,
    "--w-line": theme.line,
    "--w-accent": theme.accent,
    "--w-accent-ink": theme.accentInk,
    "--w-accent2": theme.accent2 ?? theme.accent,
    "--w-font-display": theme.fontDisplay,
    "--w-font-body": theme.fontBody ?? theme.fontDisplay,
    "--w-font-mono": theme.fontMono ?? '"JetBrains Mono", ui-monospace, monospace',
    "--w-radius": theme.radius,
    "--w-radius-card": theme.radiusCard ?? theme.radius,
    "--w-h-transform": theme.headingTransform ?? "none",
    "--w-h-tracking": theme.headingTracking ?? "-0.02em",
    "--w-h-weight": String(theme.headingWeight ?? 700),
  } as CSSProperties;
}

/** Wraps children in the work's visual world (theme vars + base colors). */
export function WorkWorld({
  theme,
  className = "",
  children,
}: {
  theme: WorkTheme;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div style={themeVars(theme)} className={className}>
      {children}
    </div>
  );
}

/* Shared style snippets used by every mock screen. All type sizes are in
 * `cqw` so the whole screen scales proportionally with its container,
 * exactly like a case-study screenshot. */
export const W = {
  heading:
    "[font-family:var(--w-font-display)] [font-weight:var(--w-h-weight)] [letter-spacing:var(--w-h-tracking)] [text-transform:var(--w-h-transform)]",
  body: "[font-family:var(--w-font-body)]",
  mono: "[font-family:var(--w-font-mono)] uppercase tracking-[0.14em]",
  btn: "inline-flex items-center justify-center whitespace-nowrap bg-[var(--w-accent)] text-[var(--w-accent-ink)] rounded-[var(--w-radius)] font-semibold",
  btnGhost:
    "inline-flex items-center justify-center whitespace-nowrap border border-[var(--w-line)] text-[var(--w-ink)] rounded-[var(--w-radius)]",
  card: "bg-[var(--w-surface)] border border-[var(--w-line)] rounded-[var(--w-radius-card)]",
  chip: "inline-flex items-center whitespace-nowrap border border-[var(--w-line)] text-[var(--w-muted)] rounded-[var(--w-radius)]",
};

/* ------------------------------------------------------------------ */
/* Frames                                                              */
/* ------------------------------------------------------------------ */

type BrowserFrameProps = {
  url?: string;
  children: ReactNode;
};

/**
 * Desktop browser chrome. The content area is a CSS container, so screens
 * size their type in `cqw` and scale like an image.
 */
export function BrowserFrame({ url, children }: BrowserFrameProps) {
  return (
    <figure
      aria-hidden="true"
      className="pointer-events-none w-full select-none overflow-hidden rounded-[14px] border border-[var(--w-line)] bg-[var(--w-bg)] shadow-[0_40px_90px_-40px_rgba(0,0,0,0.55)]"
    >
      <div className="flex items-center gap-[1.2%] border-b border-[var(--w-line)] bg-[var(--w-surface)] px-[2%] py-[1.4%]">
        <span className="flex gap-[0.7cqw]">
          <i className="block size-[1cqw] min-h-[5px] min-w-[5px] rounded-full bg-[var(--w-line)]" />
          <i className="block size-[1cqw] min-h-[5px] min-w-[5px] rounded-full bg-[var(--w-line)]" />
          <i className="block size-[1cqw] min-h-[5px] min-w-[5px] rounded-full bg-[var(--w-line)]" />
        </span>
        {url ? (
          <span className="mx-auto flex min-w-[46%] items-center justify-center gap-[0.8cqw] rounded-[6px] border border-[var(--w-line)] bg-[var(--w-bg)] px-[2cqw] py-[0.55cqw] font-mono text-[1.15cqw] text-[var(--w-muted)]">
            <svg viewBox="0 0 10 12" className="h-[1.1cqw] w-auto opacity-70" fill="currentColor" aria-hidden>
              <path d="M2 5V3.5C2 1.8 3.3.5 5 .5S8 1.8 8 3.5V5h.5c.6 0 1 .4 1 1v4.5c0 .6-.4 1-1 1h-7c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1H2Zm1.4 0h3.2V3.5c0-.9-.7-1.6-1.6-1.6s-1.6.7-1.6 1.6V5Z" />
            </svg>
            {url}
          </span>
        ) : null}
        <span className="w-[6%]" />
      </div>
      <div className="[container-type:inline-size] bg-[var(--w-bg)] text-[var(--w-ink)]">{children}</div>
    </figure>
  );
}

/** Mobile device chrome, also a CSS container for `cqw` sizing. */
export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <figure
      aria-hidden="true"
      className="pointer-events-none mx-auto w-[min(300px,86%)] select-none overflow-hidden rounded-[9%_9%_9%_9%/4.5%_4.5%_4.5%_4.5%] border border-[var(--w-line)] bg-[var(--w-bg)] shadow-[0_40px_90px_-40px_rgba(0,0,0,0.6)]"
      style={{ borderRadius: "clamp(18px,10cqw,34px)" }}
    >
      <div className="flex items-center justify-between bg-[var(--w-bg)] px-[7%] pb-[1%] pt-[3.5%] text-[3.2cqw] font-semibold text-[var(--w-ink)]">
        <span className="font-mono text-[3cqw]">9:41</span>
        <span className="h-[4.5cqw] w-[22%] rounded-full bg-[var(--w-surface)] border border-[var(--w-line)]" />
        <span className="flex items-end gap-[0.6cqw]" aria-hidden>
          <i className="block h-[1.6cqw] w-[0.9cqw] rounded-[1px] bg-current opacity-60" />
          <i className="block h-[2.4cqw] w-[0.9cqw] rounded-[1px] bg-current opacity-75" />
          <i className="block h-[3.2cqw] w-[0.9cqw] rounded-[1px] bg-current" />
        </span>
      </div>
      <div className="[container-type:inline-size] bg-[var(--w-bg)] text-[var(--w-ink)]">{children}</div>
    </figure>
  );
}

/** Tiny decorative avatar dot used in mock headers. */
export function MockAvatar({ size = "2.6cqw" }: { size?: string }) {
  return (
    <span
      className="block shrink-0 rounded-full"
      style={{
        width: size,
        height: size,
        background: "linear-gradient(135deg, var(--w-accent), var(--w-accent2))",
      }}
    />
  );
}

/** Normalized SVG line/area chart from a list of points. */
export function MiniChart({
  points,
  type,
  height = "26cqw",
}: {
  points: number[];
  type: "line" | "area" | "bars";
  height?: string;
}) {
  if (type === "bars") {
    const max = Math.max(...points);
    return (
      <div className="flex w-full items-end gap-[1.2%]" style={{ height }}>
        {points.map((p, i) => (
          <span
            key={i}
            className="flex-1 rounded-t-[2px]"
            style={{
              height: `${(p / max) * 100}%`,
              background: i === points.length - 2 ? "var(--w-accent)" : "color-mix(in srgb, var(--w-accent) 28%, transparent)",
            }}
          />
        ))}
      </div>
    );
  }
  const max = Math.max(...points);
  const min = Math.min(...points);
  const span = max - min || 1;
  const coords = points.map((p, i) => {
    const x = (i / (points.length - 1)) * 100;
    const y = 38 - ((p - min) / span) * 32 - 3;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });
  return (
    <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full" style={{ height }} aria-hidden>
      {type === "area" ? (
        <polygon
          points={`0,40 ${coords.join(" ")} 100,40`}
          fill="color-mix(in srgb, var(--w-accent) 18%, transparent)"
        />
      ) : null}
      <polyline
        points={coords.join(" ")}
        fill="none"
        stroke="var(--w-accent)"
        strokeWidth="1.6"
        vectorEffect="non-scaling-stroke"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={coords[coords.length - 1]?.split(",")[0]}
        cy={coords[coords.length - 1]?.split(",")[1]}
        r="1.8"
        fill="var(--w-accent)"
      />
    </svg>
  );
}
