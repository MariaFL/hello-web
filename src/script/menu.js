'use strict'

var btnMenu = document.getElementsByClassName('menu-btn')[0],
    btnExitMenu = document.getElementsByClassName('exit-btn')[0],
    menu = document.getElementsByClassName('page-menu')[0];




btnExitMenu.onclick = function hideMenu() {
    menu.style.display = 'none';
}

btnMenu.onclick = function showMenu() {
    menu.style.display = 'block';
}
