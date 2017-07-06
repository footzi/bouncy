$(document).ready(function() {

    $("#governance, #creative, #graphic, #game, #full").hide();

    $(".icon").on("click", function() {
        var select = $(this).attr("data-link");
        if ((select == "#customer") || (select == "#governance") || (select == "#creative")) {
            $(".about-details-icons .icon").removeClass("icon-active");
            $(this).addClass("icon-active");
            $(".about-details-content").hide()
        } else {
            $(".services-content-icon .icon").removeClass("icon-active");
            $(this).addClass("icon-active");
            $(".services-content-item").hide()
        }
        $(select).fadeIn();
    })


    $(".portfolio-nav a").on("click", function() {
        var link = $(this).attr("data-filter")

        if (link == ".all") {
            $(".portfolio-products-item").fadeIn()
            $(".portfolio-link").removeClass("is-checked")
            $(".portfolio-products-column").removeClass("flex-row")

            $(this).addClass("is-checked")

        } else {
            $(".portfolio-products-item").hide()
            $(".portfolio-link").removeClass("is-checked")
            $(".portfolio-products-column").addClass("flex-row")

            $(this).addClass("is-checked")
            $(link).fadeIn()


        }
    })

    setInterval(function() {
        $(".bar").each(function() {
            var widthP = $(this).parent().width();
            var width = Math.round($(this).width() / widthP * 100) + "%";
            var percent = $(this).parent().siblings(".progress-title").children(".progress-percent");
            percent.empty().append(width);
        })
    }, 200000);


    $(".second-text").hide();
    $(".btn-open").on("click", function() {
        $(this).hide();
        $(this).parent().siblings(".second-text").fadeIn();
    })
    $(".btn-close").on("click", function() {
        $(this).parent().fadeOut();
        $(".btn-open").show()
    })


    var map;
    ymaps.ready(function() {
        map = new ymaps.Map(document.getElementById('map-yandex'), {
            center: [59.94, 30.24],
            zoom: 10
        });
        var myPlacemark = new ymaps.Placemark([59.947417, 30.234915]);
        map.geoObjects.add(myPlacemark)
        map.controls.add('mapTools');
        map.controls.add('zoomControl');

    });

    //yandex map
    $(".map").hover(function() {
        $(".map-overlay").fadeOut()
    }, function() {
        $(".map-overlay").fadeIn()
    })


    //fixed-navbar
    $(window).scroll(function() {
        if ($(this).scrollTop() > $(".navbar").height()) {
            $(".navbar").addClass("navbar-fixed")
        } else {
            $(".navbar").removeClass("navbar-fixed")
        }
    })

    //
    $('.navbar-nav>li>a').on('click', function() {
        var scrollAnchor = $(this).attr('data-scroll'),
            scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top;
        $('body,html').animate({
            scrollTop: scrollPoint
        }, 500);
        return false;
    });

    $(window).scroll(function() {
        var windscroll = $(window).scrollTop();
        $('section').each(function(i) {
            if ($(this).position().top <= windscroll + 10) {
                $('.navbar-nav>li>a.active-link').removeClass('active-link');
                $('.navbar-nav>li>a').eq(i).addClass('active-link');
            }
        });
    }).scroll();
});