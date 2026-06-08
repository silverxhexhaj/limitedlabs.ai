import type { Metadata } from "next";
import Link from "next/link";

import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import LandingInteractions from "../LandingInteractions";
import { wrap } from "../site";

export const metadata: Metadata = {
  title: "Privacy Notice - Limited Labs",
  description: "How Limited Labs handles public systems audit submissions.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-24 pt-36">
        <article className={`${wrap} max-w-[920px]`}>
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint">
            Privacy notice · Updated June 8, 2026
          </p>
          <h1 className="mt-5 font-display text-[clamp(46px,7vw,92px)] font-bold leading-[0.94] tracking-[-0.045em]">
            Systems audit submissions
          </h1>
          <div className="mt-12 space-y-10 text-[15px] leading-relaxed text-ink-muted">
            <section>
              <h2 className="font-display text-2xl font-bold text-ink">What we collect</h2>
              <p className="mt-3">
                We collect the contact, business, system-interest, challenge, outcome, timing, and
                attribution information shown in the audit form. Do not submit passwords, payment
                information, government identifiers, or confidential system credentials.
              </p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold text-ink">Why we collect it</h2>
              <p className="mt-3">
                The information is used to review fit, prepare a priority assessment for qualified
                requests, respond to the person who submitted it, and measure the reliability of the
                public acquisition funnel.
              </p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold text-ink">Storage and access</h2>
              <p className="mt-3">
                Submissions are transmitted over encrypted connections and stored in access-controlled
                systems. Access is limited to people operating Limited Labs who need the information to
                review and respond to the request.
              </p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold text-ink">Retention and deletion</h2>
              <p className="mt-3">
                We retain submissions while they are actively reviewed and for a reasonable operational
                period afterward. To request access, correction, or deletion, email{" "}
                <a className="text-ink underline underline-offset-4" href="mailto:hello@limitedlabs.co">
                  hello@limitedlabs.co
                </a>
                .
              </p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold text-ink">Analytics</h2>
              <p className="mt-3">
                Public-site analytics must not include form names, emails, business URLs, challenge
                text, desired outcomes, or other personally identifiable form content.
              </p>
            </section>
          </div>
          <Link
            href="/#audit"
            className="mt-12 inline-flex min-h-12 items-center rounded-full border border-border-strong px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink"
          >
            Return to the audit
          </Link>
        </article>
      </main>
      <SiteFooter />
      <LandingInteractions />
    </>
  );
}
