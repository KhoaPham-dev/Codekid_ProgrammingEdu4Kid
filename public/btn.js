//$(function() {
//(function() {
var navBtn= function() {
    var $navcur = $(".nav-current");
    var $nav = $("#nav");
    var current = ".current";   
    var itemW = $nav.find(current).innerWidth(); 
    

    $navcur.css({
      width: itemW,
      left: defLeftW
    });

    $nav.find("a").hover(function() {
      var index = $(this).index(); 
      var leftW = $(this).position().left; 
      var currentW = $nav.find("a").eq(index).innerWidth(); 
      $navcur.stop().animate({
        left: leftW,
        width: currentW
      }, 300);

    }, function() {
      $navcur.stop().animate({
        left: defLeftW,
        width: itemW
      }, 300)
    })
   }
//})();
//
//});

window.addEventListener('load', navBtn);
