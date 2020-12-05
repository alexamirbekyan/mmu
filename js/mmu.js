/**
 * Created by KRM on 5/11/16.
 */

$(document).ready(function(){


    $('#mmu_testimo_slider').slick({

        dots: true,
        autoplay: true,
        arrows: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1
    });



    $('#blog_slider').slick({
        pagerColor: 'red',
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 850,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });









});
