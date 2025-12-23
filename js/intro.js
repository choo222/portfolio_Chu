const homeTl = gsap.timeline({ paused: true });
homeTl
  .fromTo("#home .main",
    {opacity: 0, scale: 0,},
    {opacity: 1, scale: 1, duration: 1.5},
    "-=0.3"
  )
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
  
// intro
window.addEventListener("load", () => {
  document.body.classList.add("scroll-lock");
  
  setTimeout(() => {
    document.body.classList.remove("scroll-lock");
  }, 6500);
  
  gsap.delayedCall(6.5, () => {
    homeTl.play();
  });
});

gsap.registerPlugin(ScrambleTextPlugin);

const texts = [
  // "UXUI DESIGNER",
  "WEB PUBLISHER",
  "Creativity",
  "Usability",
  "Between Creativity and Usability."
];

const tl = gsap.timeline();

texts.forEach(text => {
  tl.to(".text", {
    duration: 1.5,
    scrambleText: {
      text,
      chars: "upperCase",
      revealDelay: 0,
      // speed: 0.7
    },
  });
});

document.querySelector('a[href="#home"]').addEventListener("click", () => {
  setTimeout(() => {
    homeTl.restart();
  }, 300);
});


// home .main 마우스 움직임에 따른 회전

const main = document.querySelector(".main");
const creativity = document.querySelector(".main-word.creativity");
const usability = document.querySelector(".main-word.usability");

const MAX_ROTATE = 5;
const BASE_FONT = 1.5;
const MAX_FONT = 2.5;

let isHomeActive = true;

window.addEventListener("mousemove", (e) => {
  if (!isHomeActive) return;

  const centerX = window.innerWidth / 2;
  const distance = e.clientX - centerX;

  const normalized = distance / centerX;

// 회전
  const rotateDeg = gsap.utils.clamp(
    -MAX_ROTATE,
    MAX_ROTATE,
    normalized * MAX_ROTATE
  );

  gsap.to(main, {
    rotate: rotateDeg,
    duration: 0.25,
    ease: "power2.out"
  });

// 글자크기
  const scaleValue = Math.min(Math.abs(normalized), 1);
  const fontSize = BASE_FONT + (MAX_FONT - BASE_FONT) * scaleValue;

  if (normalized < 0) {
    gsap.to(creativity, {
      fontSize: `${fontSize}rem`,
      duration: 0.25,
      ease: "power2.out"
    });

    gsap.to(usability, {
      fontSize: `${BASE_FONT}rem`,
      duration: 0.25,
      ease: "power2.out"
    });
  } else {
    gsap.to(usability, {
      fontSize: `${fontSize}rem`,
      duration: 0.25,
      ease: "power2.out"
    });

    gsap.to(creativity, {
      fontSize: `${BASE_FONT}rem`,
      duration: 0.25,
      ease: "power2.out"
    });
  }
});

window.addEventListener("mouseleave", () => {
  gsap.to([creativity, usability], {
    fontSize: "2rem",
    duration: 0.3,
    ease: "power2.out"
  });

  gsap.to(main, {
    rotate: 0,
    duration: 0.3,
    ease: "power2.out"
  });
});

// gsap.registerPlugin(ScrollTrigger);