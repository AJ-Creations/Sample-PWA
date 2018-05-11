//Register Service Worker
if(navigator.serviceWorker.controller){
  console.log('[PWA Logs] active service worker is found on this browser. no need to register');
}
else {
  navigator.serviceWorker.register('/Sample-PWA/sw.js', {
    scope: './'
  }).then(function(reg) {
    console.log('Service worker has been registered for scope:'+ reg.scope);
  });
}
