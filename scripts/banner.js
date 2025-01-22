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
    setTimeout(() => {
      const boughtNumber = document.querySelector(".bought-number");
      const alreadyBought = Number(boughtNumber.innerHTML);
      boughtNumber.innerHTML = `${alreadyBought + 1}`;
      boughtNumber.style.opacity = "1";
    }, 500);
    const cart = document
      .getElementsByClassName("cart-button")[0]
      .getBoundingClientRect();
    banner.children[2].animate(
      [
        {},
        {
          left: `${cart.x - banner.offsetLeft}px`,
          top: `${cart.y - banner.offsetHeight / 2}px`,
          scale: "0",
          opacity: "0",
        },
        {
          left: `0`,
          top: `0`,
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
