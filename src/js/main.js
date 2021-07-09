$(function() {

    $(window).on('load', function() {
        let phones = [
            { 'mask': '+7 \\ \\ ###-###-##-##' }
        ];

        $('input[type=tel]').inputmask({
            mask: phones,
            greedy: false,
            definitions: {
                '#': {
                    validator: '[0-9]',
                    cardinality: 1
                }
            }
        });
    });

    $(window).scroll(function() {
        if ($(window).width() > '991') {
            if ($(this).scrollTop() > 44) {
                $('.header').addClass('fixed');
                $('body').css('padding-top', '185px');
            } else if ($(this).scrollTop() < 44) {
                $('.header').removeClass('fixed');
                $('body').css('padding-top', '0');
            }
        }
    });

    $('select').niceSelect();

});

$("#modal").on('show.bs.modal', function(event) {
    var button = $(event.relatedTarget);
    var recipient = button.data('form');
    var modal = $(this);
    modal.find('.hidden-input').val(recipient);
});

$('.btn-more').click(function(e) {
    e.preventDefault();
    if ($(this).closest('.rewiews').hasClass('active')) {
        $(this).closest('.rewiews').removeClass('active');
        $('.btn-more').text('Показать больше');
    } else {
        $('.btn-more').text('Свернуть');
        $(this).closest('.rewiews').addClass('active');
    }
});

$(".menu a").click(function() {
    elementClick = $(this).attr("href")
    destination = $(elementClick).offset().top - 82;
    $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 700);
    return false;
});

$('#hamburger-icon').click(function() {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
        $('.mobile-menu').addClass('active');
        $('html').addClass('ov-hidden');
    } else {
        $('.mobile-menu').removeClass('active');
        $('html').removeClass('ov-hidden');
    }
});


$(window).on('load resize', function() {

    var width = $(window).width();

    if (width < '992') {
        $('.top-menu a').click(function() {
            $('#hamburger-icon').removeClass('active');
            $('.mobile-menu').removeClass('active');
            $('html').removeClass('ov-hidden');
        });
    }

    if (width < '992') {
        $('.header .top-menu').appendTo($('.mobile-menu'));
        $('.header .phone').insertAfter($('.mobile-menu .top-menu'));
        $('.header .btn-orange').insertAfter($('.mobile-menu .phone'));
    } else {
        $('.mobile-menu .top-menu').insertAfter($('.header-box .logo'));
        $('.mobile-menu .phone').appendTo($('.header-box'));
        $('.mobile-menu .btn-orange').insertAfter($('.header-box .phone'));
    }


});