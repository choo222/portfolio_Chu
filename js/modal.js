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