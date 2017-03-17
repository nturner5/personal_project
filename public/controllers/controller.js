angular.module('app')
.controller('controller', function($scope, service, $state){
    $scope.prodView = function(id){
        console.log('it twerks')
        $state.go('product', {
            id: id
        })
        
    };
    $scope.test1 = service.test1;
    service.readProducts().then(function(resp){
        console.log(resp.data)
        $scope.products = resp.data;
    })
    // service.readProduct().then(function(resp){
    //     $scope.product = resp.data;
    // })
})