
$(document).ready(function () {
    function ScroolHeader() {
        let headerMain = $(window).scrollTop();
        let height = $('.header-fixed').height();
        if (height < headerMain ) {
            $('.header-fixed').addClass('css-header-fixed');
        } else {
            $('.header-fixed').removeClass('css-header-fixed');
        }
    }
    ScroolHeader();
    $(window).scroll(function () {
        ScroolHeader();
    });
    $('.js-nav-link').hover(function () {
        var tetris = $(this).next();
        if(tetris.is(":visible")) {

        } else {
            tetris.show();
            tetris.mouseleave(function(){
                $('.nav-sub').stop().slideUp();
            });
        }
    });

});