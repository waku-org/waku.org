const nav = document.querySelector('#nav');
const burger = document.querySelector('#burger');
const social = document.querySelector('#social-box');
const socialMobile = document.querySelector('#social-box-mobile');
const logo = document.querySelector('#header-logo');

function handleHeader () {
    social.classList.toggle('social--visible');
    socialMobile.classList.toggle('social-mobile--visible');
    logo.classList.toggle('logo--hidden');
    burger.classList.toggle('burger--active');
    nav.classList.toggle('nav--active');
}

burger.addEventListener('click', handleHeader);