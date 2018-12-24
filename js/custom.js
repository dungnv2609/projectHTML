$(document).ready(function() {
  if ($(".maxH")[0]) {
    resizeH(".maxH");
    $(window).bind("orientationchange resize", function() {
      resizeH(".maxH");
    });
  }
});

/* 以下は編集しない */
function resizeH(eleH) {
  if ($(window).width() > 767) {
    $(eleH).find(".hTit").css("height", "");
    $(eleH).find(".hBody").css("height", "");
    $(eleH).each(function() {
      var maxH = 0;
      var maxH2 = 0;
      $(this).find(".hTit").each(function() {
        hTit = $(this).outerHeight();
        if (maxH2 < hTit) {
          maxH2 = hTit;
        }
      });
      $(this).find(".hTit").outerHeight(maxH2);
      $(this).find(".hBody").each(function() {
        hBody = $(this).outerHeight();
        if (maxH < hBody) {
          maxH = hBody;
        }
      });
      $(this).find(".hBody").outerHeight(maxH);
    });
  } else {
    $(eleH).find(".hTit").css("height", "");
    $(eleH).find(".hBody").css("height", "");
  }
}

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.btn-top').fadeIn();
    } else {
      $('.btn-top').fadeOut();
    }
  });

  $('.btn-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    $('header').css('top', '0');
    return false;
  });
});

$(document).ready(function() {
  $('.btn-top-sp').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    $('header').css('top', '0');
    return false;
  });
});

$(document).ready(function() {
  $('.logo-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    $('header').css('top', '0');
    return false;
  });
});

$(document).ready(function() {
  $('body').on('DOMMouseScroll mousewheel scrollstart', function (event) {
    position = $(window).scrollTop();
    if ((event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0) && position > 100) {
      $('header').css('top', '-' + $('header').height() + 'px');
    } else {
      $('header').css('top', '0');
    }
  });

  var lastScrollTop = 190;
  $(window).scroll(function(event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop && st > 190) {
      $('header').css('top', '-' + $('header').height() + 'px');
    } else {
      $('header').css('top', '0');
    }
    lastScrollTop = st;
  });
});

$(document).ready(function() {
  $(".fancybox").fancybox({
    helpers: {
      title : {
        type : 'float'
      }
    }
  });
});

$(document).ready(function() {
  $('#btn_menu').click(function() {
    if ($('#gnav').hasClass('gnav-active')) {
      $('#gnav').removeClass('gnav-active');
      $('#gnav').fadeOut(0);
    } else {
      $('#gnav').addClass('gnav-active');
      $('#gnav').fadeIn(300);
    }
  });

  $('#li_a01').click(function() {
    $('header').css('top', '-' + $('header').height() + 'px');
    $('html, body').animate({
      scrollTop: $('#a01').position().top
    }, 800);
  });

  $('#li_a02').click(function() {
    $('header').css('top', '-' + $('header').height() + 'px');
    $('html, body').animate({
      scrollTop: $('#a02').position().top
    }, 800);
  });

  $('#li_a03').click(function() {
    $('header').css('top', '-' + $('header').height() + 'px');
    $('html, body').animate({
      scrollTop: $('#a03').position().top
    }, 800);
  });

  $('#li_a04').click(function() {
    $('header').css('top', '-' + $('header').height() + 'px');
    $('html, body').animate({
      scrollTop: $('#a04').position().top
    }, 800);
  });

  $('#li_a05').click(function() {
    $('header').css('top', '-' + $('header').height() + 'px');
    $('html, body').animate({
      scrollTop: $('#a05').position().top
    }, 800);
  });

  $('#li_a06').click(function() {
    $('header').css('top', '-' + $('header').height() + 'px');
    $('html, body').animate({
      scrollTop: $('#a06').position().top
    }, 800);
  });
});

$(document).ready(function() {
  if ($(window).width() > 767) {
    $(window).scroll(function() {
      $('.timeline-item').each(function() {
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if (bottom_of_window > bottom_of_object) {
          $(this).animate({'opacity': '1'}, 1000);
        }
      });
    });
  }
});

$(window).on("load", function() {
  $('.slide-item').each(function() {
    $(this).css('opacity', '1').css('transform', 'translateY(0)');
  });
});
