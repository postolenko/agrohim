function getThumbsParams() {
    coords = $("#coords");
    $(".contacts_thumbs_2").each(function() {
        $(this).find(".contact_thumb_2").each(function() {
            index = $(this).index(".contact_thumb_2");
            leftCoord = coords.offset().left;
            // rigthCoord = bodyWidth - coords.width() - coords.offset().left - 18;
            rigthCoord = bodyWidth - coords.width() - coords.offset().left;
            if(index % 2 == 0) {
                $(this).find(".offset").css({
                    "padding-left" : leftCoord + "px"
                });
            } else {
                $(this).find(".offset").css({
                    "padding-right" : rigthCoord + "px"
                });
            }
        });
    });

    // $(".contact_thumb_2").each(function() {
    //     $(this).find(".map").css({"max-height" : "auto"});
    //     mapBox = $(this).find(".map");
    //     mapBoxHeight = $(this).height() - $(this).find(".contact_thumb_descript").outerHeight() - $(this).find(".contact_thumb_title").outerHeight();
    //     mapBox.css({"max-height" : mapBoxHeight + "px"});
    // });
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


$(window).load(function() {
    getThumbsParams();
});

$(window).resize(function() {
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
    getThumbsParams();
});

$(document).scroll(function() {



});

$(document).ready(function() {

    // if( $(".portfolio_slider").length > 0 ) {
    //     $(".portfolio_slider").not(".slick-initialized").slick({
    //         dots: true,
    //         arrows: true,
    //         autoplay: true,
    //         autoplaySpeed: 4000,
    //         speed: 1200,
    //         slidesToShow: 4,
    //         slidesToScroll: 1,
    //         // fade: true,
    //         responsive: [
    //             {
    //               breakpoint: 900,
    //               settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2
    //               }
    //             },
    //             {
    //               breakpoint: 540,
    //               settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //               }
    //             }
    //           ]
    //     });
    // }

    $(document).on('mouseenter', '.main_thumb', function() {
      var thumbId = $(this).attr("data-id");
      $(".img_box_wrapp[id = '"+thumbId+"'").addClass("active");
    });

    $(document).on('mouseleave', '.main_thumb', function() {
      var thumbId = $(this).attr("data-id");
      $(".img_box_wrapp[id = '"+thumbId+"'").removeClass("active");
    });

    // ---------

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

});