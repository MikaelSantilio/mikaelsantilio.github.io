import { fadeIn, fadeOut } from './utils.js';

var btn_open = document.querySelector('.btn_menu');
var btn_close = document.querySelector('.btn_close');

var el = document.querySelector('#nav_menu');

btn_open.addEventListener('click', function(e){
    fadeIn(el);
});

btn_close.addEventListener('click', function(e){
    fadeOut(el);
});

// Close Responsive Menu On Link Click
document.querySelectorAll('.menu_option').forEach(option => {
    option.addEventListener('click', function (e) {
        e.preventDefault();

        if (el.style.display == "block") {
            fadeOut(el);    
        }
        
    });
});
// Smooth Scroll on click
document.querySelectorAll('.menu_option').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

