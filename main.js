
const whiteLoadingBG = document.querySelector('.white_bg');
const logoOnly = document.querySelector('.logo_only');
const logotypeOnly = document.querySelector('.logotype_only');
const boasVindas = document.querySelector('.boas_vindas');

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
    setTimeout(() => {
        logotypeOnly.style.transition = 'transform 1.5s cubic-bezier(0.4, 0, 0.2, 1), width 1.5s cubic-bezier(0.4, 0, 0.2, 1)'

        setTimeout(() => {
            whiteLoadingBG.style.opacity = 0;
            whiteLoadingBG.style.visibility = 'hidden';

            logoOnly.style.transform = 'translateY(-25vw) scale(2)';

            logotypeOnly.classList.add('logotype_only_smaller');

            setTimeout(() => {
              boasVindas.style.opacity = 1;
            }, 1000);
        }, 500);
    }, 300);
  } else {
    whiteLoadingBG.style.opacity = 0;
    whiteLoadingBG.style.visibility = 'hidden';
  
    logotypeOnly.classList.add('logotype_only_smaller')
  }
});


const fixedIMG = document.querySelectorAll('.fixed_img_div img')
const tratamentosIMG = document.querySelector('#tratamentos div img')
const consultorioSection = document.querySelector('#consultorio')
const consultorioIMG = document.querySelector('#consultorio img')
const localizacaoDiv = document.querySelector('#localizacao')
const localizacaoIMG = document.querySelector('#localizacao img')

const introPhoto = document.querySelector('.intro_subcontainer > div')
const h1 = document.querySelector('h1')

let tratamentosSectionHeight = document.querySelector('#tratamentos').scrollHeight
let consultorioSectionHeight = document.querySelector('#consultorio').scrollHeight


// DESKTOP
if (window.matchMedia("(min-width: 100vh)").matches || window.matchMedia("(min-width: 170vh)").matches) {
  document.body.onscroll = function() {
      for(i = 0; i < fixedIMG.length; ++i) {
        fixedIMG[i].style.transform = "translateY(" + window.pageYOffset / 3 + "px)"
      }
    h1.style.transform = "translateY(" + window.pageYOffset / 1.5 + "px)"
  }

  document.querySelector('#tratamentos img').style.bottom = 62 + 'vw';
  
  consultorioIMG.style.bottom = tratamentosSectionHeight * 1.5 + 'px';


  // MOBILE
} else {
  document.body.onscroll = function() {
    for(i = 0; i < fixedIMG.length; ++i) {
      fixedIMG[i].style.transform = "translateY(" + window.pageYOffset / 3 + "px)"
    }
  }
  
  consultorioIMG.style.bottom = tratamentosSectionHeight / 2 + 'px';

  document.querySelector('#tratamentos img').style.bottom = 100 + 'vw';

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
  