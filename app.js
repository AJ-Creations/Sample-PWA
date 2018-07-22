$('.headingCard').css('top', $('.mdc-top-app-bar').height()+20);
$('.mainCard').css('top', $('.mdc-top-app-bar').height()+40);
var drawer = new mdc.drawer.MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));
document.querySelector('.menuToggle').addEventListener('click', () => drawer.open = true);



if('serviceWorker' in navigator) {
navigator.serviceWorker.register('/sw.js')
.then(function() {
	//alert('Service Worker Registered');
})
.catch(function(error){
	alert(error);
});
}
