/* eslint-disable @next/next/no-page-custom-font -- mirror index (2).html variable font CSS2 URL */
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import { PwaInstaller } from "./components/PwaInstaller";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.limitedlabs.ai"),
  title: "Limited Labs - AI-Powered Systems Agency in Tirana",
  description:
    "Limited Labs helps Albanian business operators improve Brand, Marketing, Software, and AI Automation under one operating logic.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Limited Labs - AI-Powered Systems Agency in Tirana",
    description:
      "Brand, Marketing, Software, and AI Automation systems for Albanian business operators.",
    url: "https://www.limitedlabs.ai",
    siteName: "Limited Labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Limited Labs - AI-Powered Systems Agency",
    description:
      "Connected business systems for how operators look, sell, build, and work.",
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
    "Limited Labs is an AI-powered systems agency for Albanian business operators.",
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
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ? (
          <>
            <Script id="plausible-init" strategy="afterInteractive">
              {`window.plausible=window.plausible||function(){(window.plausible.q=window.plausible.q||[]).push(arguments)}`}
            </Script>
            <Script
              defer
              data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
              src="https://plausible.io/js/script.js"
              strategy="afterInteractive"
            />
          </>
        ) : null}
        <PwaInstaller />
        {children}
      </body>
    </html>
  );
}
