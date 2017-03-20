angular.module('app')
.service('mainSvc', function($http){
    this.test1 = 'service works'
    this.readProducts = function(){
        return $http.get('/products').then(function(resp){
            console.log("Service: " + resp);
            return resp;
        })
    }
 this.readProduct = function(id){
     console.log(id);
     return $http.get('/product/' + id)
 }
 this.addToCart = function(productid){
     return $http.post('/add-to-cart/' + productid, {
         productid: productid
     })
 }
this.getCart = function(){
    return $http.get('/cart')
}
    // this.getProduct = function
})