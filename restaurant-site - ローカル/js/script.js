//vegasの呼び出し
$('#main-visual').vegas({
  slides: [
    { src: "../img/main-1.webp" },
    { src: "../img/main-2.webp" },
    { src: "../img/main-3.webp" },
  ],
  timer: false,
  transition: 'blur',
  Animation: 'kenburns',
  delay: 6000,
  animationDuration: 1000,
});

$(function(){

  //ハンバーガーボタン
  //まず#g-navを非表示にする
  $('#g-nav').hide();
  //#ham-btnをon.clickしたら、thisにtoggleClassし、さらに#g-navをfadeToggleする
  $('#ham-btn').on('click',function(){
  $(this).toggleClass('is-active');
  $('#g-nav').fadeToggle(200);
  });
  
  //#g-nav aをon,clickしたら#g-navをfadeOutしてXを三本線に戻す
  $('#g-nav a').on('click',function(){
  $('#g-nav').fadeOut(200);
  $('#ham-btn').removeClass('is-active');
  });

//ajaxで外部データーを呼び出す
$('#news-list').load('../news.txt');


//カルーセル部分
$('.carousel-bxslider').bxSlider({
  ticker: true,
  speed: 40000,
  minSlides: 2,
  maxSlides: 6,
  slideWidth: 320,
});

//西暦を取得してフッターのfullYearに代入する
const fullYear = new Date().getFullYear();
if(fullYear >= 2025){
  $('#this-year').text('2024 - '+fullYear);
}else{
  $('#this-year').text(fullYear);
}


});
