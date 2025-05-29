import { fadeAnimations } from './modules/fade.js';
import { slideAnimations } from './modules/slide.js';
import { zoomAnimations } from './modules/zoom.js';

export const animations = {
  ...fadeAnimations,
  ...slideAnimations,
  ...zoomAnimations,
  // ممكن تضيف باقي الأنيميشنات هنا
};
