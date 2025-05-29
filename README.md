# 🎞️ Pluss Animations

**Modular Scroll-Reveal Animations Engine**  
Built by [Pluss Agency](https://www.plussagency.com) to enable beautiful, performant, and reusable animations in modern web projects.

> ✨ Built for devs, designers, and dreamers.

---

## 🚀 What is it?

Pluss Animations is a lightweight, modular scroll-reveal animation library powered by **IntersectionObserver** and **Web Animations API**, with zero external dependencies.

It allows you to animate any element on scroll using simple `data-*` attributes. No CSS classes needed, no GSAP required — but still fully extensible.

---

## 📦 Features

- 🧱 Modular animation system (fade, slide, zoom, rotate, blur, flip, etc.)
- 🎛️ Configurable via `data-*` attributes
- 🔁 Supports looping, alternate, reverse, and infinite animations
- 🧠 Fully JavaScript-based using Web Animations API
- ⚙️ Easily extendable with your own custom keyframes

---

## 🧪 Demo

[See it in action →](https://plussagency.github.io/pluss-animation-demo)  
_(coming soon: you can host it via GitHub Pages or CodeSandbox)_

---

## 🔧 Installation

git clone https://github.com/PlussAgency-eg/pluss-animation.git
 

Or just include it in your project:

```html
<link rel="stylesheet" href="src/pluss-animations.css" />
<script type="module" src="src/pluss-animations.js" defer></script>

💡 Usage
Add the scroll-reveal class to any element and configure it with attributes:

<div
  class="scroll-reveal"
  data-animate="slide-left"
  data-delay="200"
  data-duration="1000"
  data-easing="ease-out"
  data-iteration="infinite"
  data-direction="alternate"
>
  🚀 I'm animated!
</div>


🔁 Supported Attributes:

| Attribute        | Description                                            | Default  |
| ---------------- | ------------------------------------------------------ | -------- |
| `data-animate`   | Animation name (from the map)                          | `fadeUp` |
| `data-delay`     | Delay before animation (ms)                            | `0`      |
| `data-duration`  | Animation duration (ms)                                | `800`    |
| `data-easing`    | CSS easing (linear, ease, etc.)                        | `ease`   |
| `data-iteration` | Number of times to repeat or `infinite`                | `1`      |
| `data-direction` | Animation direction (`normal`, `reverse`, `alternate`) | `normal` |


🧩 Supported Animations
fadeUp, fadeDown

slideLeft, slideRight, slideUp, slideDown

zoomIn, zoomOut

rotateIn

flipIn

blurIn

You can add more by editing the keyframes in animations.js or adding modules in modules/.

🛠️ Folder Structure
css
Copy code
src/
├── core/
│   ├── observer.js
│   ├── utils.js
│   └── animationController.js
├── modules/
│   ├── fade.js
│   ├── slide.js
│   ├── zoom.js
│   └── ... (other animations)
├── animations.js
├── pluss-animations.css
└── pluss-animations.js
🧠 Philosophy
Built as part of the Pluss Starter Kit
We believe UI/UX animation should be:

Lightweight 💡

Declarative 👀

Reusable ♻️

Easy to maintain and scale for teams ⚙️

This project is actively maintained and open for collaboration.

🤝 Contributing
Fork the repo

Add new animations under /modules/

Register them in animations.js

Test and PR!

© Pluss Agency
Designed and developed with ❤️ in Egypt & the Gulf.
For custom animation systems or enterprise UI/UX work, contact us.

