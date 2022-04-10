window.addEventListener('DOMContentLoaded', () => {
   'use strict';

   //Menu

   const menu = document.querySelector('.promo__menu'),
      humburger = document.querySelector('.humburger');

   humburger.addEventListener('click', () => {
      humburger.classList.toggle('humburger_active');
      menu.classList.toggle('promo__menu_active');
   });

   //Cards

   const btnNext = document.querySelectorAll('[data-next]'),
      btnBack = document.querySelectorAll('[data-back]'),
      cardsParent = document.querySelector('.delivery__cards'),
      cardContent = document.querySelectorAll('.delivery__card-content'),
      cardList = document.querySelectorAll('.delivery__card-list');

   function showCardContent(i = 0) {
      cardContent[i].classList.add('delivery__card-content_hide');
      cardList[i].classList.add('delivery__card-list_active');
   }
   function hideCardContent(i = 0) {
      cardContent[i].classList.remove('delivery__card-content_hide');
      cardList[i].classList.remove('delivery__card-list_active');
   }

   cardsParent.addEventListener('click', (event) => {
      const target = event.target;

      if (target && target.classList.contains('next')) {
         btnNext.forEach((item, i) => {
            if (target == item) {
               showCardContent(i);
            }
         });
      } else if (target && target.classList.contains('back')) {
         console.log('Hello');

         btnBack.forEach((item, i) => {
            if (target == item) {
               hideCardContent(i);
            }
         });
      }
   });

   //Slider

   const slides = document.querySelectorAll('.reviews__block'),
      arrowBack = document.querySelector('.arrow_back'),
      arrowNext = document.querySelector('.arrow_next');

   let slideIndex = 1;

   showSlides(slideIndex);

   function showSlides(n) {
      if (n > slides.length) {
         slideIndex = 1;
      }
      if (n < 1) {
         slideIndex = slides.length;
      }
      slides.forEach((item) => {
         item.style.display = 'none';
      });
      slides[slideIndex - 1].style.display = 'block';
   }

   function plusSlides(n) {
      showSlides((slideIndex += n));
   }
   arrowNext.addEventListener('click', () => {
      plusSlides(+1);
   });
   arrowBack.addEventListener('click', () => {
      plusSlides(-1);
   });
});
