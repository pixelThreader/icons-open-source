$(document).ready(function () {
    !function (l) {
        "use strict";
        l("section#page-top").on(
            "scroll", function () {
                100 < l(this).scrollTop() ? l("#backToTop").fadeIn() : l("#backToTop").fadeOut();
            }
        ),
            l(document).on(
                "click", "button#backToTop",
                function (e) {
                    var o = l(this);
                    l("html, section#page-top").stop().animate({ scrollTop: 0 },
                        1e3, //this gives slow motion effect
                        "easeInOutExpo"),
                        e.preventDefault();
                }
            )
    }(jQuery);

});