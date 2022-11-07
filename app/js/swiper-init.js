const galleryFounder = new Swiper(".gallery-founder", {
  preloadImages: false,
  lazy: {
    loadOnTransitionStart: false,
    loadPrevNext: false,
  },
  watchSlidesProgress: true,
  watchSlidesVisibility: true,

  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  nested: true,
  slideToClickedSlide: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const galleryStudents = new Swiper(".gallery-students", {
  preloadImages: false,
  lazy: {
    loadOnTransitionStart: false,
    loadPrevNext: false,
  },
  watchSlidesProgress: true,
  watchSlidesVisibility: true,

  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  nested: true,
  slideToClickedSlide: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const galleryClasses = new Swiper(".gallery-classes", {
  preloadImages: false,
  lazy: {
    loadOnTransitionStart: false,
    loadPrevNext: false,
  },
  watchSlidesProgress: true,
  watchSlidesVisibility: true,

  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  nested: true,
  slideToClickedSlide: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
