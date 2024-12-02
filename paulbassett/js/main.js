$(document).ready(function () {
  $(".header .open_gnb").on("click", function () {
    $(".header").addClass("mob");
  });
  $(".header .close_gnb").on("click", function () {
    $(".header").removeClass("mob");
  });
});

$(document).ready(function () {
  var swiper = new Swiper(".visual .visual_swiper", {
    /* 팝업을 감싼는 요소의 class명 */ effect: "fade",
    loop: true /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */,
    /* fade 효과 */
    autoplay: {
      /* 팝업 자동 실행 */ delay: 100,
    },

    pagination: {
      /* 몇개의 팝업이 있는지 보여주는 동그라미 */
      el: ".swiper-pagination" /* 해당 요소의 class명 */,
      clickable: true /* 클릭하면 해당 팝업으로 이동할 것인지 값 */,
    },
  });
});
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

document.addEventListener('aos:in', ({ detail }) => {
  console.log('animated in', detail);
});

document.addEventListener('aos:out', ({ detail }) => {
  console.log('animated out', detail);
});