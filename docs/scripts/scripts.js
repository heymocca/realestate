// slider
$('.slider-group').owlCarousel({
    margin: 0,
    loop:true,
    autoplay: true,
    autoplayTimeout: 6000,
    nav: false,
    smartSpeed: 600,
    responsive:{
        0: {
            items: 1
        },
        450: {
            items: 1
        },
        768: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

// slicknav
$('#navigation').slicknav({
	prependTo:'.mobile-menu'
});



// navigation
$(function() {
    $('.header__menu-item > li').hover(function() {
        $(this).find('.header__menu-item--sub-item').show(200);
    }, function() {
        $(this).find('.header__menu-item--sub-item').hide(200);
    });
});
