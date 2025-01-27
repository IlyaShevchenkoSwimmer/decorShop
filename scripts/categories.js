const categories = document.querySelectorAll(".category");

const categoriesContainer = document.querySelector(".categories-container");

function openCategory() {
  const goodsContainer = document.querySelector(".all-category-goods");
  goodsContainer.style.opacity = "1";
  const from = goodsContainer.children[0].getBoundingClientRect().top;
  const to =
    goodsContainer.children[
      goodsContainer.children.length - 1
    ].getBoundingClientRect().bottom;
  const height =
    goodsContainer.children[
      goodsContainer.children.length - 1
    ].getBoundingClientRect().height;
  goodsContainer.style.height = `${height}px`;
  if (to - from < height + 15) {
    return;
  }
  const loadMoreGoods = document.querySelector(".load-more-goods");
  loadMoreGoods.style.height = "80px";
  loadMoreGoods.style.opacity = "1";
  loadMoreGoods.style.visibility = "visible";
}

categories.forEach((category) => {
  category.onclick = openCategory;
});

const loadMoreGoods = document.querySelector(".load-more-goods");

function showAllGoods() {
  const goodsContainer = document.querySelector(".all-category-goods");
  const from = goodsContainer.children[0].getBoundingClientRect().top;
  const to =
    goodsContainer.children[
      goodsContainer.children.length - 1
    ].getBoundingClientRect().bottom;
  const height =
    goodsContainer.children[
      goodsContainer.children.length - 1
    ].getBoundingClientRect().height;
  goodsContainer.style.height = `${to - from}px`;
  const loadMoreGoods = document.querySelector(".load-more-goods");
  loadMoreGoods.style.height = "0";
  loadMoreGoods.style.opacity = "0";
  loadMoreGoods.style.visibility = "hidden";
}

loadMoreGoods.onclick = showAllGoods;

const categoryItems = document.querySelectorAll(".all-category-item");

categoryItems.forEach((category) => {
  category.children[1].onclick = () => {
    const goodModal = document.querySelector(".single-good-modal");
    goodModal.style.opacity = "1";
    goodModal.style.zIndex = "250";
  };
  category.children[2].onclick = () => {
    const goodModal = document.querySelector(".single-good-modal");
    goodModal.style.opacity = "1";
    goodModal.style.zIndex = "250";
  };
  category.children[3].onclick = () => {
    const goodModal = document.querySelector(".single-good-modal");
    goodModal.style.opacity = "1";
    goodModal.style.zIndex = "250";
  };
  category.children[4].children[1].onclick = () => {
    const cart = document
      .getElementsByClassName("cart-button")[0]
      .getBoundingClientRect();
    category.children[1].animate(
      [
        {},
        {
          left: `${cart.x - category.offsetLeft}px`,
          top: `${cart.y - category.offsetHeight / 2}px`,
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
  };
});

const closeButton = document.querySelectorAll(".close-button");

closeButton.forEach((button) => {
  button.onclick = () => {
    button.parentElement.style.zIndex = "-20";
    button.parentElement.style.opacity = "0";
  };
});

const goodHeartButton = document.querySelectorAll(".good-heart-button");

goodHeartButton.forEach((button) => {
  button.onclick = () => {
    button.children[0].innerHTML = `&#x2665;`;
  };
});
