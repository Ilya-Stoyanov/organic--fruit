$(document).ready(function () {
    // starts
    $(".customer-starts").starRating({
        totalStars:5,
        strokeColor: '#F1B90B',
        ratedColor: '#F1B90B',
        strokeWidth: 10,
        starSize: 22,
        readOnly: true
      });

    //  slick slider
    $(".customers-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,

        prevArrow: '<button class="slider-prev slider-btn btn active"></button>',
        nextArrow: '<button class="slider-next slider-btn btn"></button>',
        responsive: [
            {
                breakpoint: 981,
                settings: {
                  arrows: false,
                  dots: true
                }
            }
        ]
    });

    $('.slider-btn').click(function(){
        $('.slider-btn').removeClass('active');
        $(this).addClass('active');

    })

    $(".burger").click(function(){
        $(".burger").toggleClass("active")
        $(".nav").toggleClass("open")
    })

});