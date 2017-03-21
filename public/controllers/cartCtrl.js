angular.module('app')
.controller('cartCtrl', function($scope, mainSvc,  $stateParams, $state){

mainSvc.getCart().then(function(res) {
            console.log('he')
            $scope.cart = res.data;
            
        })

 mainSvc.getTotal().then(function(resp){
        console.log('the total is' + resp.data.sum)
        $scope.total = resp.data[0].sum;
    })
})