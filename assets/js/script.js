(function($) {

	"use strict";


    /*------------------------------------------
        = ALL ESSENTIAL FUNCTIONS
    -------------------------------------------*/


    // Toggle mobile navigation
    function toggleMobileNavigation() {
        var navbar = $(".navigation-holder");
        var openBtn = $(".mobail-menu .open-btn");
        var xbutton = $(".mobail-menu .navbar-toggler");

        openBtn.on("click", function(e) {
            e.stopImmediatePropagation();
            navbar.toggleClass("slideInn");
            xbutton.toggleClass("x-close");
            return false;
        })
    }

    toggleMobileNavigation();


    // Function for toggle class for small menu
    function toggleClassForSmallNav() {
        var windowWidth = window.innerWidth;
        var mainNav = $("#navbar > ul");

        if (windowWidth <= 991) {
            mainNav.addClass("small-nav");
        } else {
            mainNav.removeClass("small-nav");
        }
    }

    toggleClassForSmallNav();


    // Function for small menu
    function smallNavFunctionality() {
        var windowWidth = window.innerWidth;
        var mainNav = $(".navigation-holder");
        var smallNav = $(".navigation-holder > .small-nav");
        var subMenu = smallNav.find(".sub-menu");
        var megamenu = smallNav.find(".mega-menu");
        var menuItemWidthSubMenu = smallNav.find(".menu-item-has-children > a");

        if (windowWidth <= 991) {
            subMenu.hide();
            megamenu.hide();
            menuItemWidthSubMenu.on("click", function(e) {
                var $this = $(this);
                $this.siblings().slideToggle();
                e.preventDefault();
                e.stopImmediatePropagation();
                $this.toggleClass("rotate");
            })
        } else if (windowWidth > 991) {
            mainNav.find(".sub-menu").show();
            mainNav.find(".mega-menu").show();
        }
    }

    smallNavFunctionality();

    $("body").on("click", function() {
        $('.navigation-holder').removeClass('slideInn');
    });
    $(".menu-close").on("click", function() {
        $('.navigation-holder').removeClass('slideInn');
    });
    $(".menu-close").on("click", function() {
        $('.open-btn').removeClass('x-close');
    });


    // toggle1
    $('#toggle1').on( "click", function() {
        $('.create-account').slideToggle();
        $('.caupon-wrap.s1').toggleClass('active-border')
    })

      // toggle2
      $('#toggle2').on("click", function() {
        $('#open2').slideToggle();
        $('.caupon-wrap.s2').toggleClass('coupon-2')
    })

    // toggle3
    $('#toggle3').on("click", function() {
        $('#open3').slideToggle();
        $('.caupon-wrap.s2').toggleClass('coupon-2')
    })
    // toggle4
    $('#toggle4').on("click", function() {
        $('#open4').slideToggle();
        $('.caupon-wrap.s3').toggleClass('coupon-2')
    })

    $('.payment-select .addToggle').on('click', function(){
        $('.payment-name').addClass('active')
        $('.payment-option').removeClass('active')
    })


    $('.payment-select .removeToggle').on('click', function(){
        $('.payment-option').addClass('active')
        $('.payment-name').removeClass('active')
    });

    
    // tooltips

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })


    //  hover-active
    let items = document.querySelectorAll('.wpo-service-section-s4 .wpo-service-item, .wpo-team-wrap .wpo-team-item, .wpo-project-section-s4 .grid');
    items.forEach( item => item.addEventListener('mouseenter', function() {handleHover(this, items)}))
    function handleHover(el) {
        items.forEach(item => {
            item.classList.remove('active')
            item.classList.add('item')
        })
        
        el.classList.add('active')
    }

    // Parallax background
    function bgParallax() {
        if ($(".parallax").length) {
            $(".parallax").each(function() {
                var height = $(this).position().top;
                var resize     = height - $(window).scrollTop();
                var doParallax = -(resize/5);
                var positionValue   = doParallax + "px";
                var img = $(this).data("bg-image");

                $(this).css({
                    backgroundImage: "url(" + img + ")",
                    backgroundPosition: "50%" + positionValue,
                    backgroundSize: "cover"
                });
            });
        }
    }

    // Hero slider background setting
    function sliderBgSetting() {
        if ($(".hero-slider .slide").length) {
            $(".hero-slider .slide").each(function() {
                var $this = $(this);
                var img = ($this.find(".slider-bg").attr("src")) ? $this.find(".slider-bg").attr("src") : false;

                if(img) {
                    $this.css({
                        backgroundImage: "url("+ img +")",
                        backgroundSize: "cover",
                        backgroundPosition: "center center"
                    })
                }
            });
        }
    }


    //Setting hero slider
    function heroSlider() {
        if ($(".hero-slider").length) {
            $(".hero-slider").slick({
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev">Previous</button>',
                nextArrow: '<button type="button" class="slick-next">Next</button>',
                dots: true,
                fade: true,
                cssEase: 'linear',
            });
        }
    }

    //Active heor slider
    heroSlider();

    // HERO SLIDER
    var menu = [];
    jQuery('.swiper-slide').each( function(index){
        menu.push( jQuery(this).find('.slide-inner').attr("data-text") );
    });
    var interleaveOffset = 0.5;
    var swiperOptions = {
        loop: true,
        speed: 1000,
        parallax: true,
        autoplay: {
            delay: 6500,
            disableOnInteraction: false,
        },
        watchSlidesProgress: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        on: {
            progress: function() {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    var slideProgress = swiper.slides[i].progress;
                    var innerOffset = swiper.width * interleaveOffset;
                    var innerTranslate = slideProgress * innerOffset;
                    swiper.slides[i].querySelector(".slide-inner").style.transform =
                    "translate3d(" + innerTranslate + "px, 0, 0)";
                }      
            },

            touchStart: function() {
              var swiper = this;
              for (var i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = "";
              }
            },

            setTransition: function(speed) {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = speed + "ms";
                    swiper.slides[i].querySelector(".slide-inner").style.transition =
                    speed + "ms";
                }
            }
        }
    };

    var swiper = new Swiper(".swiper-container", swiperOptions);

    // DATA BACKGROUND IMAGE
    var sliderBgSetting = $(".slide-bg-image");
    sliderBgSetting.each(function(indx){
        if ($(this).attr("data-background")){
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });





    /*------------------------------------------
        = HIDE PRELOADER
    -------------------------------------------*/
    function preloader() {
        if($('.preloader').length) {
            $('.preloader').delay(100).fadeOut(500, function() {
                //active wow
                wow.init();
            });
        }
    }


    /*------------------------------------------
        = WOW ANIMATION SETTING
    -------------------------------------------*/
    var wow = new WOW({
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    });


    /*------------------------------------------
        = ACTIVE POPUP IMAGE
    -------------------------------------------*/
    if ($(".fancybox").length) {
        $(".fancybox").fancybox({
            openEffect  : "elastic",
            closeEffect : "elastic",
            wrapCSS     : "project-fancybox-title-style"
        });
    }


    /*------------------------------------------
        = POPUP VIDEO
    -------------------------------------------*/
    if ($(".video-btn").length) {
        $(".video-btn").on("click", function(){
            $.fancybox({
                href: this.href,
                aspectRatio: true,
                type: $(this).data("type"),
                'title'         : this.title,
                helpers     : {
                    title : { type : 'inside' },
                    media : {}
                },

                beforeShow : function(){
                    $(".fancybox-wrap").addClass("gallery-fancybox");
                }
            });
            return false
        });
    }


    /*------------------------------------------
        = ACTIVE GALLERY POPUP IMAGE
    -------------------------------------------*/
    if ($(".popup-gallery").length) {
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',

            gallery: {
              enabled: true
            },

            zoom: {
                enabled: true,

                duration: 300,
                easing: 'ease-in-out',
                opener: function(openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    }


    /*------------------------------------------
        = FUNCTION FORM SORTING GALLERY
    -------------------------------------------*/
    function sortingGallery() {
        if ($(".sortable-gallery .gallery-filters").length) {
            var $container = $('.gallery-container');
            $container.isotope({
                filter:'*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });

            $(".gallery-filters li a").on("click", function() {
                $('.gallery-filters li .current').removeClass('current');
                $(this).addClass('current');
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter:selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
                return false;
            });
        }
    }

    sortingGallery();


    /*------------------------------------------
        = MASONRY GALLERY SETTING
    -------------------------------------------*/
    function masonryGridSetting() {
        if ($('.masonry-gallery').length) {
            var $grid =  $('.masonry-gallery').masonry({
                itemSelector: '.grid-item',
                columnWidth: '.grid-item',
                percentPosition: true
            });

            $grid.imagesLoaded().progress( function() {
                $grid.masonry('layout');
            });
        }
    }

    // masonryGridSetting();


      /*------------------------------------------
        = FUNFACT
    -------------------------------------------*/
    if ($(".odometer").length) {
        $('.odometer').appear();
        $(document.body).on('appear', '.odometer', function(e) {
            var odo = $(".odometer");
            odo.each(function() {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
            });
        });
    }



    /*------------------------------------------
        = STICKY HEADER
    -------------------------------------------*/

    // Function for clone an element for sticky menu
    function cloneNavForSticyMenu($ele, $newElmClass) {
        $ele.addClass('original').clone().insertAfter($ele).addClass($newElmClass).removeClass('original');
    }

    // clone home style 1 navigation for sticky menu
    if ($('.wpo-site-header .navigation').length) {
        cloneNavForSticyMenu($('.wpo-site-header .navigation'), "sticky-header");
    }

    var lastScrollTop = '';

    function stickyMenu($targetMenu, $toggleClass) {
        var st = $(window).scrollTop();
        var mainMenuTop = $('.wpo-site-header .navigation');

        if ($(window).scrollTop() > 1000) {
            if (st > lastScrollTop) {
                // hide sticky menu on scroll down
                $targetMenu.removeClass($toggleClass);

            } else {
                // active sticky menu on scroll up
                $targetMenu.addClass($toggleClass);
            }

        } else {
            $targetMenu.removeClass($toggleClass);
        }

        lastScrollTop = st;


    }



/*------------------------------------------
        = Header search toggle
    -------------------------------------------*/
    if($(".header-search-form-wrapper").length) {
        var searchToggleBtn = $(".search-toggle-btn");
        var searchToggleBtnIcon = $(".search-toggle-btn i");
        var searchContent = $(".header-search-form");
        var body = $("body");

        searchToggleBtn.on("click", function(e) {
            searchContent.toggleClass("header-search-content-toggle");
            searchToggleBtnIcon.toggleClass("fi flaticon-search-interface-symbol fi ti-close");
            e.stopPropagation();
        });

        body.on("click", function() {
            searchContent.removeClass("header-search-content-toggle");
        }).find(searchContent).on("click", function(e) {
            e.stopPropagation();
        });
    }


    /*------------------------------------------
        = Header shopping cart toggle
    -------------------------------------------*/
    if($(".mini-cart").length) {
        var cartToggleBtn = $(".cart-toggle-btn");
        var cartContent = $(".mini-cart-content");
        var cartCloseBtn = $(".mini-cart-close");
        var body = $("body");

        cartToggleBtn.on("click", function(e) {
            cartContent.toggleClass("mini-cart-content-toggle");
            e.stopPropagation();
        });

        cartCloseBtn.on("click", function(e) {
            cartContent.removeClass("mini-cart-content-toggle");
            e.stopPropagation();
        });

        body.on("click", function() {
            cartContent.removeClass("mini-cart-content-toggle");
        }).find(cartContent).on("click", function(e) {
            e.stopPropagation();
        });
    }


    /*------------------------------------------
        = RECENT CASE SECTION SHOW HIDE
    -------------------------------------------*/
    if($('.service-thumbs').length){
        $('.service-thumb').on('click', function(e) {
            e.preventDefault();
            var target = $($(this).attr('data-case'));
            $('.service-thumb').removeClass('active-thumb');
            $(this).addClass('active-thumb');
            $('.service-content .service-data').hide(0);
            $('.service-data').fadeOut(300).removeClass('active-service-data');
            $(target).fadeIn(300).addClass('active-service-data');
        });
    }

    /*------------------------------------------
        = Service SLIDER
    -------------------------------------------*/
    if ($(".wpo-service-slider").length) {
        $(".wpo-service-slider").owlCarousel({
            autoplay: false,
            smartSpeed: 300,
            margin: 20,
            loop:true,
            autoplayHoverPause:true,
            dots: true,
            nav: false,
            center: true,
            responsive: {
                0 : {
                    items: 1,
                    dots: true,
                    nav: false,
                    center: false,
                },

                500 : {
                    items: 1,
                    dots: true,
                    nav: false,
                    center: false,
                },

                768 : {
                    items: 2,
                    center: false,
                },

                991 : {
                    items: 2,
                    center: false,
                },
                1200 : {
                    items: 3,
                },

                1400 : {
                    items: 3
                },

            }
        });
    }
    /*------------------------------------------
        = Service SLIDER S2
    -------------------------------------------*/
    if ($(".wpo-service-slider-s2").length) {
        $(".wpo-service-slider-s2").owlCarousel({
            autoplay: false,
            smartSpeed: 300,
            margin: 30,
            loop:true,
            autoplayHoverPause:true,
            dots: false,
            nav: true,
            navText: ['<i class="fi ti-angle-double-left"></i>','<i class="fi ti-angle-double-right"></i>'],
            center: true,
            responsive: {
                0 : {
                    items: 1,
                    dots: true,
                    nav: false,
                    center: false,
                },

                500 : {
                    items: 1,
                    nav: false,
                    center: false,
                },

                768 : {
                    items: 2,
                    center: false,
                },

                991 : {
                    items: 2,
                    center: false,
                },
                1200 : {
                    items: 3,
                },

                1400 : {
                    items: 3
                },

            }
        });
    }

    /*------------------------------------------
        = Project SLIDER
    -------------------------------------------*/
    if ($(".project-slider").length) {
        $(".project-slider").owlCarousel({
            autoplay: false,
            smartSpeed: 300,
            margin: 20,
            loop:true,
            autoplayHoverPause:true,
            dots: false,
            nav: true,
            navText: ['<i class="fi flaticon-left-arrow"></i>','<i class="fi flaticon-right-arrow"></i>'],
            responsive: {
                0 : {
                    items: 1,
                    dots: true,
                    nav: false,
                },

                500 : {
                    items: 1,
                    dots: true,
                    nav: false,
                },

                768 : {
                    items: 2,
                },

                991 : {
                    items: 2,
                },
                1200 : {
                    items: 3,
                },

                1400 : {
                    items: 3
                },

            }
        });
    }
    /*------------------------------------------
        = Project SLIDER S2
    -------------------------------------------*/
    if ($(".project-slider-s2").length) {
        $(".project-slider-s2").owlCarousel({
            autoplay: false,
            smartSpeed: 300,
            margin: 20,
            loop:true,
            autoplayHoverPause:true,
            dots: false,
            nav: true,
            navText: ['<i class="fi flaticon-left-arrow"></i>','<i class="fi flaticon-right-arrow"></i>'],
            responsive: {
                0 : {
                    items: 1,
                    dots: true,
                    nav: false,
                },

                500 : {
                    items: 1,
                    dots: true,
                    nav: false,
                },

                600 : {
                    items:2,
                    dots: true,
                    nav: false,
                },

                768 : {
                    items: 2,
                },

                991 : {
                    items: 2,
                },
                1200 : {
                    items: 3,
                },

                1400 : {
                    items: 4
                },

            }
        });
    }
    /*------------------------------------------
        = Project SLIDER S3
    -------------------------------------------*/
    if ($(".project-slider-s3").length) {
        $(".project-slider-s3").owlCarousel({
            autoplay: false,
            smartSpeed: 300,
            margin: 20,
            loop:true,
            autoplayHoverPause:true,
            dots: false,
            nav: true,
            center:true,
            navText: ['<i class="fi flaticon-left-arrow"></i>','<i class="fi flaticon-right-arrow"></i>'],
            responsive: {
                0 : {
                    items: 1,
                    dots: true,
                    nav: false,
                },

                500 : {
                    items: 1,
                    dots: true,
                    nav: false,
                },

                600 : {
                    items:2,
                    dots: true,
                    nav: false,
                },

                768 : {
                    items: 2,
                },

                991 : {
                    items: 2,
                },
                1200 : {
                    items: 3,
                },

                1400 : {
                    items: 4
                },

            }
        });
    }

    /*------------------------------------------
        = Testimonial SLIDER
    -------------------------------------------*/
    if ($(".wpo-happy-client-slide").length) {
        $(".wpo-happy-client-slide").owlCarousel({
            autoplay: true,
            smartSpeed: 300,
            margin: 0,
            loop:true,
            autoplayHoverPause:true,
            dots: false,
            nav: false,
            items:4
        });
    }



    /*------------------------------------------
        = wpo-project-single-main-img
    -------------------------------------------*/
    if($(".wpo-project-single-main-img".length)) {
        $(".wpo-project-single-main-img").owlCarousel({
            mouseDrag: false,
            smartSpeed: 500,
            margin: 30,
            loop:true,
            nav: true,
            navText: ['<i class="fi ti-arrow-left"></i>','<i class="fi ti-arrow-right"></i>'],
            dots: false,
            items: 1
        });
    } 




    /*------------------------------------------
        = POST SLIDER
    -------------------------------------------*/
    if($(".post-slider".length)) {
        $(".post-slider").owlCarousel({
            mouseDrag: false,
            smartSpeed: 500,
            margin: 30,
            loop:true,
            nav: true,
            navText: ['<i class="fi ti-arrow-left"></i>','<i class="fi ti-arrow-right"></i>'],
            dots: false,
            items: 1
        });
    }  


    /*------------------------------------------
        = Testimonial slider 1
    -------------------------------------------*/
    if ($(".wpo-testimonial-wrap").length) {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            focusOnSelect: true,
            dots:true,

        });
    }

    /*------------------------------------------
        = Testimonial slider 2
    -------------------------------------------*/

    $('.wpo-testimonial-slide').slick({
        arrows: true,
        speed: 1000,
        fade:true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000
      });

    /*------------------------------------------
        wpo-testimonial-slide-s3
    -------------------------------------------*/
    if ($(".wpo-testimonial-slide-s3").length) {
        $(".wpo-testimonial-slide-s3").owlCarousel({
            autoplay: false,
            smartSpeed: 300,
            margin: 30,
            loop:true,
            autoplayHoverPause:true,
            dots: false,
            nav: true,
            center:true,
            navText: ['<i class="fi flaticon-left-arrow"></i>','<i class="fi flaticon-right-arrow"></i>'],
            responsive: {
                0 : {
                    items: 1,
                    dots: true,
                    nav: false,
                    center:false
                },

                500 : {
                    items: 1,
                    dots: true,
                    nav: false,
                    center:false
                },

                768 : {
                    items: 2,
                    center:false
                },

                991 : {
                    items: 2,
                    center:false
                },
                1200 : {
                    items: 3,
                },

                1400 : {
                    items: 3
                },

            }
        });
    }


      /*------------------------------------------
        = PARTNERS SLIDER
    -------------------------------------------*/
    if ($(".partners-slider").length) {
        $(".partners-slider").owlCarousel({
            autoplay:true,
            smartSpeed: 300,
            margin: 60,
            loop:true,
            autoplayHoverPause:true,
            dots: false,
            responsive: {
                0 : {
                    items: 2
                },

                550 : {
                    items: 3
                },

                992 : {
                    items: 4
                },

                1200 : {
                    items: 4
                }
            }
        });
    }


    /*------------------------------------------
        = SHOP DETAILS PAGE PRODUCT SLIDER
    -------------------------------------------*/
    if ($(".shop-single-slider").length) {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            focusOnSelect: true,
            prevArrow: '<i class="nav-btn nav-btn-lt ti-arrow-left"></i>',
            nextArrow: '<i class="nav-btn nav-btn-rt ti-arrow-right"></i>',

            responsive: [
                {
                    breakpoint: 500,
                    settings: {
                    slidesToShow: 3,
                        infinite: true
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]

        });
    }


    /*------------------------------------------
        = TOUCHSPIN FOR PRODUCT SINGLE PAGE
    -------------------------------------------*/
    if ($("input[name='product-count']").length) {
        $("input[name='product-count']").TouchSpin({
            verticalbuttons: true
        });
    }

    /*-----------------------
       cart-plus-minus-button 
     -------------------------*/
     $(".cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
     $(".qtybutton").on("click", function() {
         var $button = $(this);
         var oldValue = $button.parent().find("input").val();
         if ($button.text() == "+") {
             var newVal = parseFloat(oldValue) + 1;
         } else {
             // Don't allow decrementing below zero
             if (oldValue > 0) {
                 var newVal = parseFloat(oldValue) - 1;
             } else {
                 newVal = 0;
             }
         }
         $button.parent().find("input").val(newVal);
     });


     /*------------------------------------------
        = BACK TO TOP BTN SETTING
    -------------------------------------------*/
    $("body").append("<a href='#' class='back-to-top'><i class='ti-arrow-up'></i></a>");

    function toggleBackToTopBtn() {
        var amountScrolled = 1000;
        if ($(window).scrollTop() > amountScrolled) {
            $("a.back-to-top").fadeIn("slow");
        } else {
            $("a.back-to-top").fadeOut("slow");
        }
    }

    $(".back-to-top").on("click", function() {
        $("html,body").animate({
            scrollTop: 0
        }, 700);
        return false;
    })


    /*------------------------------------------
        = CONTACT FORM SUBMISSION
    -------------------------------------------*/
    if ($("#contact-form-main").length) {
        $("#contact-form-main").validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },

                email: "required",

                phone: "required",

                adress: "required",

                service: "required",   

            },

            messages: {
                name: "Please enter your name",
                email: "Please enter your email address",
                phone: "Please enter your phone number",
                adress: "Please enter your adress",
                service: "Please select your contact service",
            },

            submitHandler: function (form) {
                $.ajax({
                    type: "POST",
                    url: "mail-contact.php",
                    data: $(form).serialize(),
                    success: function () {
                        $( "#loader").hide();
                        $( "#success").slideDown( "slow" );
                        setTimeout(function() {
                        $( "#success").slideUp( "slow" );
                        }, 3000);
                        form.reset();
                    },
                    error: function() {
                        $( "#loader").hide();
                        $( "#error").slideDown( "slow" );
                        setTimeout(function() {
                        $( "#error").slideUp( "slow" );
                        }, 3000);
                    }
                });
                return false; // required to block normal submit since you used ajax
            }

        });
    }


    /*==========================================================================
        WHEN DOCUMENT LOADING
    ==========================================================================*/
        $(window).on('load', function() {

            preloader();  

            sortingGallery();
            
            toggleMobileNavigation();

            smallNavFunctionality();
        });



    /*==========================================================================
        WHEN WINDOW SCROLL
    ==========================================================================*/
    $(window).on("scroll", function() {

		if ($(".wpo-site-header").length) {
           stickyMenu( $('.wpo-site-header .navigation'), "sticky-on" );
        }

        toggleBackToTopBtn();

    });


    /*==========================================================================
        WHEN WINDOW RESIZE
    ==========================================================================*/
    $(window).on("resize", function() {
        toggleClassForSmallNav();
        //smallNavFunctionality();

        clearTimeout($.data(this, 'resizeTimer'));
        $.data(this, 'resizeTimer', setTimeout(function() {
            smallNavFunctionality();
        }, 200));
    });




})(window.jQuery);
