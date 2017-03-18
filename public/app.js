angular.module('app', ['ui.router'])
.config(function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('home', {
      url: '/products',
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
     
})

