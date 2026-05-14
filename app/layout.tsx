/* eslint-disable @next/next/no-page-custom-font -- mirror index (2).html variable font CSS2 URL */
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { PwaInstaller } from "./components/PwaInstaller";
import "./globals.css";

export const metadata: Metadata = {
  title: "Limited Labs — A digital systems studio. Brand, build, automate.",
  description:
    "Limited Labs is a digital systems studio. We design brands, build software, run marketing engines, and ship automations — under one operating logic. Tirana, Albania.",
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
      </head>
      <body className="min-h-screen bg-page font-sans text-ink antialiased">
        <PwaInstaller />
        {children}
      </body>
    </html>
  );
}
