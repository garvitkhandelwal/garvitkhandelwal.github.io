const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema(
    {
        paymentId: {type: String},
        userId: {type: String},
        app: {type: String},
        price: {type: String},
        date: {type: Date, default:Date.now}
    }
);

module.exports = mongoose.model('Transactions', transactionSchema);
