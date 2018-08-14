const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var itemSchema = new Schema({
    
    // store_id: {
    //     type: Schema.Types.ObjectId,
    //     ref: "Store"
    // },

    name: {
        type: String,
        trim: true,
        required: "Please enter the name of the item you'd like to add."
    },
    upc: {
        type: Number,
        unique: true,
        required: "Please enter a unique ID number for this item."
    },
    price: {
        type: Number,
        match: [/^\d+\.\d\d$/, "Please enter this item's price."]
    },
    stock: {
        type: Number,
        required: "Please enter the quantity of this item in stock."
    },
    photoURL: {
        type: String,
        required: "Please enter an image URL for this item."
    }
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;