const db = require("../models");

// Defining methods for itemController
module.exports = {

    // queries all items
    // .get(itemController.findAll)
    findAll: (req, res) => {
        console.log(req.body)
        db.Item
            //.find(req.query)
            .find({})  // may have to leave brackets empty to show all items
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // queries one item by it's upc
    // .get(itemController.findOne)
    findOne: (req, res) => {
        db.Item
            // .find({ upc: upc })
            .find({ upc: req.params.upc })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // creates an item
    // .post(itemController.create)
    create: (req, res) => {
        console.log(req.body)
        db.Item
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // updates an item
    // .put(itemController.update)
    update: (req, res) => {
        db.Item
            .findOneAndUpdate({ upc: req.params.upc }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // deletes an item by it's upc
    // .delete(controllers.itemController.remove)
    remove: (req, res) => {
        db.Item
            .findById({ upc: req.params.upc})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};