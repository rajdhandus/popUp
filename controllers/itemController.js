// http://mongoosejs.com/docs/api.html

// controller -> apiRoute -> utils(frontend) -> components(jsx)
// when a callback happens (goes backward)

const db = require("../models");

module.exports = {

    // queries all items
    // .get(controllers.itemController.findAll)
    findAll: (req, res) => {
        db.Item
            .find({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },


    // queries one item by it's upc
    // .get(controllers.itemController.findOne)
    findOne: (req, res) => {
        db.Item
            .find({ upc: upc })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // creates an item
    // .post(controllers.itemController.create)
    create: (req, res) => {
        db.Item
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // updates an item
    // .post(controllers.itemController.update)
    update: (req, res) => {
        db.Item
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // deletes an item by it's upc
    // .delete(controllers.itemController.remove)
    remove: (req, res) => {
        db.Item
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }
};