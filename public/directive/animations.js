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
                        console.log(height)
                        if (height > 700) {
                            // do something
                            $("header").css({
                                margin: 0
                            });
                            $(".experiment").css({
                                paddingLeft: 100
                            });




                            console.log('menu slides out now')
                        } else {
                            $("header").css({
                                margin: -100
                            });
                            $(".experiment").css({
                                paddingLeft: 0
                            })
                        }
                    });

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
                        console.log('so far so good')

                        $("header").css({
                            margin: 0
                        });


                    });







                })
            }


        }
    })