// 해시제거
window.addEventListener("load", () => {
  if (location.hash) {
    history.replaceState(null, "", location.pathname);
  }
});

window.addEventListener("load", function () {
  history.replaceState(null, "", location.pathname);
  window.scrollTo(0, 0);
});


document.addEventListener("DOMContentLoaded", function () {
  const html = document.documentElement;

  // 1) 브라우저의 자동 스크롤 복원 방지 (리로드 시 위치 복원 차단)
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  // 2) 새로고침/로드 시: 스무스 임시 비활성화 -> 즉시 최상단으로 점프 -> 스무스 복원
  // (CSS에서 html { scroll-behavior: smooth }가 있다면 JS에서 덮어씌웁니다)
  html.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);

  // 아주 짧은 지연 후에 스무스 복원 (이 값은 환경에 따라 40~100ms로 조정 가능)
  setTimeout(() => {
    html.style.scrollBehavior = "smooth";
  }, 50);

});


// intro
// $(function () {
//   $(".intro").on("click", function () {
//     $(".intro.left").css("left", "-100%");
//     $(".intro.right").css("right", "-100%");
//     $("#home").css("transform","scale(1)")
//   });
// });

// nav-bar
const sections = document.querySelectorAll(".page-section");
const gnbLinks = document.querySelectorAll(".nav");

const observerOptions = {
  root: null,
  threshold: 0.6
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const currentId = entry.target.id;

    gnbLinks.forEach(link => {
      link.classList.toggle(
        "active",
        link.dataset.target === currentId
      );
    });
  });
}, observerOptions);

sections.forEach(section => observer.observe(section));

//info-box hover
$(document).ready(function(){
  $('.info-btn').hover(function(){
    $(this).next().fadeIn();
  },function(){
    $(this).next().fadeOut();
  });
});

// process 버튼
document.querySelectorAll(".icons-btn").forEach((btn) => {
  const text = btn.querySelector(".icons-btn-txt");
  const icons = btn.querySelectorAll(".icon-btn");

  const tl = gsap.timeline({ paused: true });

  tl.to(text, {
    y: -16,
    opacity: 0,
    duration: 0.25,
    ease: "power2.out"
  })
  .to(icons, {
    y: 0,
    opacity: 1,
    duration: 0.35,
    stagger: 0.1,
    ease: "power2.out"
  }, "-=0.1");

  btn.addEventListener("mouseenter", () => tl.play());
  btn.addEventListener("mouseleave", () => tl.reverse());
});

// design
$(document).ready(function(){
  const designInner = $(".design-inner");
  const nav = document.querySelectorAll(".nav");
  
  $(".uxui-btn").on("click", function () {
    designInner.css("left", "0");
  });
  $(".graphic-btn").on("click", function () {
    designInner.css("left", "-200%");
  });
  $(nav).on("click", function () {
    designInner.css("left", "-100%");
  });
});


// Contact - thank-btn, modal close-btn
$(document).ready(function(){

  $(".thank").click(function(){
    $(".contact-modal").fadeIn();
  });

  $(".close-btn").click(function(){
    $(".modal").fadeOut();
  });
  $(".modal-bg").click(function(){
    $(".modal").fadeOut();
  });
});



