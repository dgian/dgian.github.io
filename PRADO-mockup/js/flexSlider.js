/// <reference path="/scripts/jquery-1.10.1.min.js" />
/// <reference path="/scripts/jquery.flexslider.js" />

var flex = (function () {
    function load(selector, itemWidth, sizes) {
        var slider = new Fslider(selector, itemWidth, sizes);
        slider.load();
    }

    return {
        loadDefault: function (selector) {
            load(selector, 310, [1, 2, 2, 2, 3]);
        },
        loadPress: function (selector) {
            load(selector, 210, [1, 2, 2, 2, 3]);
        },
        loadMemberList: function (selector) {
            load(selector, 210, [1, 2, 3, 4, 5]);
        },
        loadMeetings: function (selector) {
            load(selector, 210, [1, 2, 2, 2, 3]);
        }
    };
}());

function Fslider(selector, itemWidth, sizes) {
    var self = this;
    self.selector = selector;
    self.itemWidth = itemWidth;
    self.sizes = sizes;
    self.slider = null;

    self.load = function () {
        $(self.selector).flexslider(self.getOptions());
        self.resizeHandler();
    };

    self.getOptions = function () {
        var gridSize = self.getGridSize();
        return {
            animation: 'slide',
            animationSpeed: 400,
            slideshow: false,
            animationLoop: false,
            video: true,
            controlNav: false,
            prevText: '<i class="icon-angle-left"></i>',
            nextText: '<i class="icon-angle-right"></i>',
            itemWidth: itemWidth,
            minItems: gridSize,
            maxItems: gridSize,
            start: function (sl) {
                self.slider = sl;
                $('body').removeClass('loading');
            },
            startAt: Math.floor(self.getStartIndex() / gridSize)
        };
    };

    self.getGridSize = function () {
        return (window.innerWidth < 480) ? self.sizes[0] :
            (window.innerWidth < 768) ? self.sizes[1] :
                (window.innerWidth < 1200) ? self.sizes[2] :
                    (window.innerWidth < 1440) ? self.sizes[3] : self.sizes[4];
    };

    self.getStartIndex = function () {
        var startIndex = $(self.selector).find('li.highlighted').index();
        return Math.max(startIndex, 0);
    };

    self.fixResizeBug = function () {
        if (self.slider.currentSlide === 0) {
            return;
        }
        var container = $('.flexslider');
        var isIe = navigator.userAgent.match(/msie/i);
        if (!isIe) {
            var hasNext = container.flexslider(self.slider.currentSlide);
            if (!hasNext) {
                container.flexslider(0);
            }
        }
        var numPages = self.slider.pagingCount;
        if (isIe) {
            if (self.slider.currentSlide >= numPages) {
                container.flexslider(0);
            }
        }
    };

    self.resizeHandler = function () {
        $(window).resize(function () {
            self.fixResizeBug();
            self.slider.vars.minItems =
                self.slider.vars.maxItems =
                    self.getGridSize(sizes);
        });
    };
}