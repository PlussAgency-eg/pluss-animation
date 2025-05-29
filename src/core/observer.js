import { animateElement } from './animationController.js';

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateElement(entry.target);
      observer.unobserve(entry.target);
    }
  });
});

export function observeElement(el) {
  observer.observe(el);
}

export function initScrollAnimations() {
  const elements = document.querySelectorAll('.scroll-reveal');
  elements.forEach(el => observeElement(el));
}

