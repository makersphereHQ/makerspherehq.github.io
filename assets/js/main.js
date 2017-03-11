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
// MailChimp
var mc = document.getElementById('mc-embedded-subscribe-form');
if(navigator.userAgent.match(/(iPod|iPhone|iPad)/i)) {
    mc.removeAttribute('target');
}
// Mascot
var mascot = document.getElementById('footer__mascot');
window.onscroll = function(event) {
    if ((window.innerHeight + window.pageYOffset ) >= document.body.offsetHeight) {
        mascot.classList.add('footer__mascot--is-visible');
    } else {
        mascot.classList.remove('footer__mascot--is-visible');
    }
};
