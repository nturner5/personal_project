angular.module('app')
.controller('productDetailsCtrl', function($scope, service, $stateParams){
  console.log($stateParams)
   service.readProduct($stateParams.id).then(function(resp){
        $scope.product = resp.data[0];
       
    })
})