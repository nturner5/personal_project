var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');

// var connectionString = "postgres://postgres:@localhost/paul_valentine"
var connectionString = "postgres://orpytcwd:0tvPMN_a3UTuhiYBqE37nllee9Fo5zn2@stampy.db.elephantsql.com:5432/orpytcwd"

var db = massive.connectSync({connectionString : connectionString})


var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('./public'));

app.set('db', db);

db.set_schema(function(err, data) {
    if (err) console.log(err);
    else console.log('All tables successfully reset');
})

var controller = require('./controller.js');




app.get('/products', controller.readAll)
app.get('/product/:id', controller.showProd)
app.post('/add-to-cart/:id', controller.addToCart)
app.get('/cart', controller.getCart)
app.get('/total', controller.getTotal)
// app.get('/quantity', controller.getQuantity)

app.listen('3050', function(){
  console.log("Successfully listening on : 3050")	
})