$(document).ready(function () {

    $(".js-test-slider").slick({
        dots: false,
        infinite: true,
        pauseOnHover: true,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    centerMode: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: false
                }
            },
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false
                }
            }
        ]
    });

});

