angular.module('app')
.service('mainSvc', function($http){
    this.test1 = 'service works'
    this.cart = [];
    var cart = this.cart;
    this.readProducts = function(){
        return $http.get('/products').then(function(resp){
            // console.log("Service: " + resp);
            return resp;
        })
    }
 this.readProduct = function(id){
    //  console.log(id);
     return $http.get('/product/' + id)
 }

 this.showme=false;
 
 this.addToCart = function(productid){
     return $http.post('/add-to-cart/' + productid, {
         productid: productid
     })
 }
this.getCart = function(){
     $http.get('/cart').then(function(resp){
         console.log(resp.data);
        Object.assign(cart, resp.data)
    })
    return cart;
}
this.getTotal = function(){
    return $http.get('total')
}
// this.getQuantity = function(){
//     return $http.get('quantity')
// }
    // this.getProduct = function
})

