/**
 * Handles toggling the navigation menu for small screens and
 * accessibility for submenu items.
 */
(function () {
    console.log ('ads');
//     make header stick
    $(document).ready(function () {
        $(window).scroll(function () {
            if ($('#masthead').position().top < $(this).scrollTop()) {
                $('#masthead').addClass('stick-header').css({
                    "position": "fixed",
                    "width": "100%",
                    "top": 0, "background": "#fff",
                    "margin-top": 0,
                    "z-index": 100
                });
            } else if ($('#masthead').hasClass("stick-header")) {

                $('#masthead').removeClass("stick-header").css({"position": "relative"});
            }
        });
    });
// end make header stick

    var nav = document.getElementById('site-navigation'), button, menu;
    if (!nav) {
        return;
    }

    button = nav.getElementsByTagName('button')[0];
    menu = nav.getElementsByTagName('ul')[0];
    if (!button) {
        return;
    }

    // Hide button if menu is missing or empty.
    if (!menu || !menu.childNodes.length) {
        button.style.display = 'none';
        return;
    }

    button.onclick = function () {
        if (-1 === menu.className.indexOf('nav-menu')) {
            menu.className = 'nav-menu';
        }

        if (-1 !== button.className.indexOf('toggled-on')) {
            button.className = button.className.replace(' toggled-on', '');
            menu.className = menu.className.replace(' toggled-on', '');
        } else {
            button.className += ' toggled-on';
            menu.className += ' toggled-on';
        }
    };
})();

// Better focus for hidden submenu items for accessibility.
(function ($) {
    $('.main-navigation').find('a').on('focus.twentytwelve blur.twentytwelve', function () {
        $(this).parents('.menu-item, .page_item').toggleClass('focus');
    });

    if ('ontouchstart' in window) {
        $('.menu-item-has-children > a').on('touchstart.twentytwelve', function (e) {
            var el = $(this).parent('li');

            if (!el.hasClass('focus')) {
                e.preventDefault();
                el.toggleClass('focus');
                el.siblings('.focus').removeClass('focus');
            }
        });
    }
})(jQuery);
