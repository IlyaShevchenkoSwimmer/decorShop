let currentSlide = 1;

setInterval(() => {
  const blog = document.querySelector(".blog");
  const blogSelector = document.querySelectorAll(".scroll-blog");
  const bodyWidth = document.querySelector("body").offsetWidth;
  const maxWidth = blog.children[0].offsetWidth * blog.children.length;
  const howMuchSlides = Math.ceil(maxWidth / bodyWidth);
  if (currentSlide < howMuchSlides) {
    blog.style.transform = `translateX(-${currentSlide * bodyWidth}px)`;
    currentSlide++;
  } else if (currentSlide === howMuchSlides) {
    blog.style.transform = `translateX(0px)`;
    currentSlide = 1;
  }
  blogSelector.forEach((selector, index) => {
    if (index === currentSlide - 1) {
      selector.className = "scroll-blog active";
    } else {
      selector.className = "scroll-blog";
    }
  });
}, 6000);

const blog = document.querySelector(".blog");
const bodyWidth = document.querySelector("body").offsetWidth;
const blogSelector = document.querySelectorAll(".scroll-blog");

blogSelector.forEach((selector, index) => {
  selector.onclick = () => {
    blog.style.transform = `translateX(-${index * bodyWidth}px)`;
    currentSlide = index + 1;
    blogSelector.forEach((selector, index) => {
      if (index === currentSlide - 1) {
        selector.className = "scroll-blog active";
      } else {
        selector.className = "scroll-blog";
      }
    });
  };
});
