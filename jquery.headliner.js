/*
* Headliner.js 0.1
*
* Copyright 2014, Russell Wilson romeo-whiskey.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Mon May 05 21:11:00 2015 -0700
*/
(function($) {

    $.fn.headliner = function(options) {

        var settings = $.extend({
            max_font_size: Number.POSITIVE_INFINITY,
            animate: false
        }, options);

        return this.each(function() {

            var container = $(this),
            font_size = parseInt( container.css("font-size") ),
            font_unit = 'px';

            var parent = $(this).parent();
            var max_width = parent.innerWidth() - parseInt(parent.css("padding-left"))- parseInt(parent.css("padding-right"));
            settings.initial = parseInt(container.css('font-size'));


            // Make sure we have text in there and that the text needs to be scaled
            if (container.text() == "" || max_width <= container.width()) {
                return;
            }

            // set our initial font size
            container.css({
                fontSize: font_size + font_unit
            });

            // adjust font size
            while(true) {

                var current_font_size = parseInt(container.css('font-size'));
                if (current_font_size == settings.max_font_size) {
                    break;
                }
                else if (current_font_size > settings.max_font_size || container.outerWidth() >= max_width) {
                    font_size = font_size - 2;
                    container.css({
                        fontSize: (font_size - 2) + font_unit
                    });
                    break;
                }
                else {
                    container.css({
                        fontSize: font_size + font_unit
                    });
                }
                font_size++;

            }

            if(settings.animate) {
                container.css({
                    fontSize: settings.initial + font_unit
                });
                container.animate({fontSize: font_size + font_unit});
            }


        });

    }

})(jQuery);
