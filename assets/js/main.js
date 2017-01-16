// smoothScroll
smoothScroll.init();
// Headroom
var header = document.querySelector('header');
if(window.location.hash) {
    header.classList.add('headroom--unpinned');
}
var headroom = new Headroom(header, {
    tolerance: {
        down : 10,
        up : 20
    },
    offset : 205
});
headroom.init();
// StatusPage
var sp = new StatusPage.page({ page : 'srkfthnyhcz9' });
sp.status({
    success : function(data) {
        console.log(data.status.indicator);
        document.getElementById('footer__status-desc').innerHTML = data.status.description;
        document.getElementById('footer__status-dot').classList.add(data.status.indicator);
    }
});
