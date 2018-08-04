var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var itemSchema = new Schema({
    name: String,
    upc: Number,
    price: Number,
    stock: Number,
    photo_url: String
});

var Item = mongoose.model("Item", itemSchema);

module.exports = Item;