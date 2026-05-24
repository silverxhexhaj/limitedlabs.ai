/* eslint-disable @next/next/no-page-custom-font -- mirror index (2).html variable font CSS2 URL */
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { PwaInstaller } from "./components/PwaInstaller";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.limitedlabs.ai"),
  title: "Limited Labs — Brand, Websites, Marketing & Automation Systems",
  description:
    "Limited Labs builds brands, websites, marketing systems, and automation workflows for founders and local operators in Tirana, Albania and beyond.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Limited Labs — Brand, Websites, Marketing & Automation Systems",
    description:
      "A Tirana-based digital systems studio for businesses that need clearer brand, better websites, stronger marketing, and less manual work.",
    url: "https://www.limitedlabs.ai",
    siteName: "Limited Labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Limited Labs — Brand, Websites, Marketing & Automation Systems",
    description:
      "Brand, website, marketing, and automation systems for founders and local operators.",
  },
  applicationName: "Limited Labs",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Limited Labs",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f6f2" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "dark light",
};

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Limited Labs",
  url: "https://www.limitedlabs.ai",
  email: "hello@limitedlabs.co",
  areaServed: ["Albania", "Tirana", "Europe"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tirana",
    addressCountry: "AL",
  },
  description:
    "Limited Labs builds brands, websites, marketing systems, and automation workflows for founders and local operators.",
  knowsAbout: [
    "Brand strategy",
    "Website design",
    "MVP development",
    "Meta Ads",
    "Business automation",
    "AI workflows",
  ],
  makesOffer: [
    { "@type": "Offer", name: "Brand strategy and visual identity" },
    { "@type": "Offer", name: "Website and MVP development" },
    { "@type": "Offer", name: "Marketing engines and lead generation" },
    { "@type": "Offer", name: "Business automation and AI workflows" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,200..800&family=Caveat:wght@500;700&family=Geist+Mono:wght@400;500&family=Geist:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-page font-sans text-ink antialiased">
        <PwaInstaller />
        {children}
      </body>
    </html>
  );
}
