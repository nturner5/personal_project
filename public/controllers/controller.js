angular.module('app')
.controller('controller', function($scope, mainSvc, $state){
    $scope.prodView = function(id){
        // console.log('it twerks')
        $state.go('product', {
            id: id
        })
        
    };
    
    $scope.test1 = mainSvc.test1;
    mainSvc.readProducts().then(function(resp){
        // console.log(resp.data)
        $scope.products = resp.data;
    });
    // mainSvc.getTotal().then(function(resp){
    //     console.log('the total is' + resp.data.sum)
    //     $scope.total = resp.data[0].sum;
    // })

    
    // service.readProduct().then(function(resp){
    //     $scope.product = resp.data;
    // })
    $(document).ready(function(){
    // $('#header').css('opacity', 0);
  
    $('#animateTest').waypoint(function() {
        $('#animateTest').addClass('animated fadeInRightBig');
       }, {
           offset: '100%'
       });
    })
    
    // $('#loader').animateCss('slideOutUp')

//     window.scroll({
//   top: 2500, 
//   left: 0, 
//   behavior: 'smooth' 
// });

     
})