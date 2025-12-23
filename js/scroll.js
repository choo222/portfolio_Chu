// gsap.registerPlugin(ScrollTrigger);

// const homeTl = gsap.timeline({ paused: true });
// homeTl
//   .fromTo("#home .main",
//     {opacity: 0, scale: 0,},
//     {opacity: 1, scale: 1, duration: 1.5},
//     "-=0.3"
//   )
//   .fromTo(".bg-txt1",
//     { opacity: 0, x: -300 },
//     { opacity: 1, x: 0, duration: 1 }
//   )
//   .fromTo(".bg-txt2",
//     { opacity: 0, y: 300, rotation: 90 },
//     { opacity: 1, y: 0, rotation: 90, duration: 1 },
//     "-=0.6"
//   )
//   .fromTo(".bg-txt3",
//     { opacity: 0, y: -300, rotation: -90 },
//     { opacity: 1, y: 0, rotation: -90, duration: 1 },
//     "-=0.6"
//   );

// window.addEventListener("load", () => {
//   gsap.delayedCall(7, () => {
//     homeTl.play();
//   });
// });

// document.querySelector('a[href="#home"]').addEventListener("click", () => {
//   setTimeout(() => {
//     homeTl.restart();
//   }, 300);
// });
