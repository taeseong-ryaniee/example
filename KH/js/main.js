$(function () {
	const swiper = new Swiper(".visual .visual_swiper", {
		slidesPerView: 'auto',
		loop: true,
		loopedSlides: 1,
		autoplay: {
			delay: 4000,
		},
		navigation: {
			nextEl: ".visual_next",
			prevEl: ".visual_prev",
		},
	});
	$(".visual .visual_swiper .btn_ctrl .visual_stop").on("click", function () {
		$(this).hide();
		$(".visual .visual_swiper .btn_ctrl .visual_play").show();
		visual_swiper.autoplay.stop();
	});
	$(".visual .visual_swiper .btn_ctrl .visual_play").on("click", function () {
		$(this).hide();
		$(".visual .visual_swiper .btn_ctrl .visual_stop").show();
		visual_swiper.autoplay.start();
	});
	if ($(window).width() > 740) {
		$(".list ul li").on("mouseenter", function () {
			$(".list ul li").removeClass("off");
			$(".list ul li").removeClass("on"); // 모든 리스트 아이템에서 'on'과 'off' 클래스를 제거  모든 리스트 아이템에서 'on'과 'off' 클래스를 제거
			$(this).addClass("on"); // 현재 아이템에 'on' 클래스를 추가하고 형제 아이템에 'off' 클래스를 추가
		}); // Add a missing closing parenthesis here
	} else if ($(window).width() < 740) {
		// Add a missing comma here
		$(".biz .list ul li").removeClass("on");
		$(".biz .list ul li").removeClass("off");
	}
});