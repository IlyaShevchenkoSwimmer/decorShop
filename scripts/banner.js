const banners = document.querySelectorAll(".banner-card");

banners.forEach((banner) => {
  banner.addEventListener("click", () => {
    const banners = document.querySelectorAll(".banner-card");
    banners.forEach((banner) => {
      banner.classList.remove("banner-card-inactive");
      banner.classList.remove("banner-card-active");
      banner.classList.add("banner-card-inactive");
      banner.classList.remove("mobile-banner-card-inactive");
      banner.classList.remove("mobile-banner-card-active");
      banner.classList.add("mobile-banner-card-inactive");
    });
    banner.classList.remove("banner-card-inactive");
    banner.classList.add("banner-card-active");
    banner.classList.remove("mobile-banner-card-inactive");
    banner.classList.add("mobile-banner-card-active");
  });
  banner.children[6].addEventListener("click", () => {
    banner.children[2].animate(
      [
        {},
        {
          scale: "0",
          opacity: "0",
        },

        {
          scale: "1",
          opacity: "1",
        },
      ],
      {
        duration: 1500,
        iterations: 1,
      }
    );
  });
});
