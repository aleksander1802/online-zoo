window.addEventListener('DOMContentLoaded', function() {

const headerContainer = document.querySelector('.header__container');
const burger = document.querySelector('.header__burger');
const burgerShow = document.querySelector('.burger__menu')
const closeBurger = document.querySelector('.burger__close');
const headerWrapper = document.querySelector('.header__wrapper');
const burgerWrapper = document.querySelector('.burger__wrapper');

const openBurger = () => {
    burger.classList.add('hide');
    burgerShow.classList.remove('hide');
    headerWrapper.classList.add('hide');
    burgerWrapper.classList.add('fade');
    headerContainer.classList.add('burger');
}

const closeBurgerMenu = () => {
    burger.classList.remove('hide');
    burgerShow.classList.add('hide');
    headerWrapper.classList.remove('hide');
    burgerWrapper.classList.remove('fade');
    headerContainer.classList.remove('burger');
}

burger.addEventListener('click', openBurger);

closeBurger.addEventListener('click', closeBurgerMenu)

burgerWrapper.addEventListener('click', (e) => {
    if (e.target === burgerWrapper) {
        closeBurgerMenu();
    }
})

});












  