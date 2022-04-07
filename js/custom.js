$(document).ready(function(){ 
/*--------네비게이션---------*/
  $("#m_nav > ul > li").mouseover(function(){
	  $(this).children(".sub").stop().slideDown();
  });
	$("#m_nav > ul > li").mouseleave(function(){
	  $(this).children(".sub").stop().slideUp();
  });



/*마우스 over*/
$(".m_content div").each(function(){
         if(this.id == "c1"){
            $(this).hover(function() {
  $(this).find("img").attr("src","c1_m.png");
}, function(){
  $(this).find("img").attr("src","c1.png");
});
         }
          else if(this.id == "c2"){
            $(this).children("a").hover(function() {
  $(this).find("img").attr("src","c2_m.png");
}, function(){
  $(this).find("img").attr("src","c2.png");
});
   }
       });
	   
	  	   
	   
/*-------index---------------------------------------------*/

 $('#s11').hover(function(){
	$(this).css('background','#ffe3e3');
	$('#s11>a').css('color','#fff');
 },function(){
	$(this).css('background','#fff');
	$('#s11>a').css('color','#000');	 
 });

 $('#s21').hover(function(){
	$(this).css('background','#ffe3e3');
	$('#s21>a').css('color','#fff');
 },function(){
	$(this).css('background','#fff');
	$('#s21>a').css('color','#000');	 
 });
 
  $('#s31').hover(function(){
	$(this).css('background','#ffe3e3');
	$('#s31>a').css('color','#fff');
 },function(){
	$(this).css('background','#fff');
	$('#s31>a').css('color','#000');	 
 });


	   
/*---------마우스 hover 이미지 교체----------*/	   
$('.m_content li').each(function() {

  var nowImg = $(this).find('img');  //호버한 부분의 img파일 찾기
  var srcName = nowImg.attr('src');  //호버한 부분의 이미지 주소값 src가지고오기
  var newSrc = srcName.substring(0, srcName.lastIndexOf('.'));
  //.png , .jpg 와같이 파일명 자르기. 뒤에서부터 시작해서 '.'점있는 곳 까지 컷! 

 //호버이벤트
  $(this).hover(function() { 
    $(this).find('img').attr('src', newSrc+ 'm.' + /[^.]+$/.exec(srcName)); //hover시 _on붙이기
  }, function() {
    $(this).find('img').attr('src', newSrc + '.' + /[^.]+$/.exec(srcName)); //hover시 _on 때기
  });


});


/*-------special day : button-------------------------------------------*/

 $('#more1').hover(function(){
	$(this).css('background','#ffe3e3');
	$('#more1>a').css('color','#fff');
 },function(){
	$(this).css('background','#fff');
	$('#more1>a').css('color','#000');	 
 });
 
  $('#more2').hover(function(){
	$(this).css('background','#ffe3e3');
	$('#more2>a').css('color','#fff');
 },function(){
	$(this).css('background','#fff');
	$('#more2>a').css('color','#000');	 
 });


 $('#more3').hover(function(){
	$(this).css('background','#ffe3e3');
	$('#more3>a').css('color','#fff');
 },function(){
	$(this).css('background','#fff');
	$('#more3>a').css('color','#000');	 
 });


 $('#more4').hover(function(){
	$(this).css('background','#ffe3e3');
	$('#more4>a').css('color','#fff');
 },function(){
	$(this).css('background','#fff');
	$('#more4>a').css('color','#000');	 
 });




});//대문