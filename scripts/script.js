var site = {
    init: function() {
        this.initSubnav();
        this.initScrollSpy();
        this.initParams();
        this.initScrollTo();
    },
    initSubnav: function() {
        var subnav = $('.subnav-container'),
            nav = $('.nav-container');
        if (subnav.length) {
            subnav.scrollspy({
                min: subnav.offset().top,
                container: document,
                onEnter: function() {
                    subnav.addClass('sticky');
                    nav.addClass('sticky');
                },
                onLeave: function() {
                    subnav.removeClass('sticky');
                    nav.removeClass('sticky');
                }
            });
        }
    },
    initScrollSpy: function() {
        var targetClass = $('.scroll-container');
        if (targetClass.length) {
            targetClass.each(function() {
                var _this = $(this),
                    position = _this.position();
                _this.scrollspy({
                    min: position.top,
                    max: (position.top + _this.height()) - 52,
                    onEnter: function() {
                        $('#subnav #' + _this.attr('id')).addClass('active');
                    },
                    onLeave: function() {
                        $('#subnav #' + _this.attr('id')).removeClass('active');
                    }
                });
            });
        }
    },
    initParams: function() {
        var params = location.pathname;
        if (params) {
            params = params.replace('/', '');
            $('.reference-id').text(params);
        }
    },
    initScrollTo: function() {
        $(document).on('click', '.scrollto', function(e) {
            e.preventDefault();
            var target = $(e.target).attr('href');
            console.log(target);
            var position = $(target + '.scroll-container').offset();
            $('html, body').stop().animate({ scrollTop: position.top - 100 }, 500);
        })
    }
};

$(document).ready(function() {
    site.init();
});
