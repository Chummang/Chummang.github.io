
var scroll = new SmoothScroll('a[href=*"#"]');

(function ($) {
  $.fn.visible = function (partial) {

    var $t = $(this),
      $w = $(window),
      viewTop = $w.scrollTop(),
      viewBottom = viewTop + $w.height(),
      _top = $t.offset().top,
      _bottom = _top + $t.height(),
      compareTop = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };

})(jQuery);



$(document).ready(function () {
  $(window).scroll(function () { 
    if ($(document).scrollTop() > 50) { 
      $('.navbar').removeClass('navbar-light');
      $('.navbar').addClass('solid');
      $('.navbar-brand').addClass('navbar-brandActive');
      $('.nav-link').removeClass('whiteNav');

    } else if ($(document).scrollTop() < 50 ) { 
      $('.navbar').removeClass('solid');
      $('.navbar-brand').removeClass('navbar-brandActive');
      $('.navbar').addClass('navbar-light');
      $('.nav-link').addClass('whiteNav');
    }
  });
});