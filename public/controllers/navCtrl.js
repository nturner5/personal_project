angular.module('app')
.controller('navCtrl', function($scope, mainSvc,  $stateParams, $state){

  $scope.home = function(){
        console.log('it twerks')
        $state.go('home')
        
    };
})