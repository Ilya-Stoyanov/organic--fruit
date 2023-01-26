$(document).ready(function () {
    $(".customer-starts").starRating({
        totalStars:5,
        strokeColor: '#F1B90B',
        ratedColor: '#F1B90B',
        starSize: 23,
        readOnly: true,
        strokeWidth: 20,
      });

    //   slider
    $(".customers-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="btn slider-btn slider-prev"></button>',
        nextArrow: '<button class="btn slider-btn slider-next active"></button>',
        responsive: [
            {
                breakpoint: 981,
                settings: {
                    arrows: false,
                    dots: true
                }
              },
        ]
    });

    $('.slider-btn').click(function(){
        $('.slider-btn').removeClass("active");
        $(this).addClass("active")
    });

    $(".burger").click(function(){
        $(".burger").toggleClass("active")
        $(".nav").toggleClass("active")
        $("body").toggleClass("hidden")

    })
});