const categories = document.querySelectorAll(".category");

function openCategory() {
  const goodsContainer = document.querySelector(".all-category-goods");
  goodsContainer.style.opacity = "1";
  goodsContainer.style.height = "300px";
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
  goodsContainer.style.height = `${to - from}px`;
  const loadMoreGoods = document.querySelector(".load-more-goods");
  loadMoreGoods.style.height = "0";
  loadMoreGoods.style.opacity = "0";
  loadMoreGoods.style.visibility = "hidden";
}

loadMoreGoods.onclick = showAllGoods;
