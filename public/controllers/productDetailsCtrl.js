angular.module('app')
    .controller('productDetailsCtrl', function ($scope, mainSvc, $stateParams, $state) {
        mainSvc.readProduct($stateParams.id).then(function (resp) {
            // console.log(resp)
            $scope.product = resp.data[0];
        });
       $scope.showmeFn=function(){
           mainSvc.showme = true
       };

        $scope.addCart = function (product) {
            // console.log(product.id)
            mainSvc.addToCart(product.id).then(function () {
               $scope.updateCart();
            })
        }

         $scope.cart = mainSvc.getCart();

          $scope.home = function(){
        console.log('it twerks')
        $state.go('home')
        
    };
    $scope.updateCart = function(){
        $scope.cart = mainSvc.getCart();
        console.log($scope.cart.length);
       
    }
    

    });