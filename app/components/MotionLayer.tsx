"use client";

import { usePathname } from "next/navigation";

import CustomCursor from "./CustomCursor";
import MagneticFX from "./MagneticFX";
import ScrollReveal from "./ScrollReveal";

/**
 * Global motion managers, mounted once near the root so scroll reveals, the custom
 * cursor, and magnetic buttons work on every public route (home + /services/* + /work/*),
 * not just the landing page. Disabled on /admin to keep the dashboard plain.
 */
export default function MotionLayer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;

  return (
    <>
      <ScrollReveal />
      <CustomCursor />
      <MagneticFX />
    </>
  );
}
