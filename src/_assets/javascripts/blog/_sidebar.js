$(document).ready(function(e) {
  return false

  nav = $('#floating-nav')
  nav.css("z-index", "99999").css("right", "0").css("position", "absolute");
  // get initial top offset of navigation 
  var floating_navigation_offset_top = nav.offset().top;
  // define the floating navigation function
  var floating_navigation = function(){
      // current vertical position from the top
      var scroll_top = $(window).scrollTop(); 
      // if scrolled more than the navigation, change its 
      // position to fixed to float to top, otherwise change 
      // it back to relative
      if (scroll_top > floating_navigation_offset_top) { 
          right = $('#content').first().offset().left
          nav.css({ 'position': 'fixed', 'top':0, 'left': right, 'width': 158 });
      } else {
          nav.css({ 'position': 'relative', 'right':0, 'width':158 }); 
      }   
  };
  // run function on load
  floating_navigation();
  // run function every time you scroll
  $(window).scroll(function() {
      floating_navigation();
  });
});
