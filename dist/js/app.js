(function ($) {
    "use strict";
    var primarycolor = getComputedStyle(document.body).getPropertyValue('--primarycolor');

//////////////////////// Window On Load //////////////////
    $(window).on("load", function () {
        // Animate loader off screen
        $(".se-pre-con").fadeOut("slow");

    });
    $('.close-button').on("click", function () {
        // Animate loader off screen

        $('#top-header').animate({'opacity': 0}, 200, function () {
            $(this).animate({'height': 0}, 200, function () {
                $(this).hide();
            });
        });

    });

    $('.toggle-menu').on('click', function (event) {
        $('.menu-control').toggleClass('active');
        event.preventDefault();
    });


    $('.scroll-menu-item[href^="#"]:not([href="#"])').on('click', function (event) {

        $(this).closest('.main-menu').find('a').removeClass('active');
        $(this).addClass('active');
        $('.menu-control').removeClass('active');
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 66
        }, 1800, function () {

        });

        event.preventDefault();
    });

    $('.carousal-client').owlCarousel({
        items: 6,
        loop: true,
        margin: 10,
        responsiveClass: true,
        // Navigation
        navigation: false,
        dots: false,

        //Pagination
        pagination: false,
        responsive: {
            0: {
                items: 2,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: false,
                loop: false
            }
        }
    });
	$('.carousal-main').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        responsiveClass: true,
        nav: true,
        dots: true,
        pagination: true,
		navText: [
   "<i class='fa fa-chevron-left'></i>",
   "<i class='fa fa-chevron-right'></i>"
]
    });
    /********************************** Top Scroll *************************/
    $('.scrollup').on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    /****************************** Window Scroll ****************************/
    $(window).on("scroll", function () {
        /*==============================================================
         Back To Top
         =============================================================*/
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }


        var sticky = $('header'),
                scroll = $(window).scrollTop();

        if (scroll >= 100)
            sticky.addClass('fixed');
        else
            sticky.removeClass('fixed');
    });


})(jQuery);
