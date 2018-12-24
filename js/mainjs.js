/* Loop Slider */
$(function () {
  $('#loopslider').each(function () {
    var loopsliderWidth = $(this).width();
    var loopsliderHeight = $(this).height();
    $(this).children('ul').wrapAll('<div id="loopslider_wrap"></div>');
    var listWidth = $('#loopslider_wrap').children('ul').children('li').width();
    var listCount = $('#loopslider_wrap').children('ul').children('li').length;
    var loopWidth = (listWidth) * (listCount);
    $('#loopslider_wrap').css({
      top: '0',
      left: '0',
      width: ((loopWidth) * 2),
      height: (loopsliderHeight),
      overflow: 'hidden',
      position: 'absolute'
    });
    $('#loopslider_wrap ul').css({
      width: (loopWidth)
    });
    loopsliderPosition();

    function loopsliderPosition() {
      $('#loopslider_wrap').css({
        left: '0'
      });
      $('#loopslider_wrap').stop().animate({
        left: '-' + (loopWidth) + 'px'
      }, 55000, 'linear');
      setTimeout(function () {
        loopsliderPosition();
      }, 55000);
    };
    $('#loopslider_wrap ul').clone().appendTo('#loopslider_wrap');
  });
});

//タブレット・スマホのbodyにclass付与
var ua = navigator.userAgent;
if (ua.search(/Android/) != -1 || ua.search(/iPad/) != -1 || ua.search(/iPhone/) != -1) {
  $("body").addClass("android");
}

//iOSにclass付与
var ua = navigator.userAgent;
if (ua.search(/iPad/) != -1 || ua.search(/iPhone/) != -1) {
  $("body").addClass("ios");
}

//iPadにclass付与
var ua = navigator.userAgent;
if (ua.search(/iPad/) != -1) {
  $("body").addClass("ipad");
}

//sitemapにclass付与
if ($("#sitemap")[0]) {
  $("body").addClass("sitemap");
}

$(window).on("load", function () {
  if ($(".maxH")[0]) {
    resizeH(".maxH");
  }
});

$(window).on("rezise", function () {
  if ($(".maxH")[0]) {
    resizeH(".maxH");
  }
});

/* 以下は編集しない */
function resizeH(eleH) {
  if ($(window).width() > 600) {
    $(eleH).find(".hTit").css("height", "");
    $(eleH).find(".hBody").css("height", "");
    $(eleH).each(function () {
      var maxH = 0;
      var maxH2 = 0;
      $(this).find(".hTit").each(function () {
        hTit = $(this).outerHeight();
        if (maxH2 < hTit) {
          maxH2 = hTit;
        }
      });
      $(this).find(".hTit").outerHeight(maxH2);
      $(this).find(".hBody").each(function () {
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

$(document).ready(function () {
  var e = $("#pagetopBtn");
  e.hide();
  $(window).scroll(function () {
    $(this).scrollTop() > 30 ? e.fadeIn() : e.fadeOut()
  });
  $('#pagetopBtn').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
});
