
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

});