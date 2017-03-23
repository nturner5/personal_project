var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');

var connectionString = "postgres://postgres:@localhost/paul_valentine"

var db = massive.connectSync({connectionString : connectionString})


var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

app.set('db', db);

var controller = require('./controller.js');


app.use(express.static('./public'));


app.get('/products', controller.readAll)
app.get('/product/:id', controller.showProd)
app.post('/add-to-cart/:id', controller.addToCart)
app.get('/cart', controller.getCart)
app.get('/total', controller.getTotal)
// app.get('/quantity', controller.getQuantity)

app.listen('3050', function(){
  console.log("Successfully listening on : 3050")	
})