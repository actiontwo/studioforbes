/**
 * Handles toggling the navigation menu for small screens and
 * accessibility for submenu items.
 */
(function () {
    //     make header stick
    $(document).ready(function () {
        if ($('#masthead , #top-navigation').position().top < ($(window).scrollTop() - 20) && $(window).width() < 768) {
            headerSticky(true);
        }
        
        $(window).resize(function () {
            if ($(window).width() > 768) {
                headerSticky(false);
            }
            else {
                headerSticky(true);
            }
        });
        
        $(window).scroll(function () {

            if ($('#masthead , #top-navigation').position().top < ($(this).scrollTop() - 20) && $(window).width() < 768) {
                headerSticky(true);

            } else if ($('#masthead , #top-navigation').hasClass("stick-header")) {
                headerSticky(false);
            }

        });
        function headerSticky(check) {
            if (check) {
                if (!$('#masthead').hasClass('stick-header')) {
                    $("#main").before("<div id='fack-space-header' style=''></div>");
                }
                $('#masthead , #top-navigation').addClass('stick-header').css({
                    "position": "fixed",
                    "width": "100%",
                    "background": "#fff",
                    "opacity": "0.8"
                });
                $('#masthead ').css({"top": "30px", "padding": "0"});
                $('#top-navigation ').css({"margin-top": "0"});

                $("#top-navigation .menu-top-info-menu-container").css({"width": "90%"});

                $('#fack-space-header').height($("#top-navigation").height() + $('#masthead').height());
            } else {
                $('#masthead , #top-navigation , .menu-top-info-menu-container , .menu-top-info-menu-container li').removeClass("stick-header").removeAttr("style");
                $("#fack-space-header").remove();
            }

        }
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
