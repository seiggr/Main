let headerBurger = document.querySelector('.header-burger');
let clickContainer = document.querySelector('.header-burger-container-for-click');
let burgerMenuContainer = document.querySelector('.burger-menu-container');
let body = document.querySelector('body');
let html = document.querySelector('html');
let topsectionContainer = document.querySelector('.topsection-container');
let undertag = document.querySelector('.undertag');

clickContainer.addEventListener('click', () => {
    burgerMenuContainer.classList.toggle('active');
    headerBurger.classList.toggle('active');
    // console.log('click!');

    html.classList.toggle('locked');
    body.classList.toggle('locked');
});


window.addEventListener('scroll', () => {
    // console.log(window.pageYOffset + ' px');

    if (window.pageYOffset >= 10) {
      topsectionContainer.style.backgroundColor = '#c9a78c';
      undertag.classList.add('hidden');
    } else {
        topsectionContainer.style.backgroundColor = '';
        undertag.classList.remove('hidden');
    }
});