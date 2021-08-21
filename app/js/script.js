const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const mobileNav = document.querySelector('.header__mobileNav');
const bodyTag = document.querySelector("body");


// Mobile Navigation toggle
btnHamburger.addEventListener('click', function() {
   if (header.classList.contains('open')) {

      // close mobile nav
      header.classList.remove('open');
      mobileNav.classList.remove('fade-in');
      mobileNav.classList.add('fade-out');
      bodyTag.style.overflow = "visible";
   }
   else {
      // open mobile nav
      header.classList.add('open');
      mobileNav.classList.remove('fade-out');
      mobileNav.classList.add('fade-in');
      bodyTag.style.overflow = "hidden";
   }
})
