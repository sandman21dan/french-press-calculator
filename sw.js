const CACHE_NAME = 'french-press-calculator-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/assets/bean_512_transparent.png',
    '/favicon/favicon-96x96.png',
    '/favicon/favicon.ico',
    '/favicon/apple-touch-icon.png',
    '/webmanifest/site.webmanifest',
    '/webmanifest/web-app-manifest-192x192.png',
    '/webmanifest/web-app-manifest-512x512.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});
