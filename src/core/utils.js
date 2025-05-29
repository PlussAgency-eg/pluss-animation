export function addClass(el, className) {
    if (!el.classList.contains(className)) {
      el.classList.add(className);
    }
  }
  
  export function setStyles(el, styles) {
    for (const [key, value] of Object.entries(styles)) {
      el.style.setProperty(key, value);
    }
  }