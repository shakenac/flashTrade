const btnHamburger = document.querySelector('#btnHamburger');

// If hamburger is clicked, add open class
btnHamburger.addEventListener('click', function() {
   if (btnHamburger.classList.contains('open')) {
      btnHamburger.classList.remove('open');
   }
   else {
      btnHamburger.classList.add('open');
   }

})
