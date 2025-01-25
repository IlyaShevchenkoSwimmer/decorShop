const blog = document.querySelector(".blog");
const bodyWidthForBlog = document.querySelector("body").offsetWidth;
const blogPosition = document.querySelector(".blog-slider-position");

const childWidthForBlog = blog.children[0].offsetWidth;

blogPosition.style.width = `${Math.round(
  (bodyWidthForBlog / (childWidthForBlog * blog.children.length)) * 100
)}%`;

blog.addEventListener("scroll", () => {
  blogPosition.style.left = `${Math.round(
    (blog.scrollLeft /
      (childWidthForBlog * blog.children.length +
        (bodyWidthForBlog / 300) * blog.children.length)) *
      100
  )}%`;
});
