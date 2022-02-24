window.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.menu__icon'),
       menu = document.querySelector('.header__navigation'),
       menuTitle = menu.querySelector('.menu__title');
 
    burger.addEventListener('click', () => {
       menu.classList.toggle('_active');
       burger.classList.toggle('_active');
       menuTitle.classList.toggle('hide');
    })
});