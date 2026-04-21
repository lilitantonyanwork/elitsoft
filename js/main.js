document.addEventListener("DOMContentLoaded", function () {
    const menu_btn = document.querySelector('.btn__menu');
    const menu_close = document.querySelector('.btn__close');
    const menu = document.querySelector('.menu');
    const bb = document.querySelector('body');
    const ov = document.querySelector('.overlay');
    menu_btn.addEventListener('click', function (){
        menu.classList.toggle('show');
        menu_btn.classList.toggle('hide');
        ov.classList.toggle('show');
        bb.classList.toggle('no-scroll')
    })
    menu_close.addEventListener('click', function (){
        menu.classList.toggle('show');
        menu_btn.classList.toggle('hide');
        ov.classList.toggle('show');
        bb.classList.toggle('no-scroll')
    })



    ymaps.ready(init);

    function init() {
        const map = new ymaps.Map("map", {
            center:  [55.81520, 37.352983], // координаты
            zoom: 14,
            controls: []
        });

        map.behaviors.disable("scrollZoom");


        const placemark = new ymaps.Placemark(
            [55.81520, 37.352983],
            {

            },
            {
            }
        );

        map.geoObjects.add(placemark);
        // 🔥 фикс: убираем фильтр с пинов

    }
});