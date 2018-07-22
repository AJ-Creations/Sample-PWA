$('.headingCard').css('top', $('.mdc-top-app-bar').height()+20);
$('.mainCard').css('top', $('.mdc-top-app-bar').height()+40);
var drawer = new mdc.drawer.MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));
document.querySelector('.menuToggle').addEventListener('click', () => drawer.open = true);



if('serviceWorker' in navigator) {
navigator.serviceWorker.register('/Sample-PWA/sw.js')
.then(function() {
	console.log('Service Worker Registered');
})
.catch(function(error){
	alert(error);
});
}
var request = new Request('https://fonts.googleapis.com/icon?family=Material+Icons', {mode: 'no-cors'});
// Assume `cache` is an open instance of the Cache class.
fetch(request).then(response => cache.put(request, response));
