/*
* Headliner.js 0.1.1
*
* Copyright 2014, Russell Wilson romeo-whiskey.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Mon May 09 19:38:00 2015 -0700
*/
/*global jQuery */
(function ($) {
    "use strict";
    $.fn.headliner = function (options) {

        var settings = $.extend({
            max_font_size: Number.POSITIVE_INFINITY,
            animate: false
        }, options);

        return this.each(function () {

            var container = $(this),
                font_size = parseInt(container.css("font-size"), 10),
                font_unit = "px",
                parent = $(this).parent(),
                max_width = parent.innerWidth() - parseInt(parent.css("padding-left"), 10) - parseInt(parent.css("padding-right"), 10),
                current_font_size = font_size;

            if (container.css("display") !== "inline-block") {
                container.css({display: "inline-block"});
            }

            settings.initial = parseInt(container.css("font-size"), 10);

            // Make sure we have text in there and that the text needs to be scaled
            if (container.text() === "" || max_width <= container.width()) {
                return;
            }

            // set our initial font size
            container.css({
                fontSize: font_size + font_unit
            });

            // adjust font size
            while (true) {

                current_font_size = parseInt(container.css("font-size"), 10);
                font_size = font_size + 1;

                if (current_font_size === settings.max_font_size) {
                    break;
                }

                if (container.outerWidth() >= max_width) {
                    font_size = font_size - 2;
                    container.css({
                        fontSize: font_size + font_unit
                    });
                    break;
                }

                container.css({
                    fontSize: font_size + font_unit
                });

            }

            if (settings.animate) {
                container.css({
                    fontSize: settings.initial + font_unit
                });
                container.animate({fontSize: font_size + font_unit});
            }


        });

    };

}(jQuery));
