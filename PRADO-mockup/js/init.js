﻿$(document).ready(function () {
    // Dropdown slide on hover/click
    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    var trigger = $('.navbar-responsive-collapse ul.nav li.dropdown');
    var mq = window.matchMedia('(min-width: 1025px)');

    if (mq.matches) {

        //console.log("min 1024");
        //Mobile click - double check
        if (isMobile.any()) {
            console.log("mobile");
            trigger.click(function () {
                $(this).find('.dropdown-menu').stop(true, true).delay(300).slideDown("slow");
            }, function () {
                $(this).find('.dropdown-menu').stop(true, true).delay(200).slideUp("slow");
            });
        } else {
            // desktop hover
            //console.log("non mobile");
            trigger.hover(function () {
                $(this).find('.dropdown-menu').stop(true, true).delay(300).slideDown("slow");
            }, function () {
                $(this).find('.dropdown-menu').stop(true, true).delay(200).slideUp("slow");
            });
        };
    } else {
    };

    // Placeholder for IE7 IE8
    (function ($) {
        $.support.placeholder = ('placeholder' in document.createElement('input'));
    })(jQuery);

    // Fix Placeholder for IE7 IE8
    $(function () {
        if (!$.support.placeholder) {
            $("[placeholder]").focus(function () {
                if ($(this).val() == $(this).attr("placeholder")) $(this).val("");
            }).blur(function () {
                if ($(this).val() == "") $(this).val($(this).attr("placeholder"));
            }).blur();

            $("[placeholder]").parents("form").submit(function () {
                $(this).find('[placeholder]').each(function () {
                    if ($(this).val() == $(this).attr("placeholder")) {
                        $(this).val("");
                    }
                });
            });
        }
    });




    //    $('.content-top .btn-group .dropdown-menu [data-toggle=dropdown]').on('click', function (event) {
    //        // Avoid following the href location when clicking
    //        event.preventDefault();
    //        // Avoid having the menu to close when clicking
    //        event.stopPropagation();
    //        // If a menu is already open we close it
    //        //$('ul.dropdown-menu [data-toggle=dropdown]').parent().removeClass('open');
    //        // opening the one you clicked on
    //        $(this).parent().addClass('open');
    //
    //        var menu = $(this).parent().find("ul");
    //        var menupos = menu.offset();
    //
    //        if ((menupos.left + menu.width()) + 30 > $(window).width()) {
    //            var newpos = -menu.width();
    //        } else {
    //            var newpos = $(this).parent().width();
    //        }
    //        menu.css({ left: newpos });
    //
    //    });
    //
    //Click on megamenu  
    $(document).on('click', '.yamm .dropdown-menu', function (e) {
        e.stopPropagation()
    });

    $(document).on('click', '.boxShowAll .dropdown-menu .row-fluid', function (e) {
        e.stopPropagation()
    });



    //Flexslider


    (function () {

        // store the slider in a local variable
        var $window = $(window),
          flexslider;

        // tiny helper function to add breakpoints
        function getGridSize(a, b, c, d, e) {
            return (window.innerWidth < 480) ? a :
                   (window.innerWidth < 768) ? b :
                   (window.innerWidth < 1200) ? c :
                   (window.innerWidth < 1440) ? d : e;
        }

        $window.load(function () {
            $('#flexslider').flexslider({
                animation: "slide",
                animationSpeed: 400,
                slideshow: false,
                animationLoop: false,
                video: true,
                controlNav: false,
                prevText: "<i class='icon-angle-left'></i>",           //String: Set the text for the "previous" directionNav item
                nextText: "<i class='icon-angle-right'></i>",          //String: Set the text for the "next" directionNav item  
                itemWidth: 210,
                minItems: getGridSize(1, 2, 2, 2, 3), // use function to pull in initial value
                maxItems: getGridSize(1, 2, 2, 2, 3), // use function to pull in initial value
                start: function (slider) {
                    $('body').removeClass('loading');
                    flexslider = slider;
                }
            });
            $('#contentslider').flexslider({
                animation: "slide",
                animationSpeed: 400,
                slideshow: false,
                animationLoop: false,
                video: true,
                controlNav: false,
                prevText: "<i class='icon-angle-left'></i>",           //String: Set the text for the "previous" directionNav item
                nextText: "<i class='icon-angle-right'></i>",          //String: Set the text for the "next" directionNav item  
                itemWidth: 310,
                minItems: getGridSize(1, 2, 2, 2, 3), // use function to pull in initial value
                maxItems: getGridSize(1, 2, 2, 2, 3), // use function to pull in initial value
                start: function (slider) {
                    $('body').removeClass('loading');
                    flexslider = slider;
                }
            });
            $('#ongoing').flexslider({
                animation: "slide",
                animationSpeed: 400,
                slideshow: false,
                animationLoop: false,
                video: true,
                controlNav: false,
                prevText: "<i class='icon-angle-left'></i>",           //String: Set the text for the "previous" directionNav item
                nextText: "<i class='icon-angle-right'></i>",          //String: Set the text for the "next" directionNav item  
                itemWidth: 310,
                minItems: getGridSize(1, 1, 2, 2, 2), // use function to pull in initial value
                maxItems: getGridSize(1, 1, 2, 2, 2), // use function to pull in initial value
                start: function (slider) {
                    $('body').removeClass('loading');
                    flexslider = slider;
                }
            });
            $('#memberslider').flexslider({
                animation: "slide",
                animationSpeed: 400,
                slideshow: false,
                animationLoop: false,
                video: true,
                controlNav: false,
                prevText: "<i class='icon-angle-left'></i>",           //String: Set the text for the "previous" directionNav item
                nextText: "<i class='icon-angle-right'></i>",          //String: Set the text for the "next" directionNav item  
                itemWidth: 210,
                minItems: getGridSize(1, 2, 3, 4, 5), // use function to pull in initial value
                maxItems: getGridSize(1, 2, 3, 4, 5), // use function to pull in initial value
                start: function (slider) {
                    $('body').removeClass('loading');
                    flexslider = slider;
                }
            });

        });

        // check grid size on resize event
        $window.resize(function () {
            if (!flexslider)
                return;

            var gridSize = getGridSize();
            flexslider.vars.minItems = gridSize;
            flexslider.vars.maxItems = gridSize;
        });
    }());

    (function () {
        var videos = $('.video-wrapper');
        for (var i = 0; i < videos.length; i++) {
            var wrapper = $(videos[i]);
            wrapper.find('iframe')
                .attr('width', wrapper.width())
                .attr('height', wrapper.width() * 9 / 16);
        }
    }());

    if (navigator.userAgent.indexOf('iPad') < 0) {
        $(window).bind('touchmove, scroll', closeMenu);
    }
    else {
        $(window).bind('touchstart', closeMenu);
    }

    function closeMenu() {
        $('header .dropdown.open .dropdown-toggle').dropdown('toggle');;
    }
    $(function () {
        /* Hide form input values on focus*/
        $('.searchbox input:text').each(function () {
            var txtval = $(this).val();
            $(this).focus(function () {
                if ($(this).val() == txtval) {
                    $(this).val('')
                }
            });
            $(this).blur(function () {
                if ($(this).val() == "") {
                    $(this).val(txtval);
                }
            });
        });
    });

    $("#myModal").on("show", function () {
        $("body").addClass("modal-open");
    }).on("hidden", function () {
        $("body").removeClass("modal-open")
    });


    //Disabled attribute href > 768px
    if ($(window).width() < 768) {
        $('.primary-menu .nav > li').children("a").removeAttr('href')
    }
    else {
        //alert('More than 768');
    }

    //Fixing Ipad
    var ua = navigator.userAgent,
    event = (ua.match(/iPad/i)) ? "touchstart" : "click";

    $('.primary-menu .nav > li').bind(event, function (e) {
        if ($(window).width() < 768) {
            $('.primary-menu .nav > li').children("a").removeAttr('href')
        }
        else {
            //alert('More than 768');
        }
    });

    //Equal height Flexslider
    $(window).load(function () {

        var bigbrother = -1;

        $('#contentslider .slides > li').each(function () {
            bigbrother = bigbrother > $('#contentslider .slides > li').outerHeight(true) ? bigbrother : $('#contentslider .slides > li').outerHeight(true);
        });

        $('#contentslider .slides > li').each(function () {
            $('#contentslider .slides > li').height(bigbrother);
        });


    });

});

// Check if Table th is longer than td in resizing
$(document).ready(function () {
    $('.free-text table').each(function () {
        console.log('table');
        if ($(this).find('th').width > $(this).find('td').width()) {
            $(this).find('th').addClass('resize-th');
        }
    });

});


