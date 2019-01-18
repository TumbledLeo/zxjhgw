// $(function(){
//   $('.banner .read').hover(function(){
//     $(this).find('img').attr("src","img/more2.png");
//   },function(){
//     $(this).find('img').attr("src","img/more.png");
//   });
//   $('.cang .read').hover(function(){
//     $(this).find('img').attr("src","img/more11.png");
//   },function(){
//     $(this).find('img').attr("src","img/more1.png");
//   });
//   $('.bo  a').hover(function(){
//     $(this).find('img').attr("src","img/more3.png");
//   },function(){
//     $(this).find('img').attr("src","img/more33.png");
//   });


// })
$(function(){

    // tab切换
function tabCtrl(ele) {
  $(ele + ' .tabContents .tabContent').hide().eq(0).show();
  $(ele + ' .tabs .tab').eq(0).addClass('active');
  $(ele + ' .tabs .tab').click(function (e) {
      e.stopPropagation();
      e.preventDefault();
      if ($(this).hasClass('active')) {
          return;
      }
      $(this).addClass('active').siblings().removeClass('active');
      var me = $(this);
      var index = 0;
      $(ele + ' .tabs .tab').each(function (i) {
          if (me.get(0) === $(this).get(0)) {
              index = i;
          }
      });
      $(ele + ' .tabContents .tabContent').hide().eq(index).fadeIn(500);
  });
}
tabCtrl('.work');

  $('.navbar-toggler').click(function(){
    $(this).fadeOut();
    $('.navbar-collapse').slideDown();
  });
  $('.close').click(function(){
    $('.navbar-toggler').fadeIn();
    $('.navbar-collapse').slideUp();
  });
});

$(function(){
  $('.btn-blur').on('click',function(){
      $('.content').addClass('blur');
      $('.elastic-layer').removeClass('close1');
      event.stopPropagation();
      $(this).css("display","none");
      stop();
     //  $("body,html").addClass('noscroll');

       $('.elastic-layer').on('touchmove',function(){ 
        　event.preventDefault(); 
        });
  });

  $(".login-panel").on('click',function(){
      event.stopPropagation();
  });

  $('.close').on('click',function(){
      $('.content').removeClass('blur');
      $('.elastic-layer').addClass('close1');
      $('.btn-blur').css("display","block");
      move();
    //  $("body,html").removeClass('noscroll');
  });
  
//实现滚动条无法滚动
var mo=function(e){e.preventDefault();};
  /***禁止滑动***/
function stop(){
  document.body.style.overflow='hidden';        
  document.addEventListener("touchmove",mo,false);//禁止页面滑动
}
/***取消滑动限制***/
function move(){
  document.body.style.overflow='';//出现滚动条
  document.removeEventListener("touchmove",mo,false);        
}
});