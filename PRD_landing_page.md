# Limited Labs — Landing Page PRD

**Version:** 0.1
**Owners:** Ambri, Silver
**Status:** Draft — ready for build
**Scope:** Single-page public site, v1

---

## 1. Purpose

Limited Labs needs a public foundation that signals competence to a specific kind of buyer: founders and operators of small-to-mid Albanian businesses, e-commerce brands, hospitality, real estate, and early-stage startups who are tired of "make me viral" agencies and want a partner who builds **systems**.

The landing page is not a brochure. It is the conversion surface for the first revenue priority (Brand & Content retainers) and a credibility filter for everything below it on the priority stack (Web/PWA/MVP, Meta Ads, Automation, Product Lab).

If this page does its job, three things happen:

1. The right kind of client books a discovery call.
2. The wrong kind of client self-disqualifies before wasting a call.
3. Anyone receiving a cold email or LinkedIn message from Limited Labs has a place to land that confirms the company is real, opinionated, and competent.

---

## 2. Goals & Non-Goals

### Goals (v1)

- Communicate Limited Labs' positioning in under 5 seconds of scroll.
- Make the five offers legible without forcing the visitor to read every word.
- Earn one of two actions: **book a discovery call** or **request a brand audit**.
- Look and feel like a studio-lab, not a marketing agency.
- Render fast on mobile (most traffic from LinkedIn/Instagram clicks will be mobile).

### Non-Goals (v1)

- No case studies module with real client work — there are none yet. A graceful placeholder is acceptable.
- No blog, no CMS, no newsletter signup.
- No multi-language toggle. English for v1; an Albanian version can come later when copy is properly localized (do not machine-translate).
- No legal pages (privacy, terms) beyond a simple footer mention — legal setup is out of scope until v0.2.
- No pricing on the page. Pricing is established in the proposal stage.

---

## 3. Target Audience

**Primary:**
- Local Albanian business owners (service businesses, hospitality, real estate/construction-adjacent, e-commerce) who already know their brand or marketing isn't working.
- Early-stage founders who need an MVP or PWA but don't have an in-house team.

**Secondary:**
- Operators inside small companies who need an automation or internal tool but can't justify a full engineering hire.

**Explicitly not the audience:**
- People shopping for the cheapest logo on Fiverr.
- "Make me go viral" requesters with no budget and no offer.
- Enterprises with procurement processes — not the v1 fit.

---

## 4. Brand & Voice

| Attribute | Direction |
| --- | --- |
| Tone | Direct, strategic, premium, practical |
| Avoid | Agency-bro language, hype, emojis in body copy, exclamation points, "we're passionate about" |
| Visual base | Black, white, grayscale — no accent color in v1 |
| Mood | Software lab / research notes / editorial documentation |
| Reference feel | Linear, Vercel, Stripe Press, Basecamp's older landing pages, McKinsey notebooks — minus their corporate stiffness |

The voice should sound like the CEO operator prompt: opinionated, no generic startup advice, clear about what Limited Labs will and will not do.

---

## 5. Information Architecture

The page is a single vertical scroll, divided into numbered sections that mirror the internal documentation aesthetic (`01`, `02`, etc.). This is intentional: it tells the visitor they are looking at how the company actually thinks, not a stock template.

| # | Section | Purpose |
| --- | --- | --- |
| — | Top nav | Monogram + anchor links + CTA |
| 00 | Hero | Positioning sentence + CTA |
| 01 | What Limited Labs builds | Four disciplines, one line each |
| 02 | Services | Five offers, in priority order |
| 03 | How we work | The operating principle — systems over deliverables |
| 04 | Why different | 3–5 short principles that filter the audience |
| 05 | Selected work | Placeholder until real case studies exist |
| 06 | Contact | One form, two CTAs, email |
| — | Footer | Company line, location, year, version tag |

---

## 6. Content Specs

### Hero (00)

- **Eyebrow (mono):** `LIMITED LABS — V0.1 — TIRANA`
- **Headline (serif, large):** Limited Labs designs and builds digital systems for businesses ready to operate at a higher level.
- **Sub (sans, ~18px):** Brands, websites, marketing engines, automations, and MVPs — under one operating logic.
- **Primary CTA:** Book a discovery call
- **Secondary CTA:** Request a brand audit

### What we build (01)

Four disciplines, each one line. No icons. Mono number, label, sentence.

1. **Brand systems** — positioning, voice, identity, content pillars.
2. **Marketing systems** — content engines, Meta Ads, lead workflows.
3. **Software** — landing pages, PWAs, MVPs, internal tools.
4. **Automations** — AI-assisted workflows that remove operational drag.

### Services (02)

Five offer cards in priority order. Each card: mono index, name, one-line purpose, 3–4 bullet inclusions, who it's for. **No prices.** CTA per card: "Discuss this offer".

1. Brand & Content System — *first revenue priority*
2. Website / PWA / MVP
3. Meta Ads + Content System
4. AI Automation System
5. Product Lab / POC Sprint — *by invitation*

### How we work (03)

Three short paragraphs framing the operating principle: "We build systems, not deliverables." Drafted from the company context — AI drafts, humans decide; systems over one-off assets; reusable internal logic.

### Why different (04)

Four to five short principles, each one sentence:

- Systems thinking over content noise.
- Design, marketing, and software under one logic — not three vendors stitched together.
- Premium execution adapted to the local market — not imported pricing dressed as quality.
- AI drafts. Humans decide. Clients see the difference.
- We say no to work that won't ship a real result.

### Selected work (05)

Empty-state-with-character. Three placeholder slots labeled `[ FORTHCOMING ]` with a small note: "First case studies publish after Q2 deliveries." This is more honest than fake testimonials and reinforces the early-stage credibility play.

### Contact (06)

- Headline: "Tell us what you're trying to build."
- Two CTAs: book a call (Calendly placeholder link), or email `hello@limitedlabs.co` (or whatever domain is reserved).
- Optional: a 3-field form (name, email, what you need) — but v1 can ship without if a form backend isn't ready. Email + Calendly is enough.

### Footer

- `Limited Labs` monogram
- One-line description repeated
- Location: Tirana, Albania
- Year + version tag `© 2026 — v0.1`
- LinkedIn link (when ready)

---

## 7. Design Requirements

### Typography

- **Display:** Fraunces (variable, optical sizing) — for the hero headline and section headers. Used at large sizes where the optical axis can flex.
- **Sans:** Geist — for body copy, navigation, buttons.
- **Mono:** Geist Mono — for section numbers, eyebrows, metadata, footer.

This pairing is intentional: serif gives editorial weight and feels considered; Geist Mono signals software-lab; Geist sans is unobtrusive.

### Color

- Background: `#fafaf9` (slight warm off-white — feels less sterile than pure white)
- Text primary: `#0a0a0a`
- Text secondary: `#525252`
- Borders / hairlines: `#e5e5e5`
- No accent color in v1.

### Layout

- Max content width 1200px, generous side gutters.
- Hairline horizontal rules between sections.
- Numbered section headers with mono index on the left.
- Asymmetric grid for the services section — not four-up-grid-default.
- Generous vertical rhythm — at least 96px between sections on desktop.

### Motion

- Minimal. A single staggered fade-in on page load for the hero. A subtle underline-grow on link hover. No parallax. No scroll-jacking.

---

## 8. Technical Requirements

- **Single HTML file** for v1 — easy to ship, easy to iterate.
- Embedded CSS, no build step.
- Fonts loaded from Google Fonts (Fraunces, Geist, Geist Mono).
- Fully responsive — mobile, tablet, desktop breakpoints.
- Accessibility: semantic HTML5, proper heading hierarchy, sufficient contrast (AA minimum), focus states on all interactive elements.
- Page weight target: < 200 KB on first load (excluding fonts).
- Hosting: Vercel (matches the internal stack: GitHub → Vercel).

---

## 9. CTAs & Conversion Goals

| CTA | Location | Destination |
| --- | --- | --- |
| Book a discovery call | Hero, nav, contact | Calendly link |
| Request a brand audit | Hero secondary | Email `mailto:` with subject prefilled |
| Discuss this offer | Each service card | Same email/Calendly |
| Email us | Contact, footer | `mailto:hello@limitedlabs.co` |

Single primary goal: **booked discovery calls**.

---

## 10. Success Metrics

For the first 30 days post-launch:

| Metric | Target |
| --- | --- |
| Unique visitors | 200+ (from cold outreach + LinkedIn) |
| Bounce rate | < 65% |
| Average scroll depth | > 60% |
| Discovery calls booked | 3–5 |
| Brand audit requests | 2–4 |
| Inbound email replies | 5+ |

These are intentionally modest. The page is a conversion surface for outbound, not an inbound traffic magnet.

---

## 11. V2 Considerations (Not Now)

- Albanian-language version (only with proper localized copy, never machine-translated)
- Real case studies module once first 2–3 clients ship
- Lightweight blog / changelog ("Notes" section) — would reinforce the lab positioning
- One subtle accent color introduced after brand system is finalized
- LinkedIn + Instagram social proof embeds
- Form backend (Formspree, Resend, or Supabase route)
- Analytics: Plausible or Umami (privacy-respecting, matches the brand tone)

---

## 12. Open Questions

1. Final domain — `limitedlabs.co`, `.al`, `.com`? Needs decision before launch.
2. Calendly account — under whose name? Ambri, Silver, or a shared account?
3. Email — `hello@`, `team@`, or named? Decision belongs in the Decision Log.
4. Public launch timing — is the page published before or after the first 5 outreach messages go out? Recommend: publish first, then send.
