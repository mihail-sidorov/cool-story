$(document).ready(() => {
    var user = detect.parse(navigator.userAgent);
    var deviceType = user.device.type;

    if (!(deviceType === 'Desktop' && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
        $('.photos-block__slider').addClass('photos-block__slider_mobile');
    }
    else {
        $('.photos-block__slider').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 980,
                    settings: {
                        slidesToShow: 4,
                    },
                },
                {
                    breakpoint: 780,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 540,
                    settings: {
                        slidesToShow: 2,
                    },
                },
            ],
        });
    }
});