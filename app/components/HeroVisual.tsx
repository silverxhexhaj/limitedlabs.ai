/**
 * Cinematic, asset-free hero visual: a green volumetric glow + slowly orbiting
 * wireframe rings around a glowing core. Pure CSS animation (GPU-cheap), parallaxed
 * on scroll via [data-parallax]. Decorative + reduced-motion aware (see globals.css).
 */
export default function HeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute right-[-10%] top-1/2 hidden h-[78vmin] w-[78vmin] max-h-[820px] max-w-[820px] -translate-y-1/2 lg:block"
      data-parallax
      data-parallax-speed="0.22"
    >
      <div className="glow-radial absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2" />

      <svg viewBox="0 0 400 400" className="hero-orbit absolute inset-0 h-full w-full" fill="none">
        <defs>
          <radialGradient id="heroCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.95" />
            <stop offset="45%" stopColor="var(--accent)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Orbital rings (rotate as a group) */}
        <g className="hero-orbit-rings" stroke="var(--ink)" strokeOpacity="0.16" strokeWidth="1">
          <ellipse cx="200" cy="200" rx="180" ry="64" />
          <ellipse cx="200" cy="200" rx="140" ry="120" transform="rotate(28 200 200)" />
          <ellipse cx="200" cy="200" rx="168" ry="100" transform="rotate(-22 200 200)" />
        </g>

        {/* Orbiting nodes */}
        <g className="hero-orbit-rings">
          <circle cx="380" cy="200" r="3" fill="var(--accent)" />
          <circle cx="62" cy="248" r="2.5" fill="var(--ink)" fillOpacity="0.5" />
        </g>

        {/* Glowing core */}
        <circle cx="200" cy="200" r="120" fill="url(#heroCore)" />
        <g
          className="hero-orbit-core"
          stroke="var(--ink)"
          strokeOpacity="0.85"
          strokeWidth="1.5"
          strokeLinejoin="round"
          fill="none"
        >
          <path d="M200 158 L236 200 L200 242 L164 200 Z" />
        </g>
        <circle cx="200" cy="200" r="4" fill="var(--ink)" />
      </svg>
    </div>
  );
}
