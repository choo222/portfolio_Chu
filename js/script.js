// window.addEventListener("load", function () {
//   history.replaceState(null, "", location.pathname);
//   window.scrollTo(0, 0);
// });

// 
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('.nav-bar .nav');
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

  // 3) 새로고침 시 항상 처음 화면으로 돌아가게 하려면 해시 제거
  window.addEventListener("beforeunload", function () {
    // 주소창에서 해시 제거 (이러면 새로고침 후 URL에 해시가 남지 않음)
    try {
      history.replaceState(null, "", location.pathname + location.search);
    } catch (e) {
      // 일부 환경에서는 실패할 수 있으나 무시해도 됨
    }
  });

  // 4) 네비게이션 클릭: active 토글 + 스무스 스크롤 (명시)
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      // active 관리 (info-btn은 .nav가 아니므로 영향 없음)
      navLinks.forEach(n => n.classList.remove('active'));
      this.classList.add('active');

      const targetHash = this.getAttribute('href');
      const targetEl = document.querySelector(targetHash);

      if (targetEl) {
        // 클릭할 때는 명시적으로 부드럽게 스크롤
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      // URL 해시를 히스토리에 남기되 강제 이동을 막기 위해 replaceState 사용
      history.replaceState(null, "", targetHash);
    });
  });
});


// intro
$(function () {
  $(".intro").on("click", function () {
    $(".intro.left").css("left", "-100%");
    $(".intro.right").css("right", "-100%");
    $("#home").css("transform","scale(1)")
  });
});

// nav active클래스
$(function () {
  $('.nav-bar .nav').on('click', function () {
    $('.nav-bar .nav').removeClass('active');
    $(this).addClass('active');
  });
});

//info-box hover
$(function(){
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
$(function () {
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
    $(".modal").fadeIn();
  });

  $(".close-btn").click(function(){
    $(".modal").fadeOut();
  });
  $(".modal-bg").click(function(){
    $(".modal").fadeOut();
  });
});



