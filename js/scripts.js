function getAnimation() {
  $(".animate").each(function() {
    if( $(this).offset().top <= $(document).scrollTop() + $(window).height() ) {
      $(this).addClass("active");
    }
  });
}

function getThumbsParams() {
    if(bodyWidth > 767) {
        coords = $("#coords");
        $(".contacts_thumbs_2").each(function() {
            $(this).find(".contact_thumb_2").each(function() {
                index = $(this).index(".contact_thumb_2");
                leftCoord = coords.offset().left;
                rigthCoord = $(window).width() - coords.outerWidth() - leftCoord;
                if(index % 2 == 0) {
                    $(this).find(".offset").css({
                        "margin-left" : leftCoord + "px"
                    });
                } else {
                    $(this).find(".offset").css({
                        "margin-right" : rigthCoord + "px"
                    });
                }
            });
        });

        $(".contact_thumb_2").each(function() {
            $(this).find(".map").css({"min-height" : "auto"});
            mapBox = $(this).find(".map");
            mapBoxHeight = $(this).height() - $(this).find(".contact_thumb_descript").outerHeight() - $(this).find(".contact_thumb_title").outerHeight();
            mapBox.css({"min-height" : mapBoxHeight + "px"});
        });
    }
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


$(window).load(function() {
    
});

$(window).resize(function() {
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
    getThumbsParams();
    getAnimation();
});

$(document).scroll(function() {

    getAnimation();

});

$(document).ready(function() {

    getAnimation();
    getThumbsParams();

    $(document).on('mouseenter', '.main_thumb', function() {
      var thumbId = $(this).attr("data-id");
      $(".img_box_wrapp[id = '"+thumbId+"'").addClass("active");
    });

    $(document).on('mouseleave', '.main_thumb', function() {
      var thumbId = $(this).attr("data-id");
      $(".img_box_wrapp[id = '"+thumbId+"'").removeClass("active");
    });

    // ----------------------

    if($("#map_1").length > 0) {
        ymaps.ready(function () {        
            var myMap = new ymaps.Map('map_1', {
                center: [55.755814, 37.617635],
                zoom: 14
            }, {
                searchControlProvider: 'yandex#search'
            });
            myPlacemark1 = new ymaps.Placemark([55.755814, 37.617635], {
                hintContent: ''
            }, {
                // iconLayout: 'default#imageWithContent',
                // iconImageHref: 'img/yellow_marker.png',
                // iconImageSize: [39, 35],
                // iconImageOffset: [19, -17]
            });
            myMap.geoObjects.add(myPlacemark1);        
        });
    }

    if($("#map_2").length > 0) {
        ymaps.ready(function () {        
            var myMap2 = new ymaps.Map('map_2', {
                center: [55.755814, 37.617635],
                zoom: 14
            }, {
                searchControlProvider: 'yandex#search'
            });
            myPlacemark2 = new ymaps.Placemark([55.755814, 37.617635], {
                hintContent: ''
            }, {
                // iconLayout: 'default#imageWithContent',
                // iconImageHref: 'img/yellow_marker.png',
                // iconImageSize: [39, 35],
                // iconImageOffset: [19, -17]
            });
            myMap2.geoObjects.add(myPlacemark2);
        });
    }

    // ------------

    $("[data-popup-link]").on("click", function(e) {
        e.preventDefault();
        popupName = $(this).attr("data-popup-link");
        div = document.createElement('div');
        div.style.overflowY = 'scroll';
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.visibility = 'hidden';
        document.body.appendChild(div);
        scrollWidth = div.offsetWidth - div.clientWidth;
        document.body.removeChild(div);
        $("body").addClass("fixed");
        $("body").css({
            "position" : "fixed",
            "top" :  -$(document).scrollTop() + "px",
            "overflow" : "hidden",
            "right" : 0,
            "left" : 0,
            "bottom" : 0,
            "padding-right" : scrollWidth + "px"
        });
        $(".popup_bg").fadeIn(300);
        $("[data-popup = '"+ popupName +"']").fadeIn(300);
    });
    $(".close_popup, .popup_bg").on("click", function(e) {
        e.preventDefault();
        curTop = $("body").css("top");
        curTop = Math.abs(parseInt(curTop, 10));
        $("body").attr("style", "");
        if (curTop !== 0) {
            $("html").scrollTop(curTop);
        }
        $("body").removeClass("fixed");
        $(".popup_bg").fadeOut(300);
        $("[data-popup]").fadeOut(300);
    });
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 ) {
            curTop = $("body").css("top");
            curTop = Math.abs(parseInt(curTop, 10));
            $("body").attr("style", "");
            if (curTop !== 0) {
                $("html").scrollTop(curTop);
            }
            $("body").removeClass("fixed");
            $(".popup_bg").fadeOut(300);
            $("[data-popup]").fadeOut(300);
        }
    });
    $(document).on("mouseup", function(e) {
      if($(".popup").is(":visible")) {
        e.preventDefault();
        hide_element = $(".popup_content");
        if (!hide_element.is(e.target)
            && hide_element.has(e.target).length === 0) {
            curTop = $("body").css("top");
            curTop = Math.abs(parseInt(curTop, 10));
            $("body").attr("style", "");
            if (curTop !== 0) {
                $("html").scrollTop(curTop);
            }
            $("body").removeClass("fixed");
            $(".popup_bg").fadeOut(300);
            $("[data-popup]").fadeOut(300);
        }
      }
    });

    // ------------

    $(".respmenubtn").click(function(e) {
        e.preventDefault();
        if( $("#resp_nav").is(":hidden") ) {
            $("#resp_nav").fadeIn(300);
            $(this).addClass("active");
        } else {
            $("#resp_nav").fadeOut(300);
            $(this).removeClass("active");
        }
    });
    
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 &&
            $("#resp_nav").is(":visible") &&
            bodyWidth <= 900) {
                $("#resp_nav").fadeOut(300);
                $(".respmenubtn").removeClass("active");
        }
    });

});