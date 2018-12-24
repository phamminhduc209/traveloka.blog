(function($){
	"use strict";
    // Slide Carousel
    $(document).ready(function () {
        $(".owl-carousel").each(function (index, el) {
            var config = $(this).data();
            config.navText = ['<i class="icon icon-arrow-left-circle"></i>', '<i class="icon icon-arrow-right-circle"></i>'];
            config.smartSpeed = "800";

            if ($(this).hasClass('owl-style2')) {
                config.animateOut = "fadeOut";
                config.animateIn = "fadeIn";
            }

            if ($(this).hasClass('dotsData')) {
                config.dotsData = "true";
            }

            $(this).owlCarousel(config);
        });
    });

})(jQuery); // End of use strict