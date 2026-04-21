document.addEventListener("DOMContentLoaded", function () {
    const menu_btn = document.querySelector('.btn__menu');
    const menu = document.querySelector('.menu');
    const bb = document.querySelector('body');
    menu_btn.addEventListener('click', function (){
        menu.classList.toggle('show');
        bb.classList.toggle('no-scroll')
    })
});