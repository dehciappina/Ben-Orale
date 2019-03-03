
const whiteLoadingBG = document.querySelector('.white_bg');
const logoOnly = document.querySelector('.logo_only');
const logotypeOnly = document.querySelector('.logotype_only');

const hamburger = document.querySelector('.hamburger_container');
const headerNav = document.querySelector('header nav')


document.addEventListener("DOMContentLoaded", function() {
  if (window.matchMedia("(max-width: 100vh)").matches || window.matchMedia("(max-width: 170vh)")) {
    setTimeout(() => {
        logotypeOnly.style.transition = 'transform 1.5s cubic-bezier(0.4, 0, 0.2, 1), width 1.5s cubic-bezier(0.4, 0, 0.2, 1)'

        setTimeout(() => {
            whiteLoadingBG.style.opacity = 0;
            whiteLoadingBG.style.visibility = 'hidden';

            logoOnly.style.transform = 'translateY(-25vw) scale(2)';
            logoOnly.style.opacity = 0.2;

            logotypeOnly.classList.add('logotype_only_smaller')
        }, 1000);
    }, 400);
  } else {
    whiteLoadingBG.style.opacity = 0;
    whiteLoadingBG.style.visibility = 'hidden';
  
    logotypeOnly.classList.add('logotype_only_smaller')
  }
  

});

function showHiddenNav() {
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

hamburger.addEventListener('click', showHiddenNav)

const fixedIMG = document.querySelectorAll('.fixed_img_div img')
const tratamentosIMG = document.querySelector('#tratamentos div img')
const consultorioSection = document.querySelector('#consultorio')
const consultorioDiv = document.querySelector('#consultorio img')
const consultorioIMG = document.querySelector('#consultorio img')
const localizacaoDiv = document.querySelector('#localizacao')
const localizacaoIMG = document.querySelector('#localizacao img')

let tratamentosSectionHeight = document.querySelector('#tratamentos').scrollHeight
let consultorioSectionHeight = document.querySelector('#consultorio').scrollHeight


// MOBILE
if (window.matchMedia("(max-width: 100vh)").matches || window.matchMedia("(max-width: 170vh)").matches) {
  document.body.onscroll = function() {
      for(i = 0; i < fixedIMG.length; ++i) {
        fixedIMG[i].style.transform = "translateY(" + window.pageYOffset / 3 + "px)"
      }
  }

  document.querySelector('#tratamentos img').style.bottom = 90 + 'vw';
  
  consultorioIMG.style.bottom = tratamentosSectionHeight / 2 + 'px';

  localizacaoIMG.style.bottom = (consultorioSectionHeight + tratamentosSectionHeight) / 2 + 'px';

  // DESKTOP
} else {
  document.body.onscroll = function() {
    for(i = 0; i < fixedIMG.length; ++i) {
      fixedIMG[i].style.transform = "translateY(" + window.pageYOffset / 1.3 + "px)"
    }
  }
  
  consultorioIMG.style.bottom = tratamentosSectionHeight * 2 + 'px';

  localizacaoIMG.style.bottom = (consultorioSectionHeight + tratamentosSectionHeight) * 2 + 'px';

  document.querySelector('#tratamentos img').style.bottom = 75 + 'vw';

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
  