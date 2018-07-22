var cacheName = 'sample-pwa';
var filesToCache = [
'/Sample-PWA/',
'/Sample-PWA/index.html',
'/Sample-PWA/styles.css',
'/Sample-PWA/app.js'
];self.addEventListener('install', function(e) {
console.log('[ServiceWorker] Install');
e.waitUntil(
caches.open(cacheName).then(function(cache) {
console.log('[ServiceWorker] Caching app shell');
var request = new Request('https://fonts.googleapis.com/icon?family=Material+Icons', {mode: 'no-cors'});
// Assume `cache` is an open instance of the Cache class.
fetch(request).then(response => cache.put(request, response));

return cache.addAll(filesToCache);
})
);
});self.addEventListener('activate', event => {
event.waitUntil(self.clients.claim());
});self.addEventListener('fetch', event => {
event.respondWith(
caches.match(event.request, {ignoreSearch:true}).then(response => {
return response || fetch(event.request);
})
);
});
