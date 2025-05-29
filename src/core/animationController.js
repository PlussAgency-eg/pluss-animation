import { animations } from '../animations.js';

export function animateElement(el) {
  // قراءة بيانات الأنيميشن من data attributes
  const animationName = el.dataset.animate || 'fadeUp'; // افتراضي fadeUp
  const delay = parseInt(el.dataset.delay) || 0;
  const duration = parseInt(el.dataset.duration) || 800;
  const easing = el.dataset.easing || 'ease';
  const iteration = el.dataset.iteration || 1; // عدد التكرار (looping)
  const direction = el.dataset.direction || 'normal'; // normal, reverse, alternate, alternate-reverse

  // جلب keyframes المناسبة من الـ animations map
  const keyframes = animations[animationName];

  if (!keyframes) {
    console.warn(`Animation "${animationName}" not found in animations map.`);
    return;
  }

  // خيارات الأنيميشن
  const options = {
    delay,
    duration,
    easing,
    iterations: iteration === 'infinite' ? Infinity : Number(iteration),
    direction,
    fill: 'forwards',
  };

  // تطبيق الأنيميشن باستخدام Web Animations API
  el.animate(keyframes, options);
}
