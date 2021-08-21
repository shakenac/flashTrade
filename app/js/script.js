const btnHamburger = document.querySelector('#btnHamburger');
const mobileNav = document.querySelector('.header__mobileNav');

// Mobile Navigation toggle
btnHamburger.addEventListener('click', function() {
   if (btnHamburger.classList.contains('open')) {
      btnHamburger.classList.remove('open');
      mobileNav.classList.remove('open');
   }
   else {
      btnHamburger.classList.add('open');
      mobileNav.classList.add('open');
   }
})
