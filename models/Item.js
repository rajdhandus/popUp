var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var itemSchema = new Schema({
    
    store_id: {
        type: Schema.Types.ObjectId,
        ref: "Store"
    },

    name: String,
    upc: Number,
    price: Number,
    stock: Number,
    photoURL: String
});

var Item = mongoose.model("Item", itemSchema);

module.exports = Item;