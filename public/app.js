angular.module('app', ['ui.router', 'angular-stripe'])
.config(function($urlRouterProvider, $stateProvider, stripeProvider) {


  stripeProvider.setPublishableKey('pk_test_OAGqNNdxYIiPPvz2vK7Z5VYA');

  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('home', {
      url: '/',
      controller: 'controller',
      templateUrl: './views/home.html'
    })

     .state('product', {
      url: '/product/:id',
      controller: 'productDetailsCtrl',
      templateUrl: './views/product.html',
      // params: {
      //   id: 'default value' 
      // }
    })
    .state('login', {
      url: '/login',
      controller: 'controller',
      templateUrl: './views/login.html'
    })
    .state('checkout', {
      url: '/checkout',
      controller: 'checkoutCtrl',
      templateUrl: './views/checkout.html'
    })
    .state('congrats', {
      url: '/congrats',
      templateUrl: './views/congrats.html'
    })     
})

