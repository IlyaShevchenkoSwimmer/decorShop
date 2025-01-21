const banners = document.querySelectorAll(".banner-card");

banners.forEach((banner) => {
  banner.addEventListener("click", () => {
    const banners = document.querySelectorAll(".banner-card");
    banners.forEach((banner) => {
      banner.classList.remove("banner-card-inactive");
      banner.classList.remove("banner-card-active");
      banner.classList.add("banner-card-inactive");
    });
    banner.classList.remove("banner-card-inactive");
    banner.classList.add("banner-card-active");
  });
});
