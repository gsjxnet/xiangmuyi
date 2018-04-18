var clientWidth = document.documentElement.clientWidth;
jQuery('html').addClass("hidden-c");
jQuery(document).ready(function ($) {
  animationSlider();
  $(window).scroll(function(){
    animationSlider();
  });
  $(window).load(function(){
    animationSlider();
  });
});

function animationSlider() {
  var wt = jQuery(window).scrollTop(),
    wh = wt + jQuery(window).height()/2;
  jQuery('.wowo:not(.animated)').each(function () {
    var me = jQuery(this), eH = me.offset().top,
      oH = eH + me.innerHeight();
    if (wt <= eH && wh >= eH || wt <= oH && oH <= wh) {
      me.addClass("animated");
      // setTimeout(function () {
      //   me.removeClass("animated wowo")
      // }, 1500);
    }
  });
}