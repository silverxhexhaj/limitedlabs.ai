/* eslint-disable @next/next/no-page-custom-font -- mirror index (2).html variable font CSS2 URL */
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Limited Labs — A digital systems studio. Brand, build, automate.",
  description:
    "Limited Labs is a digital systems studio. We design brands, build software, run marketing engines, and ship automations — under one operating logic. Tirana, Albania.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,200..800&family=Caveat:wght@500;700&family=Geist+Mono:wght@400;500&family=Geist:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
