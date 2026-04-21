(function ($) {

    "use strict";

    /*------------------------------------------
        = TOGGLE MOBILE NAVIGATION
    -------------------------------------------*/
    function toggleMobileNavigation() {
        const navbarEl = $(".navigation-holder");
        const openBtnEl = $(".mobail-menu .open-btn");
        const toggleBtnEl = $(".mobail-menu .navbar-toggler");

        openBtnEl.on("click", function (e) {
            e.stopImmediatePropagation();
            navbarEl.toggleClass("slideInn");
            toggleBtnEl.toggleClass("x-close");
            return false;
        });
    }
    toggleMobileNavigation();


    /*------------------------------------------
       = SMALL NAV CLASS
    -------------------------------------------*/
    function toggleClassForSmallNav() {
        const mainNavEl = $("#navbar > ul");
        (window.innerWidth <= 991)
            ? mainNavEl.addClass("small-nav")
            : mainNavEl.removeClass("small-nav");
    }
    toggleClassForSmallNav();


    /*------------------------------------------
        = SMALL NAV FUNCTIONALITY
    -------------------------------------------*/
    function smallNavFunctionality() {
        const windowWidth = window.innerWidth;
        const navHolder = $(".navigation-holder");
        const smallNavEl = $(".navigation-holder > .small-nav");
        const subMenuEl = smallNavEl.find(".sub-menu");
        const megaMenuEl = smallNavEl.find(".mega-menu");
        const submenuLinks = smallNavEl.find(".menu-item-has-children > a");

        if (windowWidth <= 991) {
            subMenuEl.hide();
            megaMenuEl.hide();

            submenuLinks.on("click", function (e) {
                e.preventDefault();
                e.stopImmediatePropagation();

                const $this = $(this);
                $this.siblings().slideToggle();
                $this.toggleClass("rotate");
            });

        } else {
            navHolder.find(".sub-menu").show();
            navHolder.find(".mega-menu").show();
        }
    }
    smallNavFunctionality();


    /* Close menu */
    $("body").on("click", function () {
        $('.navigation-holder').removeClass('slideInn');
    });
    $(".menu-close").on("click", function () {
        $('.navigation-holder').removeClass('slideInn');
        $('.open-btn').removeClass('x-close');
    });


    /*------------------------------------------
        = MERGED TOGGLE BUTTONS (toggle1,2,3,4)
    -------------------------------------------*/
    $('#toggle1, #toggle2, #toggle3, #toggle4').on("click", function () {
        const id = this.id;

        if (id === "toggle1") {
            $('.create-account').slideToggle();
            $('.caupon-wrap.s1').toggleClass('active-border');
        }

        if (id === "toggle2") {
            $('#open2').slideToggle();
            $('.caupon-wrap.s2').toggleClass('coupon-2');
        }

        if (id === "toggle3") {
            $('#open3').slideToggle();
            $('.caupon-wrap.s2').toggleClass('coupon-2');
        }

        if (id === "toggle4") {
            $('#open4').slideToggle();
            $('.caupon-wrap.s3').toggleClass('coupon-2');
        }
    });


    /*------------------------------------------
     = service-slider
 -------------------------------------------*/
    if ($(".service-slider").length) {
        $(".service-slider").owlCarousel({
            autoplay: true,
            smartSpeed: 1500,
            loop: true,
            margin: 25,
            dots: true,
            nav: false,
            items: 2,
            responsive: {
                0: {
                    items: 1,
                },

                576: {
                    items: 2,
                },

                1200: {
                    items: 2,
                },
            }
        });
    }

    /*------------------------------------------
        = PRELOADER
    -------------------------------------------*/
    var wow = new WOW();

    function preloader() {
        if ($('.preloader').length) {
            $('.preloader').delay(100).fadeOut(500, function () {
                wow.init();
            });
        }
    }



    /*------------------------------------------
        = BACK TO TOP
    -------------------------------------------*/
    $("body").append("<a href='#' class='back-to-top'><i class='ti-arrow-up'></i></a>");

    function toggleBackToTopBtn() {
        ($(window).scrollTop() > 1000)
            ? $(".back-to-top").fadeIn("slow")
            : $(".back-to-top").fadeOut("slow");
    }

    $(".back-to-top").on("click", function () {
        $("html,body").animate({ scrollTop: 0 }, 700);
        return false;
    });


    /*------------------------------------------
        = CONTACT FORM (main)
    -------------------------------------------*/
    if ($("#contact-form-main").length && $.fn.validate) {
        $("#contact-form-main").validate({
            rules: {
                name: { required: true, minlength: 2 },
                email: "required",
                phone: "required",
            },

            messages: {
                name: "Please enter your name",
                email: "Please enter your email address",
                phone: "Please enter your phone number",
            },

            submitHandler: function (form) {
                $.ajax({
                    type: "POST",
                    url: "mail-contact.php",
                    data: $(form).serialize(),
                    success: function () {
                        $("#loader").hide();
                        $("#success").slideDown();

                        setTimeout(() => $("#success").slideUp(), 3000);
                        form.reset();
                    },
                    error: function () {
                        $("#loader").hide();
                        $("#error").slideDown();

                        setTimeout(() => $("#error").slideUp(), 3000);
                    }
                });
                return false;
            }
        });
    }

    /*------------------------------------------
        = CONTACT FORM (simple)
    -------------------------------------------*/
    if ($("#contact-form").length && $.fn.validate) {
        $("#contact-form").validate({
            rules: {
                name: { required: true, minlength: 2 },
                email: "required",
                phone: "required",
                address: "required",
                subject: "required"
            },

            messages: {
                name: "Please enter your name",
                email: "Please enter your email address",
                phone: "Please enter your phone number",
                subject: "Please select your contact subject",
                address: "Please select your address"
            },

            submitHandler: function (form) {
                $.ajax({
                    type: "POST",
                    url: "mail-contact.php",
                    data: $(form).serialize(),

                    success: function () {
                        $("#loader").hide();
                        $("#success").slideDown();

                        setTimeout(() => $("#success").slideUp(), 3000);
                        form.reset();
                    },

                    error: function () {
                        $("#loader").hide();
                        $("#error").slideDown();

                        setTimeout(() => $("#error").slideUp(), 3000);
                    }
                });
                return false;
            }
        });
    }

    /*------------------------------------------
        = WINDOW LOAD
    -------------------------------------------*/
    $(window).on('load', function () {
        preloader();
        toggleMobileNavigation();
        smallNavFunctionality();
    });

    /*------------------------------------------
        = WINDOW SCROLL
    -------------------------------------------*/
    $(window).on("scroll", function () {
        toggleBackToTopBtn();
    });

    /* cursor style js*/
    var cursor = document.querySelector('.cursor');
    var cursorinner = document.querySelector('.cursor2');
    var a = document.querySelectorAll('a');

    document.addEventListener('mousemove', function (e) {
        var x = e.clientX;
        var y = e.clientY;
        cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
    });

    document.addEventListener('mousemove', function (e) {
        var x = e.clientX;
        var y = e.clientY;
        cursorinner.style.left = x + 'px';
        cursorinner.style.top = y + 'px';
    });

    document.addEventListener('mousedown', function () {
        cursor.classList.add('click');
        cursorinner.classList.add('cursorinnerhover')
    });

    document.addEventListener('mouseup', function () {
        cursor.classList.remove('click')
        cursorinner.classList.remove('cursorinnerhover')
    });

    a.forEach(item => {
        item.addEventListener('mouseover', () => {
            cursor.classList.add('hover');
        });
        item.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    })

    /*------------------------------------------
        = WINDOW RESIZE
    -------------------------------------------*/
    $(window).on("resize", function () {
        toggleClassForSmallNav();

        clearTimeout($.data(this, 'resizeTimer'));
        $.data(this, 'resizeTimer', setTimeout(function () {
            smallNavFunctionality();
        }, 200));
    });

})(window.jQuery);

