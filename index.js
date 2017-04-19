var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
const config =  require('./config.js');
const stripe = require('stripe')(config.STRIPE_KEYS.secretKey);

// var connectionString = "postgres://postgres:@localhost/paul_valentine"
var connectionString = config.connectionString;

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

//stripe cart endpoint
app.post('/api/payment', function(req, res, next){
  console.log(req.body);

  //convert amount to pennies
  const chargeAmt = req.body.amount;
  const amountArray = chargeAmt.toString().split('');
  const pennies = [];
  for (var i = 0; i < amountArray.length; i++) {
    if(amountArray[i] === ".") {
      if (typeof amountArray[i + 1] === "string") {
        pennies.push(amountArray[i + 1]);
      } else {
        pennies.push("0");
      }
      if (typeof amountArray[i + 2] === "string") {
        pennies.push(amountArray[i + 2]);
      } else {
        pennies.push("0");
      }
    	break;
    } else {
    	pennies.push(amountArray[i])
    }
  }
  const convertedAmt = parseInt(pennies.join(''));
  console.log("Pennies: ");
  console.log(convertedAmt);

  const charge = stripe.charges.create({
  amount: convertedAmt, // amount in cents, again
  currency: 'usd',
  source: req.body.payment.token,
  description: 'Test charge from grahms repo'
}, function(err, charge) {
     res.sendStatus(200);
  // if (err && err.type === 'StripeCardError') {
  //   // The card has been declined
  // }
});
});
// app.get('/quantity', controller.getQuantity)

app.listen('3000', function(){
  console.log("Successfully listening on : 3050")	
})