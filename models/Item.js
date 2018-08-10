const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var itemSchema = new Schema({
    
    // store_id: {
    //     type: Schema.Types.ObjectId,
    //     ref: "Store"
    // },

    name: String,
    upc: Number,
    price: Number,
    stock: Number,
    photoURL: String
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;