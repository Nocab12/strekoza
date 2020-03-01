$(document).ready(function () {

    //Слайдер с 1 колонкой
    $(".js-slider-history").slick({
        dots: false,
        infinite: true,
        pauseOnHover: true,
        mobileFirst: true,
        autoplaySpeed: 5000,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    centerMode: false
                }
            },
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    centerMode: false
                }
            }
        ]
    });

    //Слайдер с двумя колонками
    $(".js-slider-integration").slick({
        dots: false,
        infinite: true,
        pauseOnHover: true,
        mobileFirst: true,
        autoplaySpeed: 5000,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    centerMode: false
                }
            },
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    centerMode: false
                }
            }
        ]
    });



});

