var $ = require('./common/libs/zepto-modules/zepto');
require('./common/libs/zepto-modules/event');
require('./common/libs/zepto-modules/ajax');
require('./common/libs/zepto-modules/touch');

var Swiper = require('./common/libs/swiper/swiper.min.js');
var swiperAni = require('./common/libs/swiper/swiper.animate1.0.2.min.js');
var IScroll = require('./common/libs/iscroll/iscroll.js');



var audio=$('audio')[0]
$('.syu').click(function(){
	if(audio.paused){
		audio.play()
	}else{
		audio.pause()
	}
})
// edit index
$(".swiper-container").show();
$("#mainContainer").hide();
if(localStorage.resume){
      $(".swiper-container").hide();
      $("#mainContainer").show();
  }
    
    
var swiper = new Swiper('.swiper-container',{
  onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
    swiperAni.swiperAnimateCache(swiper); //隐藏动画元素 
    swiperAni.swiperAnimate(swiper); //初始化完成开始动画
  }, 
  onSlideChangeEnd: function(swiper){ 
    swiperAni.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画1
  } 
});

var myScroll;
$("#enter").click(function(){
	localStorage.resume="true";
	$(".swiper-container").hide();
	$("#mainContainer").show();
	

//	$.post('http://localhost:8000/skill',function(data){
//		var html=""
//		for(var i=0;i<data.length;i++){
//       html+="<li>"+data[i].category+data[i].level+"</li>"
//		}
//		$('#scroller ul').html(html)
//		
//		myScroll = new IScroll('#wrapper', { mouseWheel: true });
//		document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
//	})

	
})
$.post('http://localhost:8000/skill',function(data){
		var html=""
		for(var i=0;i<data.length;i++){
         html+="<li class='mos'>"+"<img src='../images/"+i+".jpg'>"+"<span>"+"<p>"+data[i].level+"</p>"+"<p>"+data[i].category+"</p>"+"<p>"+data[i].name+"</p>"+"</span>"+"</li>"
		}
		$('#scroller ul').html(html)
		
		myScroll = new IScroll('#wrapper', { mouseWheel: true });
		document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	})




$('#footer div').tap(function(){
	var targetApi=$(this).attr('id')
	$.post('http://localhost:8000/'+targetApi,function(data){
		var html=""
		for(var i=0;i<data.length;i++){
        html+="<li class='mos'>"+"<img src='../images/"+i+".jpg'>"+"<span>"+"<p>"+data[i].level+"</p>"+"<p>"+data[i].category+"</p>"+"<p>"+data[i].name+"</p>"+"</span>"+"</li>"
		}
		$('#scroller ul').html(html)
	  myScroll.scrollTo(0,0)
	  myScroll.refresh()
	})
})
 