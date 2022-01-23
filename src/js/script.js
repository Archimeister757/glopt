window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    //Menu

    const menu = document.querySelector('.promo__menu'),
          humburger = document.querySelector('.humburger');

    humburger.addEventListener("click", () => {
    humburger.classList.toggle("humburger_active");
    menu.classList.toggle("promo__menu_active");
    });
});