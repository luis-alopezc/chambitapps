$(document).ready(function(){

$(window).scroll(function(){
  scroll = $(window).scrollTop();

  if ($(window).width() > 480) {
    $(".header1").css({"margin-top":"-197px"});
    if (scroll > 100) {
      $(".menu").css({"background":"#000"});
      $(".menu").css({"padding":"25px 0"});
      $(".menu").addClass("shadow");
      $("#navbar").addClass("shadow2");
      $("nav ul li a").css({"color":"#fff"});
      $(".logo").css({"color":"#fff"});
    } else {
      $(".menu").css({"background":"transparent"});
      $(".menu").css({"padding":"0px 0"});
      $(".menu").removeClass("shadow");
      $("#navbar").removeClass("shadow2");
      $("nav ul li a").css({"color":"#fff"});
      $(".logo").css({"color":"#fff"});
    }
  }

  if ($(window).width() < 480) {
    $(".header1").css({"margin-top":"-510px"});
    if (scroll > 100) {
      $(".menu").css({"background":"#000"});
      $(".menu").css({"padding":"50px 0"});
      $(".menu").addClass("shadow");
      $("#navbar").addClass("shadow3");
      $("nav ul li a").css({"color":"#fff"});
      $(".logo").css({"color":"#fff"});
    } else {
      $(".menu").css({"background":"transparent"});
      $(".menu").css({"padding":"0px 0"});
      $(".menu").css({"padding":"0px 0"});
      $(".menu").removeClass("shadow");
      $("#navbar").removeClass("shadow3");
      $("nav ul li a").css({"color":"#fff"});
      $(".logo").css({"color":"#fff"});
    }
  }

})

if ($(window).width() < 1100) {
  $('.menu-icon').on('click', function() {
    $('nav').slideToggle();
  })
}

})
