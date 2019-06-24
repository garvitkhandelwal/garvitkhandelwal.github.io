var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const Razorpay = require('razorpay');
require('dotenv').config();
// parse requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Enable CORS for all HTTP methods
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//mongoose initialization
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/AppStore')
  .then(() => console.log('connection successful'))
  .catch((err) => console.log(err));


  app.get('/', (req, res) => {
      res.json({"message": "Welcome to AppStore"});
  });
app.use('/products',require('./routes/product.routes'));
app.use('/transactions',require('./routes/transactions'));
app.get('/user/:id', function(req, res) {
  res.send('user ' + req.params.id);    
});
app.get('/pay', function(req,res) {
  var instance = new Razorpay({
    key_id: process.env.KEY_ID,
    key_secret: process.env.KEY_SECRET,
  });
  res.send(instance.key_id);
});

app.listen(3001, () => {
    console.log("Server is listening on port 3001");
});