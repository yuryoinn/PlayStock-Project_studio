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

  let cursorItem;
  let circle;
  let x=0, y = 0;
  let mx=0, my = 0;

  window.onload = function(){
    
    cursorItem = document.querySelector(".cursorItem");
    circle = cursorItem.querySelector(".circle");    

    window.addEventListener("mousemove", function(e){
        x = e.clientX;
        y = e.clientY;
        cursorItem.style.transform = "translate("+ x +"px, "+ y + "px )";
    });
    
    loop();

    /* Progressive Bar */

    bar = document.getElementsByClassName("bar")[0];
    
}

function loop(){
    mx += (x - mx ) * .09;
    my += (y - my ) * .09; 
    cursorItem.style.transform = "translate("+ mx +"px, "+ my + "px )";

    requestAnimationFrame(loop);
}

/* Progressive Bar */

let scrollTop = 0;
let bar;


window.addEventListener("scroll", function(e){
    scrollTop = document.documentElement.scrollTop;

    // 가로 퍼센트값 = 현재 스크롤 탑 위치 / (문서 전체 길이 - 윈도우 창 높이 ) * 100;
    let per = Math.ceil(scrollTop / (document.body.scrollHeight - window.outerHeight) * 100);
    console.log(per);

    bar.style.width = per + "%";

}, false)
