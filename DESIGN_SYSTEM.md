# Limited Labs — Design System

> Cinematic dark studio aesthetic inspired by **wibify.agency** (Awwwards winner).
> Stack: Next.js 16 / React 19 / **Tailwind v4** (CSS-first `@theme`), Lenis + GSAP motion.
> Source of truth: `app/globals.css` (tokens) + `app/HomeContent.tsx` (component patterns).

Paste this into Claude design and tweak. Everything below is the *actual* system in the codebase, not an idealized version.

---

## 1. Design principles

- **Cinematic, not corporate.** Deep cool near-black canvas, generous negative space, one electric cyan accent used sparingly.
- **Editorial type mix.** Grotesk display for weight, serif *italic* for a single accent word, mono for labels/eyebrows.
- **Restraint on color.** The palette is essentially two neutrals + one accent. Cyan never fills large areas — it's for CTAs, accent words, rules, and glows.
- **Motion earns attention.** Smooth scroll, word-reveal headings, magnetic buttons, custom cursor — all gated on `prefers-reduced-motion`.
- **Dark is primary, light is a supported alternate** (`html[data-theme="light"]`).

---

## 2. Color tokens

Defined as CSS variables in `:root` (dark, default) with a `[data-theme="light"]` override, then exposed to Tailwind via `@theme inline`.

### Dark (default)
| Token | Value | Tailwind util | Use |
|---|---|---|---|
| `--bg` | `#05090b` | `bg-page` | Page background (cool near-black) |
| `--bg-2` | `#0b1114` | `bg-surface` | Cards, raised surfaces |
| `--ink` | `#f2fafa` | `text-ink` | Primary text |
| `--ink-2` | `#93a1a1` | `text-ink-muted` | Secondary / body text |
| `--ink-3` | `#758280` | `text-ink-faint` | Tertiary (AA-tuned) |
| `--line` | `#161e22` | `border-border` | Hairline dividers |
| `--line-2` | `#223034` | `border-border-strong` | Card borders, chips |
| `--accent` | `#2de2e6` | `text-accent` / `bg-accent` | Electric cyan accent |
| `--accent-rgb` | `45, 226, 230` | — | For `rgba()` glows |
| `--cream` | `#f2fafa` | `text-cream` | Inverse-on-dark |

### Light (`html[data-theme="light"]`)
| Token | Value |
|---|---|
| `--bg` | `#f3f6f6` |
| `--bg-2` | `#e7eded` |
| `--ink` | `#0b0f10` |
| `--ink-2` | `#4f5a5b` |
| `--ink-3` | `#647070` |
| `--line` | `#d7dedd` |
| `--line-2` | `#c3cccb` |
| `--accent` | `#0b7e85` (darkened cyan for contrast) |
| `--accent-rgb` | `11, 126, 133` |

> **Accent rule:** on cyan backgrounds, text is `#05090b` (the bg token), never white.

---

## 3. Typography

Fonts are loaded via `<link>` in `app/layout.tsx` (not `next/font`):

```html
<!-- Switzer — display + body grotesk (Fontshare) -->
<link href="https://api.fontshare.com/v2/css?f[]=switzer@400,500,600,700&display=swap" rel="stylesheet">
<!-- Instrument Serif italic (accent words) + JetBrains Mono (labels) — Google -->
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### Families
| Token | Stack | Tailwind | Role |
|---|---|---|---|
| `--display` / `--sans` | `"Switzer", "Inter Tight", system-ui` | `font-display` / `font-sans` | Headlines + body |
| `--serif` / `--hand` | `"Instrument Serif", Georgia, serif` | `font-serif` / `font-hand` | Accent italic words only |
| `--mono` | `"JetBrains Mono", ui-monospace` | `font-mono` | Eyebrows, labels, chips |

### Type scale (fluid `clamp`, from `HomeContent.tsx`)
| Element | Classes |
|---|---|
| Hero H1 | `font-display text-[clamp(42px,8.5vw,118px)] font-bold leading-[0.91] tracking-[-0.05em]` |
| Section H2 (large) | `font-display text-[clamp(42px,7vw,96px)] font-bold leading-[0.94] tracking-[-0.045em]` |
| Section H2 (default) | `font-display text-[clamp(42px,6vw,84px)] font-bold leading-[0.95] tracking-[-0.04em]` |
| Card H3 | `font-display text-[clamp(32px,4vw,54px)] font-bold leading-[0.96] tracking-[-0.04em]` |
| Lead paragraph | `text-[clamp(17px,1.5vw,21px)] leading-relaxed text-ink-muted` |
| Body | `16px / 1.55` (base, set on `body`) |

**Rules:** display headings are always **bold, tight tracking (negative), tight leading (~0.91–0.96)**. Accent word inside a heading switches to `font-serif italic text-accent`.

### Eyebrow label (signature element)
Cyan leading rule + uppercase mono:
```
inline-flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase
tracking-[0.14em] text-ink-muted
before:h-px before:w-7 before:bg-accent before:content-['']
```

---

## 4. Layout

| Token | Value | Meaning |
|---|---|---|
| `--max` | `1320px` | Max content width |
| `--gutter` | `clamp(16px, 4vw, 56px)` | Page side padding |

- **Section vertical rhythm:** `py-[clamp(80px,10vw,144px)]` (default), hero `pt-[clamp(112px,16vw,220px)]`.
- **Section separators:** `border-y border-border` between alternating sections.
- `scroll-padding-top: 96px` (80px on mobile) for anchored nav.
- `overflow-x: hidden` + `overscroll-behavior-x: none` on `html`/`body`.

---

## 5. Components

### Buttons

**Primary (cyan):**
```
group inline-flex min-h-12 items-center justify-center gap-3 rounded-full
bg-accent px-7 py-3.5 text-sm font-semibold text-[#05090b]
transition-colors hover:bg-ink hover:text-page
focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent
```

**Secondary (outline):**
```
inline-flex min-h-12 items-center justify-center gap-3 rounded-full
border border-border-strong px-7 py-3.5 text-sm font-semibold text-ink
transition-colors hover:border-ink
```

**Mono pill (tertiary / card action):**
```
inline-flex min-h-12 items-center justify-center gap-3 rounded-full
border border-border-strong px-5 py-3 font-mono text-[11px] font-medium
uppercase tracking-[0.1em] transition-colors
hover:border-ink hover:bg-accent hover:text-[#05090b]
```

- Buttons are **fully rounded** (`rounded-full`), min height `48px` (`min-h-12`) for tap targets.
- Add `data-magnetic` for the magnetic hover effect; wrap arrow in `.magnetic-arrow` for the nudge-right on hover.

### Cards
```
rounded-[24px] border border-border bg-surface p-[clamp(20px,3vw,36px)]
transition-[transform,border-color,box-shadow] duration-300
hover:-translate-y-1.5 hover:border-border-strong
hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.65)]
```
- Radius `22–24px`. Lift + border-brighten + soft shadow on hover.
- Dashed variant: `border border-dashed border-border-strong` for secondary/callout blocks.

### Chips / tags
```
rounded-full border border-border-strong px-3 py-1.5 font-mono
text-[10px] uppercase tracking-[0.08em] text-ink-muted
```

### Nav
- Bar (not a floating pill). Scrolled state via `#nav.scrolled`: `--nav-scrolled-bg` + `backdrop-filter: blur(12px) saturate(140%)` + bottom hairline.
- CTA in nav uses the primary cyan button.

---

## 6. Signature effects (in `globals.css`)

| Class | What it does |
|---|---|
| `.glow-radial` | Blurred cyan radial glow (`blur(60px)`, accent-rgb gradient). Absolute-positioned behind hero/sections. |
| `.section-grain` / `.grain-overlay` | SVG `feTurbulence` fractal-noise film grain (5–6% opacity, `overlay`/`multiply` blend). |
| `.service-art` | 3D tilt card: perspective, pointer-tracked glare (`--glare-x/y`), shimmer sweep, corner ticks, float-soft idle animation. |
| `.magnetic` | Pointer-follow translate via `--mag-x/--mag-y` (set by JS `MagneticFX`). |
| `.cursor-ring` / `.cursor-dot` | Custom cursor (fine-pointer only), `mix-blend-mode: difference`, grows + shows mono label on interactive targets. |
| `::selection` | `background: var(--accent); color: var(--bg)`. |

### Motion stack
- **Lenis** smooth scroll + **GSAP ScrollTrigger** (`app/lib/gsap.ts`, `app/components/SmoothScroll.tsx`).
- Global managers in `app/components/MotionLayer.tsx` (mounted once, disabled on `/admin`): `ScrollReveal` (`[data-reveal]`, `[data-parallax]`), `CustomCursor`, `MagneticFX`.
- `AnimatedHeading` — word-by-word reveal with `accentWords`/`accentLast` for the serif-italic cyan accent.
- Page transitions: cyan curtain wipe in `app/template.tsx`.
- **Everything gated on `@media (prefers-reduced-motion)`** — see the large reduce block at the bottom of `globals.css`.

### Standard easing
`cubic-bezier(0.2, 0.6, 0.2, 1)` for movement; `cubic-bezier(0.4, 0.1, 0.2, 1)` for stroke draws. Durations `0.3–0.55s` for UI, longer for ambient loops.

---

## 7. Quick-start token block (drop-in)

```css
:root {
  color-scheme: dark;
  --bg: #05090b;  --bg-2: #111114;
  --ink: #f2fafa; --ink-2: #9a9a96; --ink-3: #7d7d77;
  --line: #1c1c20; --line-2: #2a2a2f;
  --accent: #2de2e6; --accent-rgb: 45, 226, 230;

  --display: "Switzer", "Inter Tight", system-ui, sans-serif;
  --sans: "Switzer", system-ui, sans-serif;
  --mono: "JetBrains Mono", ui-monospace, monospace;
  --serif: "Instrument Serif", Georgia, serif;

  --gutter: clamp(16px, 4vw, 56px);
  --max: 1320px;
}
```

---

## 8. Cheat sheet

- **Background:** `#05090b` · **Text:** `#f2fafa` · **Accent:** `#2de2e6`
- **Headings:** Switzer bold, `tracking-[-0.04em]`, leading ~0.95
- **Accent word:** Instrument Serif *italic*, cyan
- **Labels:** JetBrains Mono, uppercase, `tracking-[0.14em]`, 11px
- **Buttons:** `rounded-full`, `min-h-12`, cyan→ink hover
- **Cards:** `rounded-[24px]`, `bg-surface`, lift on hover
- **Accent usage:** CTAs, one accent word per heading, eyebrow rules, glows — never large fills
