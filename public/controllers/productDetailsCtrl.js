angular.module('app')
.controller('productDetailsCtrl', function($scope, service, $stateParams){
  console.log($stateParams)
   service.readProduct($stateParams.id).then(function(resp){


        $scope.product = resp.data[0];

        $scope.addCart = function(product){
        console.log(product.id)
            service.addToCart(product.id).then(function (response){
            $scope.cart = response;
        })
       
    }
    $scope.getCart = function(){
        console.log('getProduct')
        service.getCart().then(function(response){
            $scope.mycart = response;
        })
    }
    })
})

 