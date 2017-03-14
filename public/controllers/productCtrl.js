angular.module('assessment')
.controller('productCtrl', function($scope, service, $stateParams){
    service.getProduct($stateParams.id).then(function (info){
        $scope.details = info;
    })
})