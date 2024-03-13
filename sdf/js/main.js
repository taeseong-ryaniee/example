$(document).ready(function(){
    //console.log('hello, world');
    //1. 스크롤 값이 0이라면, 스크롤 값이 0보다 크다면 header에 fixed라는 클래스를 줌(로직을짠다)
    $(window).scroll(function(){
        let scrolling = $(window).scrollTop(); //변수를 간단하게 명령을 내는 것
        //console.log(scrolling);
        if(scrolling > 0){
            //console.log('WhiteBanner')
            $(".header").addClass("fixed")
        }else{
            //console.log('Banner')
            $(".header").removeClass("fixed")
        }
    });//$(window).scroll end
});//$(document).ready end
