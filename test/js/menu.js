$(document).ready(function(){

    let window_w = $(window).width()
    let device_status = 'pc' //pc버전/모바일 버전
    if(window_w > 640){ //pc버전 
        device_status = 'pc'
    }else{ //모바일
        device_status = 'mobile'
    }
    console.log(device_status)
    $(window).resize(function(){
        window_w = $(window).width()
        if(window_w > 640){ //pc버전 
            device_status = 'pc'
        }else{ //모바일
            device_status = 'mobile'
        }
        console.log(device_status)
    })

	/* 메뉴에 마우스를 오버하면 
       .header .gnb
    header에 menu_open이라는 클래스를 추가
    
    메뉴에서 마우스를 아웃하면 (메뉴를 벗어나면)
    -- 오버해서 생긴 흰배경을 벗어나 아웃됨 
       .header 
    header에서 menu_open 클래스를 삭제 */
    /* tab키로만 메뉴를 이동했을때 메뉴에 접근하면 
    하위메뉴를 열어줘야함 */
    $('.header .gnb').on('mouseenter focusin', function(){
        if(device_status == 'pc'){
            $(".header").addClass("menu_open");
        }
    })
    $('.header').on('mouseleave', function(){
        $(".header").removeClass("menu_open");
    })
    /* 마지막메뉴에서 포커스가 아웃되면 메뉴를 모두 봤다고 판단하고
    열린 메뉴 닫기 */
    $('.header .gnb>ul>li:last-child>ul>li:last-child>a').on('focusout', function(){
        $(".header").removeClass("menu_open");
    })

    $('.header .gnb .gnb_open').on('click', function(){
        $(".header").addClass("menu_mobile");
    })
    $('.header .gnb .gnb_close').on('click', function(){
        $(".header").removeClass("menu_mobile");
    })
}); /* $(document).ready */