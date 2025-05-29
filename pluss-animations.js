# محتوى ملف JavaScript (pluss-animations.js)
pluss_animations_js = """
// Pluss Animation Library - JS
// Version: 1.0.0
// Author: Pluss Agency

document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(
    ".fade-in-up, .fade-in-down, .zoom-in, .scroll-reveal"
  );

  function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    animatedElements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < triggerBottom) {
        el.classList.add("animate");
      } else {
        el.classList.remove("animate");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});