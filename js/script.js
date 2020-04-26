$(document).ready(function(){
    $('.get__slider').slick({
        arrows: true,
        dots: true,//положение меняется стилизацией контейнера .slick-dots
        //adaptiveHeight: false, // если true для slick-track align-items: flex-start;
        slidesToShow: 6, //количество отображаемых слайдов
        // slidesToScroll: 10, //количество слайдов перемотки
        speed: 1000, // 300 умолчание в ms
        // easing: "ease", //как в анимации css
        infinite: true, // бесконечная перемотка (true)
        // initialSlide: 2, //стартовый слайд
        //autoplay: true,  
        autoplaySpeed: 2000, //ms, к autoplay
        pauseOnFocus: true, // к autoplay
        pauseOnHover: true, // к autoplay
        pauseOnDotsHover: true, // к autoplay
        draggable: true, //перетаскивание мышкой на ПК
        swipe: true, //перетаскивание тачскрином
        // touchTheshold: 5, //ширина свайпа
        // touchMove: true, //включение передвижения тачскрином
        // waitForAnimate: true, // быстро кликаешь - ждёт анимацию
        centerMode: true, //активный слайд по центру. Показывает 3 слайда. Получает класс .slick-center
        variableWidth: true, // сбрасывает width. Хорошо работает с centerMode
        // rows: 1, //можно больше. Ряды слайдов.
        // slidesPerRow: 1,
        // vertical: false, //вертикальный слайдер. Нужно убрать Flex в ленте слайдов .slick-track
        // verticalSwiping: false, //вертикальный свайп для мобил
        //fade: true, //только 1 слайд, остальные затемняются
        //appendArrows:$(.get), //переместить стрелки в другой блок
        //asNavFor:".other__slider",//связать навигацию с .other__slider
    });

})