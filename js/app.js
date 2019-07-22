// IIFE with jQuery Wrapper
(function($) {
  'use strict';

  /*
   *----------------------------------
   * Document Ready
   *----------------------------------
   */
	$(document).ready(function() {

		/****************************
		  First Modal
		*****************************/
		setTimeout(function(){
		    $('#myModalCenter').modal('show');
		},1000);

	    /****************************
	      stellarnav DropDown Menu
	    *****************************/
        $('.stellarnav').stellarNav({ position: 'right' });
        var gsMagaMenu = $('#gs-maga-menu').innerWidth();
        // var gsMagaMenu = $('#gs-maga-menu').innerWidth();
        $('#gs-maga-menu .gs-maga ul.show-maga')
        .css("width", gsMagaMenu);


	    /****************************
	      Create Fullscreen Nav 1
	    *****************************/
	    $(".menu-btn a").click(function () {
	        $(".overlay").fadeToggle(200);
	        $(this).toggleClass('btn-open').toggleClass('btn-close');
	    });

	    $('.overlay').on('click', function () {
	        $(".overlay").fadeToggle(200);
	        $(".menu-btn a").toggleClass('btn-open').toggleClass('btn-close');
	    });

	    $('.menu a').on('click', function () {
	        $(".overlay").fadeToggle(200);
	        $(".menu-btn a").toggleClass('btn-open').toggleClass('btn-close');
	    });


	    /****************************
	      Xzoom Slider
	    *****************************/
        $(".xzoom, .xzoom-gallery").xzoom({tint: '#333', Xoffset: 15});

        $('#xzoom-thumbs').owlCarousel({
            loop:false,
            margin:10,
            nav:true,
            navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:3
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        })

	    /****************************
	      Recommended Slider
	    *****************************/

        $('#gs-recommended').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        })

	    /****************************
	      Owl Carousel
	    *****************************/
	    $('.owl-carousel').owlCarousel({
	        loop:true,
	        margin:0,
	        nav:true,
	        items:1,
	        autoplay:true,
	        animateOut: 'fadeOut',
	        animateIn: 'fadeIn',
	        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	        responsive:{
	            0:{
	                items:1
	            },
	            600:{
	                items:1
	            },
	            1000:{
	                items:1
	            }
	        }
	    })



	    /****************************
	      Footer
	    *****************************/
	    if($(window).width() < 450){
	        $( "#menuOne" ).on( "click", function() {
	          $( this ).toggleClass( "open" );
	        });
	        $( "#menuTwo" ).on( "click", function() {
	          $( this ).toggleClass( "open" );
	        });
	        $( "#menuThree" ).on( "click", function() {
	          $( this ).toggleClass( "open" );
	        });
	        $( "#menuFour" ).on( "click", function() {
	          $( this ).toggleClass( "open" );
	        });
	    }


	    /****************************
	      Quantitybox
	    *****************************/
        $(".gs-quantitybox").append('<div class="decrement-button gs-quantitybox-button">-</i></div><div class="increment-button gs-quantitybox-button">+</div>'), $(".gs-quantitybox-button").on("click", function() {
            var t, e = $(this),
                i = e.parent().find("input").val();
            t = "+" == e.text() ? parseFloat(i) + 1 : 1 < i ? parseFloat(i) - 1 : 1, e.parent().find("input").val(t)
        })


        /****************************
          Add to cart
        *****************************/
        $('.count').prop('disabled', true);
        $(document).on('click','.plus',function(){
            $('.count').val(parseInt($('.count').val()) + 1 );
        });
        $(document).on('click','.minus',function(){
            $('.count').val(parseInt($('.count').val()) - 1 );
            if ($('.count').val() == 0) {
                $('.count').val(1);
            }
        });

	    
	});// DOM Ready


}(jQuery)); // IIFE

