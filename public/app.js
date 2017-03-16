angular.module('app', ['ui.router'])
.config(function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('home', {
      url: '/products',
      controller: 'controller',
      templateUrl: './views/home.html'
    }),
      $stateProvider
    .state('product', {
      url: '/product/:id',
      controller: 'controller',
      templateUrl: './views/product.html'
    })
})

