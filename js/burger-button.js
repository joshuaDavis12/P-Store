// var burger = document.querySelector('.burger-button')
// var ul = document.querySelector('.nav-ul')

// burger.addEventListener('click', toogleClass(ul))

// function toogleClass(ul) {
//     if (ul.classList.contains('is-active')) {
//         ul.classList.remove('is-active')
//     } else {
//         ul.classList.remove('is-active')
//     }
// }

const ipad = window.matchMedia('screen and (max-width: 767px)')
const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('.burger-button');

ipad.addListener(validation)

function validation(event) {
    if (event.matches) {
    burgerButton.addEventListener('click', hideShow)
    } else {
    burgerButton.removeEventListener('click', hideShow)
    }
}

validation(ipad); 

function hideShow() {
    if (menu.classList.contains('is-active')) {
    menu.classList.remove('is-active');
    } else {
    menu.classList.add('is-active');
    }
}