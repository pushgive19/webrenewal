var swiper = new Swiper(".main__slide", {
  // spaceBetween: 30,
  // centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".slide__pager",
    clickable: true,
  },
  navigation: {
    nextEl: ".slide__next",
    prevEl: ".slide__prev",
  },
});

var swiper = new Swiper(".find__slide", {
  // spaceBetween: 30,
  // centeredSlides: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  loop: true,
  pagination: {
    el: ".find__pager",
    clickable: true,
  },
});
