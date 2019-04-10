
const whiteLoadingBG = document.querySelector('.white_bg');
const logoOnly = document.querySelector('.logo_only');
const logotypeOnly = document.querySelector('.logotype_only');

const hamburger = document.querySelector('.hamburger_container');
const headerNav = document.querySelector('header nav')
const headerNavDiv = document.querySelectorAll('header nav div')

function toggleHiddenNav() {
  headerNav.classList.toggle('nav_show');

  hamburger.style.background = '#fafafa';

  setTimeout(() => {
      document.querySelector('.hamburger_container div div:first-child').classList.toggle('hamburger_first_div_hidden')
      document.querySelector('.hamburger_container div div:nth-child(2)').classList.toggle('hamburger_second_div_hidden')
      document.querySelector('.hamburger_container div div:nth-child(3)').classList.toggle('hamburger_third_div_hidden')

      setTimeout(() => {
        hamburger.style.background = '#ffffff';
      }, 300);
  }, 100);
}

hamburger.addEventListener('click', toggleHiddenNav)

if (!window.matchMedia("(min-width: 170vh)").matches) {
  for(i = 0; i < headerNavDiv.length; ++i) {
  headerNavDiv[i].addEventListener('click', toggleHiddenNav)
  }
}

document.addEventListener("DOMContentLoaded", function() {
  if (window.matchMedia("(min-width: 100vh)").matches || window.matchMedia("(min-width: 170vh)")) {
            whiteLoadingBG.style.opacity = 0;
            whiteLoadingBG.style.visibility = 'hidden';

            logotypeOnly.classList.add('logotype_only_smaller');
  } else {
    whiteLoadingBG.style.opacity = 0;
    whiteLoadingBG.style.visibility = 'hidden';
  
    logotypeOnly.classList.add('logotype_only_smaller')
  }
});

const fixedIMG = document.querySelectorAll('.fixed_img_div img')

if (window.matchMedia("(min-width: 100vh)").matches || window.matchMedia("(min-width: 170vh)").matches) {

    document.querySelector('#tratamentos img').style.bottom = 90 + 'vw';

    document.body.onscroll = function() {
        for(i = 0; i < fixedIMG.length; ++i) {
          fixedIMG[i].style.transform = "translateY(" + window.pageYOffset / 2 + "px)"
        }
    }
  
    // MOBILE
  } else {

    document.querySelector('#tratamentos img').style.bottom = 75 + 'vw';

    document.body.onscroll = function() {
      for(i = 0; i < fixedIMG.length; ++i) {
        fixedIMG[i].style.transform = "translateY(" + window.pageYOffset / 3 + "px)"
      }
    }
    
  }
  

// PWA

if (navigator.serviceWorker.controller) {
    console.log('[PWA Builder] active service worker found, no need to register')
  } else {
    //Register the ServiceWorker
    navigator.serviceWorker.register('pwabuilder-sw.js', {
      scope: './'
    }).then(function(reg) {
      console.log('Service worker has been registered for scope:'+ reg.scope);
    });
  }
  