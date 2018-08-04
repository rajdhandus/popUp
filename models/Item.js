var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var itemSchema = new Schema({
    name: String,
    upc: Number,
    price: Number,
    stock: Number,
    photoURL: String
});

var Item = mongoose.model("Item", itemSchema);

module.exports = Item;