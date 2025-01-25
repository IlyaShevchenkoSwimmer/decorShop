const blog = document.querySelector(".blog");
const bodyWidth = document.querySelector("body").offsetWidth;
const blogPosition = document.querySelector(".blog-slider-position");

const childWidth = blog.children[0].offsetWidth;

blogPosition.style.width = `${Math.round(
  (bodyWidth /
    (childWidth * blog.children.length +
      (bodyWidth / 300) * (blog.children.length - 1))) *
    100
)}%`;

blog.addEventListener("scroll", () => {
  blogPosition.style.left = `${Math.round(
    (blog.scrollLeft /
      (childWidth * blog.children.length +
        (bodyWidth / 300) * (blog.children.length - 1))) *
      100
  )}%`;
});
