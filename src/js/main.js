const nav = document.querySelector('#nav');
const burger = document.querySelector('#burger');
const social = document.querySelector('#social-box');
const socialMobile = document.querySelector('#social-box-mobile');
const logo = document.querySelector('#header-logo');

function handleHeader() {
    social.classList.toggle('social--visible');
    socialMobile.classList.toggle('social-mobile--visible');
    logo.classList.toggle('logo--hidden');
    burger.classList.toggle('burger--active');
    nav.classList.toggle('nav--active');
}

burger.addEventListener('click', handleHeader);

(function (f, a, t, h, o, m) {
    a[h] = a[h] || function () {
        (a[h].q = a[h].q || []).push(arguments)
    };
    o = f.createElement('script');
    m = f.getElementsByTagName('script')[0];
    o.async = 1;
    o.src = t;
    o.id = 'fathom-script';
    m.parentNode.insertBefore(o, m)
})(document, window, '//fathom.status.im/tracker.js', 'fathom');
fathom('set', 'siteId', 'BBYCC');
fathom('trackPageview');
