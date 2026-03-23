
const CACHE_NAME = "calc-fj-v1";
const FILES_TO_CACHE = [
  "/",
  "/Calc.html",
  "/calc.css",
  "/Calc.js",
  "/logon.png",
  "/manifest.json"
];

// Instala e guarda os arquivos no cache
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  console.log("Service Worker instalado e arquivos em cache");
});

// Ativa e limpa caches antigos
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  console.log("Service Worker ativado");
});

// Intercepta requisições e responde do cache se possível
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});