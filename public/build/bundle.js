'use strict';

angular.module('app', ['ui.router', 'angular-stripe']).config(function ($urlRouterProvider, $stateProvider, stripeProvider) {

  stripeProvider.setPublishableKey('pk_test_OAGqNNdxYIiPPvz2vK7Z5VYA');

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
    controller: 'controller',
    templateUrl: './views/home.html'
  }).state('product', {
    url: '/product/:id',
    controller: 'productDetailsCtrl',
    templateUrl: './views/product.html'
  }).state('login', {
    url: '/login',
    controller: 'controller',
    templateUrl: './views/login.html'
  }).state('checkout', {
    url: '/checkout',
    controller: 'checkoutCtrl',
    templateUrl: './views/checkout.html'
  }).state('congrats', {
    url: '/congrats',
    templateUrl: './views/congrats.html'
  });
});
'use strict';

angular.module('app').controller('cartCtrl', function ($scope, mainSvc, $stateParams, $state) {

    $scope.showme = function () {
        console.log(mainSvc.showme);
        return mainSvc.showme;
    };
    $scope.showmeFalse = function () {
        mainSvc.showme = false;
    };
    $scope.hidemeFn = function () {
        mainSvc.showme = false;
    };

    $scope.cart = mainSvc.getCart();

    $scope.checkout = function () {
        // console.log('it twerks')
        $state.go('checkout');
    };

    mainSvc.getTotal().then(function (resp) {
        console.log('the total is' + resp.data.sum);
        $scope.total = resp.data[0].sum;
    });
    // mainSvc.getQuantity().then(function(resp){
    //     console.log('updating quantity')
    //     $scope.quantity = resp.data;
    // })
});
'use strict';

angular.module('app').controller('checkoutCtrl', function ($scope, stripe, $http, $state, mainSvc) {

  $scope.testx = 'werkin';

  //==========STRIPE==================

  $scope.payment = {};
  $scope.thing = $scope;
  $scope.test = function () {
    console.log('tis working');
  };

  $scope.charge = function (payment) {
    console.log(payment);
    console.log('pointA hit');
    return stripe.card.createToken($scope.payment.card).then(function (response) {
      console.log('token created for card ending in ', response.card.last4);
      var payment = angular.copy($scope.payment);
      payment.card = void 0;
      payment.token = response.id;

      return $http({
        method: 'POST',
        url: '/api/payment',
        data: {
          amount: $scope.total,
          payment: payment
        }
      });
    }).then(function (payment) {
      console.log('successfully submitted payment for $', payment);
      $state.go('congrats');
    }).catch(function (err) {
      if (err.type && /^Stripe/.test(err.type)) {
        console.log('Stripe error: ', err.message);
        alert(err.message);
      } else {
        console.log('Other error occurred, possibly with your API', err.message);
        alert(err.message);
      }
    });
  };
  mainSvc.getTotal().then(function (resp) {
    console.log('the total is' + resp.data.sum);
    $scope.total = resp.data[0].sum;
  });

  //===END CTRL=======
});
'use strict';

angular.module('app').controller('controller', function ($scope, mainSvc, $state) {
    $scope.prodView = function (id) {
        // console.log('it twerks')
        $state.go('product', {
            id: id
        });
    };

    $scope.test1 = mainSvc.test1;
    mainSvc.readProducts().then(function (resp) {
        // console.log(resp.data)
        $scope.products = resp.data;
    });
    // mainSvc.getTotal().then(function(resp){
    //     console.log('the total is' + resp.data.sum)
    //     $scope.total = resp.data[0].sum;
    // })


    // service.readProduct().then(function(resp){
    //     $scope.product = resp.data;
    // })
    $(document).ready(function () {
        // $('#header').css('opacity', 0);

        $('#animateTest').waypoint(function () {
            $('#animateTest').addClass('animated fadeInRightBig');
        }, {
            offset: '100%'
        });
    });

    // $('#loader').animateCss('slideOutUp')

    //     window.scroll({
    //   top: 2500, 
    //   left: 0, 
    //   behavior: 'smooth' 
    // });

});
'use strict';

angular.module('app').controller('navCtrl', function ($scope, mainSvc, $stateParams, $state) {

    $scope.home = function () {
        console.log('it twerks');
        $state.go('home');
    };

    $scope.showmeFn = function () {
        console.log('cart clicked');
        mainSvc.showme = true;
    };
});
'use strict';

angular.module('app').controller('productDetailsCtrl', function ($scope, mainSvc, $stateParams, $state) {
    mainSvc.readProduct($stateParams.id).then(function (resp) {
        // console.log(resp)
        $scope.product = resp.data[0];
    });
    $scope.showmeFn = function () {
        mainSvc.showme = true;
    };

    $scope.addCart = function (product) {
        // console.log(product.id)
        mainSvc.addToCart(product.id).then(function () {
            $scope.updateCart();
        });
    };

    $scope.cart = mainSvc.getCart();

    $scope.home = function () {
        console.log('it twerks');
        $state.go('home');
    };
    $scope.updateCart = function () {
        $scope.cart = mainSvc.getCart();
        console.log($scope.cart.length);
    };
});
'use strict';

angular.module('app').directive('animationsDirective', function () {
    return {
        restrict: 'EA',
        scope: {
            animate: '='
        },
        link: function link(scope, element, attributes) {
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
                //     // return false;
                // })
                // var iScrollPos = 0;

                setTimeout(function () {
                    //     $('.homebg_1').animate({scrollTop: ($('#freeShip').offset().top)},2000)
                    // }
                    $('html, body').animate({
                        scrollTop: $(".homebg_1").offset().top + $(".homebg_1")[0].scrollHeight
                    }, 1000);
                }, 6000);

                //                     setTimeout(function(){
                //     $(window).animate({ scrollTop: window.pageYOffset + $(window).height()}, 2000);
                //     return false;
                //  },3000);


                //    $(window).delay(function(){
                //                         console.log('scroll works')
                //                         $('html, body').animate({
                //                             scrollTop: $(".homebg_1").offset().top + $(".homebg_1")[0].scrollHeight
                //                         }, 1000);
                //                         return false;
                //                     },5000)
                //                     var iScrollPos = 0;


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
                    console.log(height);
                    if (height > 600) {
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
                        });
                    }
                });
                $('.product--right_scroll').scroll(function () {
                    var height = $(window).scrollTop();
                    // console.log(height)
                    if (height > 10) {
                        // do something
                        console.log('position is' + height);
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
                        });
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
                    console.log('2nd ham clicked');
                });
                $('.ham').click(function (event) {
                    console.log('ham clicked');
                    $(".header-expand").css({
                        marginLeft: 100
                    });
                    $(".header-overlay").css({
                        marginRight: 0
                    });

                    $('header').css({
                        background: '#000000'
                    });
                    $('.header--ham').css('background-color', 'white');
                    $(".site-header__logo").css('background-image', 'url("//cdn.shopify.com/s/files/1/1653/9561/t/3/assets/logo-white.png?285845556141198520")');
                    $(".header--cart").css('background-image', 'url("//cdn.shopify.com/s/files/1/1653/9561/t/3/assets/cart-white.png?285845556141198520")');
                });
                $('.header-overlay').click(function (event) {
                    $(".header-expand").css({
                        marginLeft: -600
                    });
                    $(".header-overlay").css("margin-right", "-70vw");

                    $('header').css({
                        background: '#fff'
                    });
                    $(".site-header__logo").css('background-image', 'url("//cdn.shopify.com/s/files/1/1653/9561/t/3/assets/logo.png?285845556141198520")');
                    $('.header--ham').css('background-color', 'black');
                    $(".header--cart").css('background-image', 'url("//cdn.shopify.com/s/files/1/1653/9561/t/3/assets/cart.png?285845556141198520")');
                });
                $('.prod_image').mouseover(function () {
                    console.log('prod hovered');
                    $('.prod_image').css('margin-top', '6vh');
                    $(".prod_image").off("mouseenter mouseleave");
                });
                $('.prod_image').mouseleave(function () {
                    console.log('hover off');
                    $('.prod_image').css('margin-top', '10vh');

                    $(".prod_image").off("mouseenter mouseleave");
                });
            });
        }

    };
});
'use strict';

angular.module('app').directive('cartDirective', function () {
    return {
        restrict: 'E',
        templateUrl: "././views/cart-directive.html"
    };
});
'use strict';

angular.module('app').directive('footerDirective', function () {
    return {
        restrict: 'E',
        templateUrl: "././views/footer-directive.html"
    };
});
'use strict';

angular.module('app').directive('navDirective', function () {
    return {
        restrict: 'E',
        templateUrl: "././views/nav-directive.html"
    };
});
'use strict';

angular.module('app').service('mainSvc', function ($http) {
    this.test1 = 'service works';
    this.cart = [];
    var cart = this.cart;
    this.readProducts = function () {
        return $http.get('/products').then(function (resp) {
            // console.log("Service: " + resp);
            return resp;
        });
    };
    this.readProduct = function (id) {
        //  console.log(id);
        return $http.get('/product/' + id);
    };

    this.showme = false;

    this.addToCart = function (productid) {
        return $http.post('/add-to-cart/' + productid, {
            productid: productid
        });
    };
    this.getCart = function () {
        $http.get('/cart').then(function (resp) {
            console.log(resp.data);
            Object.assign(cart, resp.data);
        });
        return cart;
    };
    this.getTotal = function () {
        return $http.get('total');
    };
    // this.getQuantity = function(){
    //     return $http.get('quantity')
    // }
    // this.getProduct = function
});
'use strict';

var app = require('./index');
var db = app.get('db');
module.exports = {

    //refer to w6/d3/massive-sql-products

    readAll: function readAll(req, res) {
        console.log('getting products');
        db.readProducts(function (err, prod) {
            if (err) return console.log(err, 'err on readProducts');else return res.send(prod);
        });
    },
    showProd: function showProd(req, res, next) {
        db.readProduct([req.params.id], function (err, prod) {
            if (err) return console.log(err, 'err on readProduct');else return res.send(prod);
        });
    },
    addToCart: function addToCart(req, res, next) {
        db.get_qty_cart(function (err, prod) {
            // console.log(prod)
            for (var i = 0; i < prod.length; i++) {
                console.log('Hi Gus', req.params.id);
                if (prod[i].productid == req.params.id) {
                    db.update_quantity([req.params.id], function (err, prod) {});
                    return;
                }
            }

            db.add_to_cart([req.params.id], function (err, prod) {
                console.log(prod);
                console.log(err);
                console.log('func finished');
                return res.send('added to cart');
            });
        });
    },

    // console.log(prod.length)
    // 1. For loop to check if item exists
    //if(prod[i].productid)
    //then prod[i] increase qty ++
    //RETURN SOMETHING!!!!

    // Add db-add-to-cart

    // db.add_to_cart([req.params.id], function (err, prod) {
    //     console.log(prod)
    //     console.log(err)
    //     console.log('func finished')
    //     return res.send('added to cart')


    getCart: function getCart(req, res, next) {
        db.get_cart(function (err, prod) {
            console.log('get cart fired');
            return res.send(prod);
        });
    },
    getTotal: function getTotal(req, res, next) {
        db.get_total(function (err, total) {
            return res.send(total);
        });
    }
    // getQuantity: function(req, res, next){
    //     db.get_quantity(function(err, total){
    //         return res.send(total)
    //     })
    // },
};
"use strict";

module.exports = {
  STRIPE_KEYS: { secretKey: "sk_test_PMwgIXvc4EjPjDILoAnQLyBP" },
  connectionString: "postgres://orpytcwd:0tvPMN_a3UTuhiYBqE37nllee9Fo5zn2@stampy.db.elephantsql.com:5432/orpytcwd"
};
'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var config = require('./config.js');
var stripe = require('stripe')(config.STRIPE_KEYS.secretKey);

// var connectionString = "postgres://postgres:@localhost/paul_valentine"
var connectionString = config.connectionString;

var db = massive.connectSync({ connectionString: connectionString });

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('./public'));

app.set('db', db);

db.set_schema(function (err, data) {
  if (err) console.log(err);else console.log('All tables successfully reset');
});

var controller = require('./controller.js');

app.get('/products', controller.readAll);
app.get('/product/:id', controller.showProd);
app.post('/add-to-cart/:id', controller.addToCart);
app.get('/cart', controller.getCart);
app.get('/total', controller.getTotal);

//stripe cart endpoint
app.post('/api/payment', function (req, res, next) {
  console.log(req.body);

  //convert amount to pennies
  var chargeAmt = req.body.amount;
  var amountArray = chargeAmt.toString().split('');
  var pennies = [];
  for (var i = 0; i < amountArray.length; i++) {
    if (amountArray[i] === ".") {
      if (typeof amountArray[i + 1] === "string") {
        pennies.push(amountArray[i + 1]);
      } else {
        pennies.push("0");
      }
      if (typeof amountArray[i + 2] === "string") {
        pennies.push(amountArray[i + 2]);
      } else {
        pennies.push("0");
      }
      break;
    } else {
      pennies.push(amountArray[i]);
    }
  }
  var convertedAmt = parseInt(pennies.join(''));
  console.log("Pennies: ");
  console.log(convertedAmt);

  var charge = stripe.charges.create({
    amount: convertedAmt, // amount in cents, again
    currency: 'usd',
    source: req.body.payment.token,
    description: 'Test charge from grahms repo'
  }, function (err, charge) {
    res.sendStatus(200);
    // if (err && err.type === 'StripeCardError') {
    //   // The card has been declined
    // }
  });
});
// app.get('/quantity', controller.getQuantity)

app.listen('3000', function () {
  console.log("Successfully listening on : 3050");
});