const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        name: {type: String},
        price: {type: String},
        reviews: [{
            msg : {type: String},
            date: {type: Date, default: Date.now}, 
            rating: {type : Number},
        }],
        avg_rating : {type : Number,
                      default : 0}
    }
);

module.exports = mongoose.model('Products', ProductSchema);


