var express = require("express");
var router = express.Router();
const products = require('../controllers/product.controller');

// Create a new Product
router.get('/rating/:name', products.findByName);

// Retrieve all Products
// router.get('/products', products.findAll);

// Retrieve a single Product with productId
router.post('/Add', products.AddReview);
router.post('/create', products.create);
module.exports = router;