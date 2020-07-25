// fade out
function fadeOut(el){
    el.style.opacity = 1;
    
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = 'none';
            el.classList.add('is-hidden');
        } else {
            requestAnimationFrame(fade);
        }
    })();
}

// fade in
function fadeIn(el, display){
    if (el.classList.contains('is-hidden')){
        el.classList.remove('is-hidden');
    }
    el.style.opacity = 0;
    el.style.display = display || "block";
    
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
}

var btn_open = document.querySelector('.btn_menu');
var btn_close = document.querySelector('.btn_close');

var el = document.querySelector('#nav_menu');

btn_open.addEventListener('click', function(e){
    fadeIn(el);
});

btn_close.addEventListener('click', function(e){
    fadeOut(el);
});

document.querySelectorAll('.menu_option').forEach(option => {
    option.addEventListener('click', function (e) {
        e.preventDefault();

        if (el.style.display == "block") {
            fadeOut(el);    
        }
        
    });
});

document.querySelectorAll('.menu_option').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

