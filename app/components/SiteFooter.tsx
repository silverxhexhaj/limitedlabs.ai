"use client";

import Image from "next/image";
import Link from "next/link";

import { useLanguage } from "../i18n/LanguageProvider";
import { wrap } from "../site";

export default function SiteFooter() {
  const { t } = useLanguage();

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
              {t.footer.tagline}
            </p>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-muted">
              {t.footer.location}
            </p>
          </div>
          <div>
            <h2 className="mb-4 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-muted">
              {t.footer.navigateHeading}
            </h2>
            <ul className="space-y-2.5 text-sm [&_a]:text-ink [&_a]:transition-colors [&_a:hover]:text-accent">
              <li><Link href="/#services">{t.header.nav.services}</Link></li>
              <li><Link href="/#work">{t.header.nav.work}</Link></li>
              <li><Link href="/#why">{t.header.nav.why}</Link></li>
              <li><Link href="/#proof">{t.header.nav.proof}</Link></li>
              <li><Link href="/#faq">{t.header.nav.faq}</Link></li>
              <li><Link href="/#audit">{t.footer.auditLink}</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-muted">
              {t.footer.contactHeading}
            </h2>
            <ul className="space-y-2.5 text-sm [&_a]:text-ink [&_a]:transition-colors [&_a:hover]:text-accent">
              <li>
                <a
                  href="mailto:hello@limitedlabs.co"
                  data-analytics-event="email_clicked"
                  data-analytics-placement="footer"
                >
                  hello@limitedlabs.co
                </a>
              </li>
              <li><Link href="/privacy">{t.footer.privacyLink}</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-start gap-3 border-t border-border pt-6 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-muted min-[480px]:flex-row min-[480px]:flex-wrap min-[480px]:items-center min-[480px]:justify-between">
          <span>{t.footer.copyright}</span>
          <span>{t.footer.accountability}</span>
        </div>
      </div>
    </footer>
  );
}
