
$(document).ready(function() {
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

  var trigger = $('ul.nav li.dropdown');
  var mq = window.matchMedia('(min-width: 1025px)');

    if(mq.matches) {
      console.log("min 1024");
      //Mobile click - double check
      if( isMobile.any() ){
        console.log("mobile");
        trigger.click(function() {
          $(this).find('.dropdown-menu').stop(true, true).delay(200).slideDown("slow");
        }, function() {
          $(this).find('.dropdown-menu').stop(true, true).delay(200).slideUp("slow");
        });
      } else {
      // desktop hover
      console.log("non mobile");
        trigger.hover(function() {
          $(this).find('.dropdown-menu').stop(true, true).delay(200).slideDown("slow");
        }, function() {
          $(this).find('.dropdown-menu').stop(true, true).delay(200).slideUp("slow");
        });   
      };
    } else {
      $('.dropdown-toggle').click(function() {
        $(this).next('.dropdown-menu').slideToggle(500);
      });
    };

	
/* Placeholder for IE7 IE8 */
 	 (function ($) {
         $.support.placeholder = ('placeholder' in document.createElement('input'));
     })(jQuery);

     //fix for IE7 and IE8
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
	 
	//Check all checkbox
	var options = { container: $('.by-body'), showIndeterminate: true };
	$('.chks-all-body').checkAll(options);	
  	
	var options = { container: $('.by-topic'), showIndeterminate: true };
	$('.chks-all-topic').checkAll(options);	
  	
	//eventCalendar responsive Jquery 
	$("#eventCalendarCalendarSunday").eventCalendar({
		eventsjson: 'json/events.json.php',
		startWeekOnMonday: false
	});

	//$('.faceted-search').affix()	 
	 
	 //100% width on menu
	//	  var numTabs = $('.navbar .nav').find('li.level-0').length;
	//	  var tabWidth = 100 / numTabs;
	//	  var tabPercent = tabWidth + "%";
	//	  $('.navbar .nav li.level-0').width(tabPercent);
});

//Click on megamenu  
$(document).on('click', '.yamm .dropdown-menu', function(e) {
	e.stopPropagation()
})

//Click on btn group  
$('.content-top .btn-group .dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
    // Avoid following the href location when clicking
    event.preventDefault(); 
    // Avoid having the menu to close when clicking
    event.stopPropagation(); 
    // If a menu is already open we close it
    //$('ul.dropdown-menu [data-toggle=dropdown]').parent().removeClass('open');
    // opening the one you clicked on
    $(this).parent().addClass('open');

    var menu = $(this).parent().find("ul");
    var menupos = menu.offset();
  
    if ((menupos.left + menu.width()) + 30 > $(window).width()) {
        var newpos = - menu.width();      
    } else {
        var newpos = $(this).parent().width();
    }
    menu.css({ left:newpos });

});

$('.dropdown-menu').find('.faceted-search').click(function (e) {
    e.stopPropagation();
});

$('.dropdown-toggle').click(function(e) {
  e.preventDefault();
  setTimeout($.proxy(function() {
    if ('ontouchstart' in document.documentElement) {
      $(this).siblings('.dropdown-backdrop').off().remove();
    }
  }, this), 0);
});

