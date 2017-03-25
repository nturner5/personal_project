angular.module('app')
    .controller('cartCtrl', function ($scope, mainSvc, $stateParams, $state) {

        $scope.showme = function () {
            console.log(mainSvc.showme)
            return mainSvc.showme
        };
        $scope.showmeFalse = function () {
            mainSvc.showme = false;
        }


        $scope.cart = mainSvc.getCart();


 $scope.checkout = function(){
        // console.log('it twerks')
        $state.go('checkout')
        
    };



        mainSvc.getTotal().then(function (resp) {
            console.log('the total is' + resp.data.sum)
            $scope.total = resp.data[0].sum;
        })
        // mainSvc.getQuantity().then(function(resp){
        //     console.log('updating quantity')
        //     $scope.quantity = resp.data;
        // })
    })