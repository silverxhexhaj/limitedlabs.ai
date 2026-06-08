"use client";

import Link from "next/link";

import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { useLanguage } from "../i18n/LanguageProvider";
import LandingInteractions from "../LandingInteractions";
import { wrap } from "../site";

export default function PrivacyContent() {
  const { t } = useLanguage();
  const copy = t.privacy;

  return (
    <>
      <SiteHeader />
      <main className="pb-24 pt-36">
        <article className={`${wrap} max-w-[920px]`}>
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint">
            {copy.eyebrow}
          </p>
          <h1 className="mt-5 font-display text-[clamp(46px,7vw,92px)] font-bold leading-[0.94] tracking-[-0.045em]">
            {copy.heading}
          </h1>
          <div className="mt-12 space-y-10 text-[15px] leading-relaxed text-ink-muted">
            {copy.sections.map((section, index) => (
              <section key={section.heading}>
                <h2 className="font-display text-2xl font-bold text-ink">{section.heading}</h2>
                <p className="mt-3">
                  {section.body}
                  {index === 3 ? (
                    <>
                      <a className="text-ink underline underline-offset-4" href="mailto:hello@limitedlabs.co">
                        hello@limitedlabs.co
                      </a>
                      {copy.retentionEmailSuffix}
                    </>
                  ) : null}
                </p>
              </section>
            ))}
          </div>
          <Link
            href="/#audit"
            className="mt-12 inline-flex min-h-12 items-center rounded-full border border-border-strong px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink"
          >
            {copy.returnLink}
          </Link>
        </article>
      </main>
      <SiteFooter />
      <LandingInteractions />
    </>
  );
}
