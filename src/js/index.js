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
  // tab切换
  $(function(){
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
    tabCtrl('.workk');
  });




// })

