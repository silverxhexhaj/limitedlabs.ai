import Link from "next/link";

import { wrap } from "../site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border pt-14 pb-8">
      <div className={wrap}>
        <div className="mb-20 grid grid-cols-1 gap-8 min-[480px]:grid-cols-2 min-[880px]:grid-cols-4">
          <div>
            <svg className="mb-4 h-auto w-[60px] text-ink" viewBox="0 0 88 64" fill="none" aria-hidden="true">
              <path d="M8 8 V 56 H 38" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M50 8 V 56 H 80" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="38" cy="56" r="3.5" fill="currentColor" />
              <circle cx="80" cy="56" r="3.5" fill="currentColor" />
            </svg>
            <p className="max-w-[32ch] text-sm text-ink-muted">
              A digital systems studio. Brand, build, automate — under one logic.
            </p>
          </div>
          <div>
            <h5 className="mb-4 font-mono text-[10.5px] font-medium uppercase tracking-[0.1em] text-ink-faint">
              Studio
            </h5>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link href="/#services" className="text-sm text-ink transition-colors duration-200 hover:text-ink-muted">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#work" className="text-sm text-ink transition-colors duration-200 hover:text-ink-muted">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/#why" className="text-sm text-ink transition-colors duration-200 hover:text-ink-muted">
                  Impact
                </Link>
              </li>
              <li>
                <Link href="/#voices" className="text-sm text-ink transition-colors duration-200 hover:text-ink-muted">
                  Proof
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-sm text-ink transition-colors duration-200 hover:text-ink-muted">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-4 font-mono text-[10.5px] font-medium uppercase tracking-[0.1em] text-ink-faint">
              Contact
            </h5>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href="mailto:hello@limitedlabs.co"
                  className="text-sm text-ink transition-colors duration-200 hover:text-ink-muted"
                >
                  hello@limitedlabs.co
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-ink transition-colors duration-200 hover:text-ink-muted">
                  Tirana, Albania
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-4 font-mono text-[10.5px] font-medium uppercase tracking-[0.1em] text-ink-faint">
              Follow
            </h5>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href="#" className="text-sm text-ink transition-colors duration-200 hover:text-ink-muted">
                  Instagram ↗
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-ink transition-colors duration-200 hover:text-ink-muted">
                  LinkedIn ↗
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-ink-muted">
            © 2026 Limited Labs — v0.1
          </span>
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-ink-muted">
            Built in Tirana
          </span>
        </div>
      </div>
    </footer>
  );
}
