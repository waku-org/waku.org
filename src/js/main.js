const nav = document.querySelector('#nav');
const burger = document.querySelector('#burger');
const social = document.querySelector('#social-box');
const logo = document.querySelector('#header-logo');

function handleHeader () {
    social.classList.toggle('social--visible');
    logo.classList.toggle('logo--hidden');
    burger.classList.toggle('burger--active');
    nav.classList.toggle('nav--active');
}

burger.addEventListener('click', handleHeader);