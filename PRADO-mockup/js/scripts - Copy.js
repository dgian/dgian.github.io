
$(document).ready(function () {

	$('.nested-list label').click(function (e) {
		e.preventDefault();
		var ullist = $(this).parent().children('ul:first');
		$(this).toggleClass('opened');
		ullist.slideToggle();
	});
	
    $('#eventCalendarCalendarSunday').eventCalendar({
		jsonData: [{ "date": "1337594400000", "type": "meeting", "title": "Project A meeting", "description": "Lorem Ipsum dolor set", "url": "http://www.event1.com/" }]
	});
	
	
  /*Dropdown slide on hover/click*/
  var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };

  var trigger = $('.navbar-responsive-collapse ul.nav li.dropdown');
  var mq = window.matchMedia('(min-width: 1025px)');

    if(mq.matches) {
      //console.log("min 1024");
      //Mobile click - double check
      if( isMobile.any() ){
        console.log("mobile");
        trigger.click(function() {
          $(this).find('.dropdown-menu').stop(true, true).delay(300).slideDown("slow");
        }, function() {
          $(this).find('.dropdown-menu').stop(true, true).delay(200).slideUp("slow");
        });
      } else {
      // desktop hover
      //console.log("non mobile");
        trigger.hover(function() {
          $(this).find('.dropdown-menu').stop(true, true).delay(300).slideDown("slow");
        }, function() {
          $(this).find('.dropdown-menu').stop(true, true).delay(200).slideUp("slow");
        });   
      };
    } else {
    };
	
	
	
    /* Placeholder for IE7 IE8 */
    (function ($) {
        $.support.placeholder = ('placeholder' in document.createElement('input'));
    })(jQuery);

    //datepicker responsive
//    $('.datepicker-to').pickadate({
//        onClose: function () {
//            $('.datepicker-to').blur();
//        }
//    });
//    $('.datepicker-from').pickadate({
//        onClose: function () {
//            $('.datepicker-from').blur();
//        }
//    });

    //fix for IE7 and IE8
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

    //Check all checkbox
//    var options1 = { container: $('.by-body'), showIndeterminate: true };
//    $('.chks-all-body').checkAll(options1);
//
//    var options2 = { container: $('.by-topic'), showIndeterminate: true };
//    $('.chks-all-topic').checkAll(options2);

    //Click on megamenu  
    $(document).on('click', '.yamm .dropdown-menu', function (e) {
        e.stopPropagation()
    });

    $(document).on('click', '.btn-group .dropdown-menu.dropdown-mobile-menu', function (e) {
        e.stopPropagation()
    });
	
    $(document).on('click', '.btn-group .dropdown-menu .row-fluid', function (e) {
        e.stopPropagation()
    });	

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
                animationLoop: true,
                slideshow: false,
                controlNav: false,
                prevText: "<i class='icon-angle-left'></i>",           //String: Set the text for the "previous" directionNav item
                nextText: "<i class='icon-angle-right'></i>",          //String: Set the text for the "next" directionNav item  
                itemWidth: 261,
                minItems: getGridSize(1, 1, 2, 3, 3), // use function to pull in initial value
                maxItems: getGridSize(1, 1, 2, 3, 3), // use function to pull in initial value
                start: function (slider) {
                    $('body').removeClass('loading');
                    flexslider = slider;
                }
				
            });
            $('#memberslider').flexslider({
                animation: "slide",
                animationSpeed: 400,
                animationLoop: true,
                slideshow: false,
                controlNav: false,
                prevText: "<i class='icon-angle-left'></i>",           //String: Set the text for the "previous" directionNav item
                nextText: "<i class='icon-angle-right'></i>",          //String: Set the text for the "next" directionNav item  
                itemWidth: 261,
                minItems: getGridSize(1, 2, 3, 4, 5), // use function to pull in initial value
                maxItems: getGridSize(1, 2, 3, 4, 5), // use function to pull in initial value
                start: function (slider) {
                    $('body').removeClass('loading');
                    flexslider = slider;
                }
				
            });
			$('#ongoing').flexslider({
			  animation: "slide",
			  animationSpeed: 400,
			  slideshow: false,
			  animationLoop: true,
			  video: true,  
			  controlNav: false,
				prevText: "<i class='icon-angle-left'></i>",           //String: Set the text for the "previous" directionNav item
				nextText: "<i class='icon-angle-right'></i>",          //String: Set the text for the "next" directionNav item  
			  itemWidth: 210,
                minItems: getGridSize(1, 1, 1, 2, 2), // use function to pull in initial value
                maxItems: getGridSize(1, 1, 1, 2, 2), // use function to pull in initial value
                start: function (slider) {
                    $('body').removeClass('loading');
                    flexslider = slider;
                }
				
			  
			});
				
			$('#ongoing.ongoing-webcast-press').flexslider({
			  animation: "slide",
			  animationSpeed: 400,
			  slideshow: false,
			  animationLoop: true,
			  video: true,  
			  controlNav: false,
				prevText: "<i class='icon-angle-left'></i>",           //String: Set the text for the "previous" directionNav item
				nextText: "<i class='icon-angle-right'></i>",          //String: Set the text for the "next" directionNav item  
			  itemWidth: 210,
                minItems: getGridSize(1, 1, 1, 1, 1), // use function to pull in initial value
                maxItems: getGridSize(1, 1, 1, 1, 1), // use function to pull in initial value
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
		$('.dropdown.open .dropdown-toggle').dropdown('toggle');;
	}
	
	$(function(){
		/* Hide form input values on focus*/ 
		$('.searchbox input:text').each(function(){
			var txtval = $(this).val();
			$(this).focus(function(){
				if($(this).val() == txtval){
					$(this).val('')
				}
			});
			$(this).blur(function(){
				if($(this).val() == ""){
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
	
    $('#eventCalendarCalendarSunday').eventCalendar({
		jsonData: [{ "date": "1337594400000", "type": "meeting", "title": "Project A meeting", "description": "Lorem Ipsum dolor set", "url": "http://www.event1.com/" }]
	});
	
});
