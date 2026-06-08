import Image from "next/image";
import Link from "next/link";

import { wrap } from "../site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border pb-8 pt-14">
      <div className={wrap}>
        <div className="mb-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div>
            <Image
              src="/ll-logo-white.png"
              alt=""
              width={137}
              height={156}
              className="site-logo-img mb-5 h-auto w-[52px]"
            />
            <p className="max-w-[40ch] text-sm leading-relaxed text-ink-muted">
              An AI-powered systems agency helping business operators improve how they look, sell,
              build, and work.
            </p>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-faint">
              Tirana, Albania
            </p>
          </div>
          <div>
            <h2 className="mb-4 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-faint">
              Navigate
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/#services">Services</Link></li>
              <li><Link href="/#work">Work</Link></li>
              <li><Link href="/#why">Why Limited Labs</Link></li>
              <li><Link href="/#proof">Proof</Link></li>
              <li><Link href="/#faq">FAQ</Link></li>
              <li><Link href="/#audit">Free systems audit</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-faint">
              Contact
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:hello@limitedlabs.co"
                  data-analytics-event="email_clicked"
                  data-analytics-placement="footer"
                >
                  hello@limitedlabs.co
                </a>
              </li>
              <li><Link href="/privacy">Privacy notice</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-faint">
          <span>© 2026 Limited Labs</span>
          <span>AI-assisted. Human accountable.</span>
        </div>
      </div>
    </footer>
  );
}
