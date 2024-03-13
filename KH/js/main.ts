import Swiper from 'swiper';
import $ from 'jquery'; // Import the jQuery library

$(function() {
    const visual_swiper = new Swiper(".visual_swiper", {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: '.visual_next',
            prevEl: '.visual_prev'
        }
    });

    $('.visual .btn_ctrl .visual_play').on('click', function () {
        $(this).hide();
        $('.visual .btn_ctrl .visual_stop').show();
        visual_swiper.autoplay.start();
    });
});