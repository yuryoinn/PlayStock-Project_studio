$(function() {

    /* Slick Slider - Welcome */

    $('.slideshow').slick({
        infinite: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        speed: 1000,
        pauseOnHover: false 
    });

    /* Slick Slider - Mock-up-slider */

    $('.mockup-slider').slick({
      infinite: true,
      dots: false,
      autoplay: true,
      autoplaySpeed: 1800
  });

    /* Slick Slider - Review */

    $('.review-slider').slick({
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1700
    });

    /* TypeIn - Welcome */

    $('#typing').typeIt({
        strings: ["기본 개념 튜토리얼을.", "퀴즈를 통해 레벨업.", "모의투자로 마무리."], // 타이핑 텍스트 입력
        speed: 130, // 알파벳 타이핑 속도
        autoStart: true, // 자동 재생 사용
        breakLines: false, // 줄 바꿈 사용안함
        loop: true
    });

    /* AOS Scroll Reveal Animation */

    AOS.init({
      offset: 200,
      delay: 0,
      duration: 1000,
      easing: 'ease',
      once: false,
      mirror: true,
      anchorPlacement: 'top-bottom'
    });    

    AOS.init();

})

$(function(){

    /* Header Scroll Change */

    $(window).scroll(function(){
      if($(window).scrollTop() > 300) {
        $('header').addClass('active')
      }
      else {
        $('header').removeClass('active')
      }
    })

    /* Scroll Top */

    $(window).scroll(function(){
      if($(window).scrollTop() > 50) {
        $('.btn-top').addClass('active')
      }
      else {
        $('.btn-top').removeClass('active')  
      }
    })
    
  })

  /* Custom Mouse */

  let x = 0;
  let y = 0;
  let cursor_item;
  let mx = 0;
  let my = 0;
  let speed = 0.5;

  window.onload = function() {
    cursor_item = document.getElementsByClassName("custom-mouse")[0];
    window.addEventListener("mousemove", mouseFunc, false);

    function mouseFunc(e) {
      x = e.clientX;
      y = e.clientY;
    }
    loop();
  }

  function loop() {
    mx += (x - mx) * speed;
    my += (y - my) * speed;
    cursor_item.style.transform = "translate("+ mx + "px," + my + "px)";
    window.requestAnimationFrame(loop);
  }
