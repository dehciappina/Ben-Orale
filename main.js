
const whiteLoadingBG = document.querySelector('.white_bg');
const logoOnly = document.querySelector('.logo_only');
const logotypeOnly = document.querySelector('.logotype_only');

const hamburger = document.querySelector('.hamburger');
const headerNav = document.querySelector('header nav')


document.addEventListener("DOMContentLoaded", function() {

    setTimeout(() => {
        logotypeOnly.style.transition = 'transform 2s cubic-bezier(0.4, 0, 0.2, 1), width 1.5s cubic-bezier(0.4, 0, 0.2, 1)'

        setTimeout(() => {
            whiteLoadingBG.style.opacity = 0;
            whiteLoadingBG.style.visibility = 'hidden';

            logoOnly.style.transform = 'translateY(-13vh) scale(2.8)';
            logoOnly.style.opacity = 0.2;

            logotypeOnly.style.transform = 'translateY(0vh)'
            logotypeOnly.style.width = '62%'

            setTimeout(() => {
                logoOnly.style.zIndex = 0;
            }, 1500);

        }, 200);
    }, 200);
});

function showHiddenNav() {
    headerNav.classList.toggle('nav_show');

    setTimeout(() => {
        document.querySelector('.hamburger div:first-child').classList.toggle('hamburger_first_div_hidden')
        document.querySelector('.hamburger div:nth-child(2)').classList.toggle('hamburger_second_div_hidden')
        document.querySelector('.hamburger div:nth-child(3)').classList.toggle('hamburger_third_div_hidden')
    }, 200);

}

hamburger.addEventListener('click', showHiddenNav)


document.querySelector('body').onscroll = function() {
    document.querySelector('.fixed_img_div img').style.transform = "translateY(" + window.pageYOffset + "px)"
}