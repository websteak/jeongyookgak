// $(document).ready();
window.onload = function () {
  new Swiper(".sw-event", {
    // direction: "horizontal"
    slidesPerView: 1, //슬라이드 개수
    spaceBetween: 10, //슬라이드 간격
    loop: false, //자동 반복
    // autoplay: {
      //자동 시작
      // delay: 2000, //지연시간 2초
      // disableOninteraction: false,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};
