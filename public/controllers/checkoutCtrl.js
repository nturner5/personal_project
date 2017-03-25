angular.module('app')
.controller('checkoutCtrl', function($scope, stripe, $http, $state, mainSvc){

$scope.testx = 'werkin'

//==========STRIPE==================

  $scope.payment = {};
$scope.thing = $scope;
$scope.test = function(){
  console.log('tis working')
}

  
$scope.charge = function (payment) {
     console.log(payment)
      console.log('pointA hit')
    return stripe.card.createToken($scope.payment.card)
    .then(function (response) {
      console.log('token created for card ending in ', response.card.last4);
      var payment = angular.copy($scope.payment);
      payment.card = void 0;
      payment.token = response.id;

      return $http({
        method: 'POST',
        url: '/api/payment',
        data: {
          amount: $scope.total,
          payment: payment
        }
      })
    })
    .then(function(payment) {
      console.log('successfully submitted payment for $', payment);
      $state.go('congrats');
    })
    .catch(function (err) {
       if (err.type && /^Stripe/.test(err.type)) {
         console.log('Stripe error: ', err.message);
         alert(err.message)
       }
       else {
         console.log('Other error occurred, possibly with your API', err.message);
         alert(err.message)
       }
     });
 };
 mainSvc.getTotal().then(function (resp) {
            console.log('the total is' + resp.data.sum)
            $scope.total = resp.data[0].sum;
        })





 //===END CTRL=======
})