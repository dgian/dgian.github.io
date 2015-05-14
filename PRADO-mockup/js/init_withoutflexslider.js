$(document).ready(function () {
	// Dropdown slide on hover/click
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
                 $(this).find('[placeholder]').each(function() {
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

    //Equal height Flexslider
	$(window).load(function () { // wait for all content and images are loaded
	    var biggestHeight = 0;
	    $('#contentslider ul.slides li').each(function () {
	        if ($(this).outerHeight(true) > biggestHeight) {
	            biggestHeight = $(this).outerHeight(true);
	        }
	    });
	    $('#contentslider ul.slides li').height(biggestHeight);
	});

    //Equal height Flexslider
	$(window).load(function () { // wait for all content and images are loaded
	    var biggestHeight = 0;
	    $('#flexslider ul.slides li').each(function () {
	        if ($(this).outerHeight(true) > biggestHeight) {
	            biggestHeight = $(this).outerHeight(true);
	        }
	    });
	    $('#flexslider ul.slides li').height(biggestHeight);
	});


});	
	

