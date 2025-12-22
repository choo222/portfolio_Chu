gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: "#intro",
  start: "bottom top",
  onEnter: () => {
    gsap.to(".nav-bar", {
      bottom: "1.5rem",
      duration: 0.4,
      ease: "power2.out"
    });
  },
  onLeaveBack: () => {
    gsap.to(".nav-bar", {
      bottom: "-5rem",
      duration: 0.4,
      ease: "power2.in"
    });
  }
});

const homeTl = gsap.timeline({ paused: true });
homeTl
  .fromTo(".bg-txt1",
    { opacity: 0, x: -300 },
    { opacity: 1, x: 0, duration: 1 }
  )
  .fromTo(".bg-txt2",
    { opacity: 0, y: 300, rotation: 90 },
    { opacity: 1, y: 0, rotation: 90, duration: 1 },
    "-=0.6"
  )
  .fromTo(".bg-txt3",
    { opacity: 0, y: -300, rotation: -90 },
    { opacity: 1, y: 0, rotation: -90, duration: 1 },
    "-=0.6"
  );

ScrollTrigger.create({
  trigger: "#home",
  start: "top 70%",
  onEnter: () => homeTl.restart()
});

document.querySelector('a[href="#home"]').addEventListener("click", () => {
  setTimeout(() => {
    homeTl.restart();
  }, 300);
});
