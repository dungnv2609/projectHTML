$(document).ready(function() {
  var width = $(window).width();
  if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || width < 961 ) {

  } else {
    $('.mainbag').viewScroller({
      useScrollbar: false,
      beforeChange: function() {
      },
      afterChange: function() {
      },
      beforeResize: function() {
      },
      afterResize: function() {
      }
    });
  }
});

$(document).ready(function() {
  function show_navbar() {
    var width = $(window).width();
    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || width < 961 ) {
      if ($('#toggle_menu').hasClass('toggle-active')) {
        $('#header').removeClass('box-row-wrap');
        $('#toggle_menu').removeClass('toggle-active');
        $('#navbar').addClass('hidden-sm mr20').removeClass('navbar-active box-row-wrap mt15');
      } else {
        $('#header').addClass('box-row-wrap');
        $('#toggle_menu').addClass('toggle-active');
        $('#navbar').removeClass('hidden-sm mr20').addClass('navbar-active box-row-wrap mt15');
      }
    }
  }

  $('#toggle_menu').click(function() {
    show_navbar();
  });

  $('#navbar').click(function() {
    show_navbar();
  });
});
