
$( document ).ready(function() {

    AOS.init({
        duration: 1000,
        disable: 'mobile'
    })

        // show and hide shopping-list

    $('#basket-btn').click(function() {
        $(".drawer-wrapper").addClass('show');
        $("#transform").addClass('transform');
    });

    $('.drawer-close-icon').click(function() {
        $(".drawer-wrapper").removeClass('show');
        $("#transform").removeClass('transform');
    });

    $('.drawer-cover').click(function() {
        $(".drawer-wrapper").removeClass('show');
        $("#transform").removeClass('transform');
    });

    //ripple-effect

    setTimeout(function(){
        $('.bg-main-image').ripples({
            resolution: 256,
            dropRadius: 20,
            perturbance: 0.06,
        });
    }, 1000);

    // best-products-carousel

    $('.best-products-carousel').slick({
        dots: false,
        infinite: false,
        speed: 500,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 1090,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    });

    $(".carousel-button-prev").click(function () {
        $('.best-products-carousel').slick('slickPrev');
    });
    $(".carousel-button-next").click(function () {
        $('.best-products-carousel').slick('slickNext');
    });

    // product slider

    $('.product-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.slider-nav-thumbnails',
    });

    $('.slider-nav-thumbnails').slick({
        vertical: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product-slider',
        dots: false,
        focusOnSelect: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    vertical: false
                }
            }
        ]
    });

    // Remove active class from all thumbnail slides
    $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');

    // Set active class to first thumbnail slides
    $('.slider-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');

    // On before slide change match active thumbnail to current slide
    $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var mySlideNumber = nextSlide;
        $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
        $('.slider-nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
    });

    $(".slider-button-prev").click(function () {
        $('.slider-nav-thumbnails').slick('slickPrev');
    });
    $(".slider-button-next").click(function () {
        $('.slider-nav-thumbnails').slick('slickNext');
    });

});
