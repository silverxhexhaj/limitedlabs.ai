"use client";

import { useEffect } from "react";

/**
 * Registers the app service worker in production only.
 * In dev, the service worker can cache stale bundles and break HMR.
 */
export function PwaInstaller() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (!("serviceWorker" in navigator)) return;

    void navigator.serviceWorker
      .register("/sw.js", {
        scope: "/",
        updateViaCache: "none",
      })
      .catch(() => {
        /* ignore registration errors (unsupported, blocked, etc.) */
      });
  }, []);

  return null;
}
