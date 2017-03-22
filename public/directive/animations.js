angular.module('app')
    .directive('animationsDirective', function () {
        return {
            restrict: 'EA',
            scope: {
                animate: '='
            },
            link: function (scope, element, attributes) {
                $(document).ready(function () {
                    //     // all jquery goes here
                    //     $('.collections-name').hover(function(){
                    //         console.log('hover activate')
                    //         $('.feliz-bg').css('background-image', "url('//cdn.shopify.com/s/files/1/1653/9561/t/3/assets/home_collection_2_image.jpg?7955300992394463818')" )
                    //     },
                    //     function(){
                    //         console.log('hover deactivate')
                    //         $('.feliz-bg').css('background-image', "url('//cdn.shopify.com/s/files/1/1653/9561/t/3/assets/home_collection_1_image.jpg?7955300992394463818')" )
                    //     }

                    //     )

                    // $(window).scroll(function(){
                    //     console.log('scroll works')
                    //     $('html, body').animate({
                    //         scrollTop: $(".homebg_1").offset().top + $(".homebg_1")[0].scrollHeight
                    //     }, 1000);
                    //     return false;
                    // })
                    // var iScrollPos = 0;



                    // $('.homebg_').scroll(function () {

                    //     var iCurScrollPos = $(this).scrollTop();
                    //     if (iCurScrollPos > iScrollPos) {
                    //         //Scrolling Down
                    //         console.log('down')
                    //     } else {
                    //         //Scrolling Up
                    //         console.log('up')

                    //     }
                    //     iScrollPos = iCurScrollPos;
                    // });
                    $(window).scroll(function () {
                        var height = $(window).scrollTop();
                        // console.log(height)
                        if (height > 700) {
                            // do something
                            $(".site-header").css({
                                margin: 0
                            });
                            $(".experiment").css({
                                paddingLeft: 100
                            });




                            // console.log('menu slides out now')
                        } else {
                            $(".site-header").css({
                                margin: -100
                            });
                            $(".experiment").css({
                                paddingLeft: 0
                            })
                        }
                    });

                    //#################PRODUCT HOVER#################################
                    // $('.gallery').hover(function(){
                    //     $('gallery').css(background)
                    // })

                    // slide down menu
                    // $( window ).click(function () {
                    //   if ( $( ".site-header" ).is( ":hidden" ) ) {
                    //     $( ".site-header" ).slideDown( "slow" );
                    //   } else {
                    //     $( ".site-header" ).hide();
                    //   }
                    // });
                    $(window).click(function (event) {
                        event.preventDefault();
                        // console.log('so far so good')

                        $(".site-header").css({
                            margin: 0
                        });


                    });
                    //   $('product--bg_img').ready(function(event){
                    //     $("header").css({
                    //             margin: 0
                    //         });
                    //         $(".experiment").css({
                    //             paddingLeft: 100
                    //         });
                        
                    // });
                    // $(window).ready(function(event){
                    //      $(".cart").hide();
                    //     $(".cart-overlay").hide();

                    // });
                    // $('.product--add_cart').click(function (event) {
                    //     console.log('added jquery works')
                    //     $(".cart").show();
                    //     $(".cart-overlay").show();

                    // });

                    //  $('.cart-overlay,  .header--cart').click(function (event) {
                    //      $(".cart").hide();
                    //     $(".cart-overlay").hide();



                    //  });
                    $('.ham').click(function (event) {
                        console.log('2nd ham clicked')
                    });
                     $('.ham').click(function (event) {
                         console.log('ham clicked')
                         $(".header-expand").css({
                             marginLeft: 100
                         });
                          $(".header-overlay").css({
                             marginRight: 0
                         });

                         $('header').css({
                             background: '#000000'
                         });
                          $('.header--ham').css(
                             'background-color', 'white'
                         );
                          $(".site-header__logo").css(
                         'background-image', 'url("//cdn.shopify.com/s/files/1/1653/9561/t/3/assets/logo-white.png?285845556141198520")'

                        );
                          $(".header--cart").css(
                            'background-image', 'url("//cdn.shopify.com/s/files/1/1653/9561/t/3/assets/cart-white.png?285845556141198520")'
                        
                         );
                        
                     })
                    $('.header-overlay' ).click(function(event){
                        $(".header-expand").css({
                             marginLeft: -600
                         });
                          $(".header-overlay").css(
                             "margin-right", "-70vw"
                         );

                         $('header').css({
                             background: '#fff'
                         });
                          $(".site-header__logo").css(
                         'background-image', 'url("//cdn.shopify.com/s/files/1/1653/9561/t/3/assets/logo.png?285845556141198520")'

                        );
                        $('.header--ham').css(
                             'background-color', 'black'
                         );
                          $(".header--cart").css(
                            'background-image', 'url("//cdn.shopify.com/s/files/1/1653/9561/t/3/assets/cart.png?285845556141198520")'
                        
                         );
                    })
                    // $('.prodHover').mouseover(function(){
                    //     console.log('prod hovered')
                    //     // $('.prod_image').css('margin-top', '7vh')
                    //     $( ".prod_image" ).off( "mouseenter mouseleave" );
                    // })


                })
            }


        }
    })