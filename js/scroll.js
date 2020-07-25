var header = document.getElementById('main_header_container_nav');

window.onscroll = function() {
    var top = window.scrollY;
    // console.log(top);
    if (top >= 50) {
        header.classList.add('nav_active');
    } else {
        header.classList.remove('nav_active');
    }
}