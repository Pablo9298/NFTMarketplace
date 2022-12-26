const swiperPopular = new Swiper('.popular__swiper', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,

  autoplay: {
    delay: 3000,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 20
    },

    650: {
      slidesPerView: 3,
      spaceBetween: 20
    },

    1000: {
      slidesPerView: 4,
      spaceBetween: 30
    },

    1500: {
      slidesPerView: 6,
      spaceBetween: 30
    }
  }
})

const swiperTranding = new Swiper('.tranding__swiper', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,

  autoplay: {
    delay: 3000,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {

    850: {
      slidesPerView: 2,
      spaceBetween: 20
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 30
    },

    1700: {
      slidesPerView: 4,
      spaceBetween: 40
    },
  }
});

const swiperInsights = new Swiper('.insights__swiper', {
  grabCursor: true,
  loop: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      origin: "left center",
      translate: ["-5%", 0, -200],
      rotate: [0, 100, 0],
    },
    next: {
      origin: "right center",
      translate: ["5%", 0, -200],
      rotate: [0, -100, 0],
    },
  },

  autoplay: {
    delay: 5000,
  },
});