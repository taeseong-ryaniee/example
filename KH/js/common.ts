/*
    파일명 : common.js
    작성자 : 문미영
    작성일 : 2024.02.28
    설  명 : 모든 페이지에서 작동되는 jqeury (header, footer에서 작동되는 jqeury)
*/

var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
jQuery(document).ready(function ($) {
    if (!isMobile) {
        'mobile'
    } else {
        'pc'
    }
    $('.header .gnb ul.depth1 > li').on('mouseenter focusin', function () {
        if (!isMobile) {
            $('.header').addClass('menu_over')
            $('.header .gnb ul.depth1 > li').removeClass('on')
            $(this).addClass('on')
        }
    });
    $('.header').on('mouseleave', function () {
        if (!isMobile) {
            $('.header').removeClass('menu_over')
            $('.header .gnb ul.depth1 > li').removeClass('on')
        }
    });
    $('.header .tnb .lang').on('focusin', function () {
        if (!isMobile) {
            $('.header').removeClass('menu_over')
            $('.header .gnb ul.depth1 > li').removeClass('on')
        }
    });
});
