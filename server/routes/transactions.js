var express = require("express");
var router = express.Router();
const Trans = require('../models/transaction.model');

// Create a new Product
router.post('/create', function(req,res){
    console.log(req)
    var newTransaction = new Trans({
        paymentId: req.body.paymentId,
        userId: req.body.userId,
        app: req.body.app,
        price: req.body.amount
    })
    newTransaction.save();
    res.status(200).send();
});
module.exports = router;