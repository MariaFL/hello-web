'use strict'


var btnMenu = document.querySelector('#menu-btn'),
    btnExitMenu = document.querySelector('#exit-btn'),
    menu = document.querySelector('.page-menu');

function toggle(event) {
    menu.classList.toggle('active');
}


btnExitMenu.addEventListener("click", function hideMenu(event) {
    event.preventDefault();
    menu.classList.toggle('page-menu-active');
});

btnMenu.addEventListener("click", function (event) {
    event.preventDefault();
    menu.classList.toggle('page-menu-active');
});

