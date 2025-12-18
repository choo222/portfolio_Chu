const sections = [
  ".state",
  ".publishing-sec",
  ".uxui-sec"
];

sections.forEach((selector) => {
  const section = document.querySelector(selector);
  if (!section) return;

  const btn = section.querySelector(".icons-btn");
  const text = section.querySelector(".icons-btn-txt");
  const iconBtns = section.querySelectorAll(".icon-btn");

  const tl = gsap.timeline({ paused: true });

  tl.to(text, {
    y: -16,
    opacity: 0,
    duration: 0.25,
    ease: "power2.out"
  })
  .to(iconBtns, {
    y: 0,
    opacity: 1,
    duration: 0.35,
    stagger: 0.1,
    ease: "power2.out"
  }, "-=0.1");

  btn.addEventListener("mouseenter", () => tl.play());
  btn.addEventListener("mouseleave", () => tl.reverse());
});