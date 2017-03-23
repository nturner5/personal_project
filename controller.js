var app = require('./index');
var db = app.get('db');
module.exports = {

    //refer to w6/d3/massive-sql-products

    readAll: function (req, res) {
        db.readProducts(function (err, prod) {
            if (err) return console.log(err, 'err on readProducts');
            else return res.send(prod)
        })
    },
    showProd: function (req, res, next) {
        db.readProduct([req.params.id], function (err, prod) {
            if (err) return console.log(err, 'err on readProduct');
            else return res.send(prod)

        })
    },
    addToCart: function (req, res, next) {

        console.log(req.params.id)
        db.add_to_cart([req.params.id], function (err, prod) {
            console.log(prod)
            console.log(err)
            return res.send('added to cart')
        })

    },
    getCart: function(req, res, next){
        db.get_cart( function (err, prod){
            console.log('get cart fired')
            return res.send(prod)
        })
    },
    getTotal: function(req, res, next){
        db.get_total(function(err, total){
            return res.send(total)
        })
    }
    // getQuantity: function(req, res, next){
    //     db.get_quantity(function(err, total){
    //         return res.send(total)
    //     })
    // },
}