angular.module('app')
.directive('animations-directive', function(){
    return {
        restrict: 'E',
        link: function(scope, element, attributes){
            $(document).ready(function(){
                // all jquery goes here
                $('.home--collections').on('hover', function(){
                    console.log('jquery works')
                    $('.home--collections').css('background-color', 'red' )
                })
                
            })
        }
        
    }
})