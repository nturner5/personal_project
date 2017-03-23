angular.module('app')
.controller('cartCtrl', function($scope, mainSvc,  $stateParams, $state){

$scope.showme=function(){
    console.log(mainSvc.showme) 
    return mainSvc.showme};
$scope.showmeFalse = function(){
    mainSvc.showme = false;
}

mainSvc.getCart().then(function(res) {
            console.log('he')
            $scope.cart = res.data;
            
        })

 mainSvc.getTotal().then(function(resp){
        console.log('the total is' + resp.data.sum)
        $scope.total = resp.data[0].sum;
    })
// mainSvc.getQuantity().then(function(resp){
//     console.log('updating quantity')
//     $scope.quantity = resp.data;
// })
})