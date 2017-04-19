var app = require('./index');
var db = app.get('db');
module.exports = {

    //refer to w6/d3/massive-sql-products

    readAll: function (req, res) {
        console.log('getting products')
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
        db.get_qty_cart(function (err, prod) {
            // console.log(prod)
            for (var i = 0; i < prod.length; i++) {
                    console.log('Hi Gus', req.params.id)
                if (prod[i].productid == req.params.id) {
                    db.update_quantity([req.params.id], function (err, prod) {
                    })
                    return;
                }
            }

            db.add_to_cart([req.params.id], function (err, prod) {
                console.log(prod)
                console.log(err)
                console.log('func finished')
                return res.send('added to cart')
            })
            
        })
    },

    // console.log(prod.length)
    // 1. For loop to check if item exists
    //if(prod[i].productid)
    //then prod[i] increase qty ++
    //RETURN SOMETHING!!!!

    // Add db-add-to-cart

    // db.add_to_cart([req.params.id], function (err, prod) {
    //     console.log(prod)
    //     console.log(err)
    //     console.log('func finished')
    //     return res.send('added to cart')

    
    getCart: function (req, res, next) {
        db.get_cart(function (err, prod) {
            console.log('get cart fired')
            return res.send(prod)
        })
    },
    getTotal: function (req, res, next) {
        db.get_total(function (err, total) {
            return res.send(total)
        })
    }
    // getQuantity: function(req, res, next){
    //     db.get_quantity(function(err, total){
    //         return res.send(total)
    //     })
    // },
}