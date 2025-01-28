function switchOnMobileCategories() {
  const categoriesSwiperHTML = document.querySelector(".categories-swiper");
  const bodyWidth = document.querySelector("body").offsetWidth;

  if (bodyWidth < 751) {
    categoriesSwiperHTML.classList.remove("categories-swiper");
    categoriesSwiperHTML.classList.add("categories-swiper-mobile");
    const swiperCategoriesMobile = new Swiper(".categories-swiper-mobile", {
      // Optional parameters
      // direction: "vertical",
      // loop: true,

      // // If we need pagination
      // pagination: {
      //   el: ".swiper-pagination",
      // },

      // // Navigation arrows
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      slidesPerView: 2,
    });
  } else {
    categoriesSwiperHTML.classList.remove("categories-swiper-mobile");
    categoriesSwiperHTML.classList.add("categories-swiper");
    const swiperCategories = new Swiper(".categories-swiper", {
      // Optional parameters
      // direction: "vertical",
      // loop: true,

      // // If we need pagination
      // pagination: {
      //   el: ".swiper-pagination",
      // },

      // // Navigation arrows
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      slidesPerView: 4,
    });
  }
}

switchOnMobileCategories();

function switchOnMobileBlog() {
  const blogSwiperHTML = document.querySelector(".blog-swiper");
  const bodyWidth = document.querySelector("body").offsetWidth;

  if (bodyWidth < 781) {
    blogSwiperHTML.classList.remove("blog-swiper");
    blogSwiperHTML.classList.add("blog-swiper-mobile");
    const swiperBlogMobile = new Swiper(".blog-swiper-mobile", {
      // Optional parameters
      // direction: "vertical",
      // loop: true,

      // // If we need pagination
      // pagination: {
      //   el: ".swiper-pagination",
      // },

      // // Navigation arrows
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      slidesPerView: 1,
    });
  } else if (bodyWidth < 1241) {
    blogSwiperHTML.classList.remove("blog-swiper");
    blogSwiperHTML.classList.add("blog-swiper-middle");
    const swiperBlogMiddle = new Swiper(".blog-swiper-middle", {
      // Optional parameters
      // direction: "vertical",
      // loop: true,

      // // If we need pagination
      // pagination: {
      //   el: ".swiper-pagination",
      // },

      // // Navigation arrows
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      slidesPerView: 2,
    });
  } else {
    blogSwiperHTML.classList.remove("blog-swiper-mobile");
    blogSwiperHTML.classList.add("blog-swiper");
    const swiperBlog = new Swiper(".blog-swiper", {
      // Optional parameters
      // direction: "vertical",
      // loop: true,

      // // If we need pagination
      // pagination: {
      //   el: ".swiper-pagination",
      // },

      // // Navigation arrows
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      slidesPerView: 3,
    });
  }
}

switchOnMobileBlog();
