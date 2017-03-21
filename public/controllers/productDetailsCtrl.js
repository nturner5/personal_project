angular.module('app')
    .controller('productDetailsCtrl', function ($scope, mainSvc, $stateParams, $state) {
        mainSvc.readProduct($stateParams.id).then(function (resp) {
            // console.log(resp)
            $scope.product = resp.data[0];
        });
       

        $scope.addCart = function (product) {
            // console.log(product.id)
            mainSvc.addToCart(product.id).then(function () {
                // console.log(service.getCart())
                mainSvc.getCart().then(function (response) {
                    // console.log(response)
                    $scope.cart = response.data;

                })
            })
        }

        mainSvc.getCart().then(function(res) {
            console.log('he')
            $scope.cart = res.data;
            
        })

    });