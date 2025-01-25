const categories = document.querySelectorAll(".category");

const categoriesContainer = document.querySelector(".categories-container");
const bodyWidth = document.querySelector("body").offsetWidth;
const categoriesPosition = document.querySelector(
  ".categories-slider-position"
);

const childWidth = categoriesContainer.children[0].offsetWidth;

categoriesPosition.style.width = `${Math.round(
  (bodyWidth /
    (childWidth * categoriesContainer.children.length +
      (bodyWidth / 100) * (categoriesContainer.children.length + 1))) *
    100
)}%`;

categoriesContainer.addEventListener("scroll", () => {
  categoriesPosition.style.left = `${Math.round(
    (categoriesContainer.scrollLeft /
      (childWidth * categoriesContainer.children.length +
        (bodyWidth / 100) * (categoriesContainer.children.length + 1))) *
      100
  )}%`;
});

function openCategory() {
  const goodsContainer = document.querySelector(".all-category-goods");
  goodsContainer.style.opacity = "1";
  goodsContainer.style.height = "300px";
  const from = goodsContainer.children[0].getBoundingClientRect().top;
  const to =
    goodsContainer.children[
      goodsContainer.children.length - 1
    ].getBoundingClientRect().bottom;
  const height =
    goodsContainer.children[
      goodsContainer.children.length - 1
    ].getBoundingClientRect().height;
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
