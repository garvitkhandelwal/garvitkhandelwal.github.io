const Product = require('../models/product.model');



// Create new Product
exports.create = (req, res) => {
    // Request validation
    if(!req.body) {
        return res.status(400).send({
            message: "Product content can not be empty"
        });
    }
    
    // Create a Product
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        reviews: req.body.reviews
    });
     // Save Product in the database
    Product.create(product, function (err, small) {
        if(err)
            console.log(err);
        else
            {   
                product.save(); 
                console.log("App Created");
                res.status(200).send("App Created");
            }
    })
 };

// Find a single product with a name
exports.findByName = (req, res) => {
    Product.findOne({name : req.params.name},(err,product) => {
        if(product) {
            var app_price , app_avgrating, app_review;
            app_price = (product.price); 
            app_avgrating = (product.avg_rating);
            app_review = (product.reviews);
            console.log(app_review)
            res.status(200).send({app_price, app_avgrating, app_review});
        }
        else {
            console.log(err);
            res.send(err);    
        }                
    });
}

// Update a product
exports.AddReview = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Product content can not be empty"
        });
    }
    
    Product.findOne({name: req.body.name}, (err, product) => {
        if (!product) {
            console.log(err);
        }
        else
        {
            var review = { 
                heading : req.body.heading,
                msg : req.body.msg,
                date : req.body.date,
                rating : req.body.rating
            };
            var old_rating = product.avg_rating;
            var count = product.reviews.length;
            product.avg_rating = ((old_rating*count+review.rating)/(count+1)).toFixed(1);
            product.reviews.push(review);
            product.save();
            console.log("Review Added");
            console.log(product.avg_rating);
            res.status(200).send("Review Added");
        }
    });
}

exports.update = (req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: "Product content can not be empty"
        });
    }
    Product.findOneAndUpdate({name : req.body.name},{$set : {price:req.body.price}},(err,product) => {
        if(!product){
            console.log(err);
        }
        else{
            product.save();
            res.status(200).send("Price Updated");
        }
    });
};