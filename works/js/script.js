$(function () {
//スクロールイベント
$(window).on('scroll',function(){

//自身のスクロール量
let y = $(window).scrollTop();
console.log(y);

//各セクションの位置
let section1 = $('#month-1').offset().top -10;
let section2 = $('#month-2').offset().top -10;
let section3 = $('#month-3').offset().top -10;
let section4 = $('#month-4').offset().top -10;
let section5 = $('#month-5').offset().top -10;
let section6 = $('#month-6').offset().top -10;

//console.log(section6);

//自身のvスクロール量0以上かつsection1未満の時
if(y>0 && y<section1){
$('#g-nav li').removeClass('current');
}else if(y>=section1 && y<section2){
//ｙがsection1以上かつsection2未満
$('#list-1').addClass('current').siblings('li').removeClass('current');
}else if(y>=section2 && y<section3){
//ｙがsection2以上かつsection3未満
$('#list-2').addClass('current').siblings('li').removeClass('current');
}else if(y>=section3 && y<section4){
//ｙがsection3以上かつsection4未満
$('#list-3').addClass('current').siblings('li').removeClass('current');
}else if(y>=section4 && y<section5){
//ｙがsection4以上かつsection5未満
$('#list-4').addClass('current').siblings('li').removeClass('current');
}else if(y>=section3 && y<section4){
//ｙがsection3以上かつsection4未満
$('#list-3').addClass('current').siblings('li').removeClass('current');
}else if(y>=section4 && y<section5){
//ｙがsection4以上かつsection5未満
$('#list-4').addClass('current').siblings('li').removeClass('current');
}else if(y>=section5 && y<section6){
//ｙがsection5以上かつsection6未満
$('#list-5').addClass('current').siblings('li').removeClass('current');
}else if(y>=section6){
//ｙがsection6以上
$('#list-6').addClass('current').siblings('li').removeClass('current');
}


});


});

//多言語化用のリダイレクト
$('#btn-ja').on('cikck',function(){
$(this).href = '';
});

//イタリア語のリダイレクト
$('#btn-it').on('cikck',function(){
$(this).href = '';
});

//フランス語のリダイレクト
$('#btn-fr').on('cikck',function(){
$(this).href = '';
});