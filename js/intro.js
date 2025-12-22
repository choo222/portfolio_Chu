// //use the defaults
// gsap.to(element, {duration: 1, scrambleText: "THIS IS NEW TEXT"});

// //or customize things:
// gsap.to(element, {
//   duration: 1, 
//   scrambleText: {
//     text: "THIS IS NEW TEXT", 
//     chars: "XO", 
//     revealDelay: 0.5, 
//     speed: 0.3, 
//     newClass: "myClass"
//   }
// });

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