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
    destination = $(elementClick).offset().top;
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

$('.mobile-menu .top-menu a').click(function() {
    $('#hamburger-icon').removeClass('active');
    $('.mobile-menu').removeClass('active');
    $('html').removeClass('ov-hidden');
});

$('.style-tab').click(function() {
    $('.style-tabs').find('.active').removeClass('active');
    $(this).addClass('active');
    $('.styles-elems').find('.styles-elem-item').hide();
    $('#' + $(this).data('switch')).show();
});

$(window).on('load resize scroll', function() {

    var width = $(window).width();

    if ((width > '700') && (width < '1000')) {

    }

    if (width > '700') {

    }

    if (width < '700') {

    }

});