var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var transactionSchema = new Schema({

    store_id: {
        type: Schema.Types.ObjectId,
        ref: "Store"
    },

    user_id: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },

    items: [{
        type: Schema.Types.ObjectId,
        ref: "Item"
    }]
});

var Transaction = mongoose.model("Item", transactionSchema);

module.exports = Transaction;