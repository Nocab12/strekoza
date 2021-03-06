
$(document).ready(function () {

    // Появление шапки при скролле
    function ScroolHeader() {
        let headerMain = $(window).scrollTop();
        let height = $('.header-fixed').height();
        if (height < headerMain ) {
            $('.header-fixed').addClass('css-header-fixed');
            $('.nav-sub').addClass('nav_top');
        } else {
            $('.header-fixed').removeClass('css-header-fixed');
            $('.nav-sub').removeClass('nav_top');
        }
    }

    ScroolHeader();

    $(window).scroll(function () {
        ScroolHeader();
    });

    // Открытие меню от 1200px
    $('.js-nav-link').hover(function () {
        var subNavBlock = $(this).next();
        if(subNavBlock.is(":visible")) {

        } else {
            $('.nav-sub').hide();
            subNavBlock.show();
            subNavBlock.mouseleave(function(){
                $('.nav-sub').stop().slideUp();
            });

        }
    });

    $('.header-logo, .js-list-right').hover(function () {
        $('.nav-sub').hide();
    });

    // Открытие блока с прайс-листом
    $('.js-price-toggle').on('click',function () {
        if($('.price-all').is(':visible')) {
            $(this).text('Подробнее');
            $('.price-all').slideUp();
        } else {
            $(this).text('Скрыть');
            $('.price-all').slideDown();
        }
    });


    $(".modal").each( function(){
        $(this).wrap('<div class="overlay"></div>')
    });

    $(".open-modal").on('click', function(e){
        e.preventDefault();
        e.stopImmediatePropagation;
        $('.overlay').removeClass('open');
        $('.modal').removeClass('open');

        var $this = $(this),
            modal = $($this).data("modal");

        $(modal).parents(".overlay").addClass("open");

            $(modal).addClass("open");


        $(document).on('click', function(e){
            var target = $(e.target);

            if ($(target).hasClass("overlay")){
                $(target).find(".modal").each( function(){
                    $(this).removeClass("open");
                });

                    $(target).removeClass("open");

            }

        });

    });

    $(".close-modal").on('click', function(e){
        e.preventDefault();
        e.stopImmediatePropagation;

        $('.overlay').removeClass('open');
        $('.modal').removeClass('open');


    });



});