import type { MetadataRoute } from "next";

const BG = "#000000";
const THEME = "#000000";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Limited Labs",
    short_name: "Limited Labs",
    description:
      "Limited Labs is a digital systems studio. We design brands, build software, run marketing engines, and ship automations — under one operating logic.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: BG,
    theme_color: THEME,
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
