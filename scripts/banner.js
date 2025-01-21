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
  banner.children[6].addEventListener("click", () => {
    banner.children[2].animate(
      [
        {
          scale: "1",
          opacity: "1",
        },
        {
          scale: "0.6",
          opacity: "0.5",
          top: "-17dvh",
        },
        {
          scale: "0.2",
          opacity: "0.1",
          top: "60dvh",
        },
      ],
      {
        duration: 1000,
        iterations: 1,
      }
    );
  });
});
