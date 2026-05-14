/**
 * Limited Labs — minimal offline-capable service worker.
 * Pairs with app/components/PwaInstaller.tsx (production-only registration).
 */
const CACHE_VERSION = "limitedlabs-v1";
const PRECACHE_URLS = ["/"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_VERSION);
      await cache.addAll(PRECACHE_URLS);
    })(),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((key) => key !== CACHE_VERSION).map((key) => caches.delete(key)));
      await self.clients.claim();
    })(),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  let url;
  try {
    url = new URL(request.url);
  } catch {
    return;
  }

  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const netRes = await fetch(request);
          if (netRes && netRes.status === 200) {
            const cache = await caches.open(CACHE_VERSION);
            await cache.put(request, netRes.clone());
          }
          return netRes;
        } catch {
          const cache = await caches.open(CACHE_VERSION);
          const cachedPage = await cache.match(request);
          if (cachedPage) return cachedPage;
          const shell = await cache.match("/");
          if (shell) return shell;
          return Response.error();
        }
      })(),
    );
  }
});
