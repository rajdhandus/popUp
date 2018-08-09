// http://mongoosejs.com/docs/api.html

const db = require("../models");

module.exports = {

    // queries all items
    // controllers.itemController.getAllItems()
    getAllItems: () => {
        db.Item
        .find({})
    },
    
    // queries one item by it's upc
    // controllers.itemController.getFindOneItem(upc)
    getFindOneItem: (upc) => {
        db.Item.findOne({ upc: upc })
    },

    // I'm not sure how to do this one - CB
    // creates an item
    // createItem: () => { 
    //     db.Item.create()
    //     db.Item.insert()
    // },

    // deletes an item by it's upc
    // controllers.itemController.deleteItem(upc)
    deleteItem: (upc) => {
        db.Item.findOneAndDelete({ upc: upc })
    },

    // updates an item by it's upc
    // controllers.itemController.updateItem(upc)
    updateItem: (upc) => {
        db.Item.findOneAndUpdate({ upc: upc })
    }
};