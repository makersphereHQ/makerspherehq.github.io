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
