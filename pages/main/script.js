const burger = document.querySelector('.header__burger');
const headerActive = document.querySelector('.header');
const headerContainer = document.querySelector('.header__container');
const headerWrapper = document.querySelector('.header__wrapper');
const headerWrapperList = document.querySelector('.header__wrapper_list');
const headerWrapperLogo = document.querySelector('.header__wrapper_logo');
const headerWrapperFigma = document.querySelector('.header__wrapper_figma');


burger.addEventListener('click', () => {
    burger.classList.toggle('header__burger_active');
    headerActive.classList.toggle('header__active');
    headerContainer.classList.toggle('header__container_active');
    headerWrapper.classList.toggle('header__wrapper_active');
    headerWrapperList.classList.toggle('header__wrapper_list_active');
    headerWrapperLogo.classList.toggle('header__wrapper_logo_active');
    headerWrapperFigma.classList.toggle('header__wrapper_figma_active');
});




