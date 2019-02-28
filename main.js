
const whiteLoadingBG = document.querySelector('.white_bg');
const logoOnly = document.querySelector('.logo_only');
const logotypeOnly = document.querySelector('.logotype_only');

const hamburger = document.querySelector('.hamburger');
const headerNav = document.querySelector('header nav')


document.addEventListener("DOMContentLoaded", function() {

    setTimeout(() => {
        logotypeOnly.style.transition = 'transform 1.5s cubic-bezier(0.4, 0, 0.2, 1), width 1.5s cubic-bezier(0.4, 0, 0.2, 1)'

        setTimeout(() => {
            whiteLoadingBG.style.opacity = 0;
            whiteLoadingBG.style.visibility = 'hidden';

            logoOnly.style.transform = 'translateY(-25vw) scale(2)';
            logoOnly.style.opacity = 0.2;

            logotypeOnly.style.transform = 'translateY(0vh)'
            logotypeOnly.style.width = '62%'

            setTimeout(() => {
                logoOnly.style.zIndex = 0;
            }, 1500);

        }, 700);
    }, 200);
});

function showHiddenNav() {
    headerNav.classList.toggle('nav_show');

    setTimeout(() => {
        document.querySelector('.hamburger div:first-child').classList.toggle('hamburger_first_div_hidden')
        document.querySelector('.hamburger div:nth-child(2)').classList.toggle('hamburger_second_div_hidden')
        document.querySelector('.hamburger div:nth-child(3)').classList.toggle('hamburger_third_div_hidden')
    }, 100);

}

hamburger.addEventListener('click', showHiddenNav)


document.querySelector('body').onscroll = function() {
    document.querySelector('.fixed_img_div img').style.transform = "translateY(" + window.scrollY + "px)"
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
  