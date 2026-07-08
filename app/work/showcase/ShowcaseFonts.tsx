/**
 * Extra display faces used only by the showcase collection (each work has
 * its own type pairing). Loaded on /work, /work/[slug] and /guide — the rest
 * of the site keeps its base three families. Browsers only download the
 * woff2 files for families actually rendered on the page.
 */
export default function ShowcaseFonts() {
  return (
    <>
      <link
        href="https://api.fontshare.com/v2/css?f[]=clash-display@600,700&f[]=cabinet-grotesk@700,800&f[]=general-sans@500,600,700&f[]=zodiak@400,700&f[]=sentient@500,700&f[]=panchang@700,800&f[]=chillax@500,600,700&f[]=tanker@400&f[]=melodrama@700&f[]=gambetta@500,600,700&f[]=erode@600,700&f[]=khand@600,700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..700&family=Space+Grotesk:wght@500;600;700&family=DM+Serif+Display:ital@0;1&family=Syne:wght@700;800&family=Unbounded:wght@500;700&display=swap"
        rel="stylesheet"
      />
    </>
  );
}
