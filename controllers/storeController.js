const db = require("../models");

module.exports = {

    // queries all store information
    // .get(controllers.storeController.findAll)
    findAll: (req, res) => {
        db.Store
            .find({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // queries a store by it's storeEmail
    // .get(controllers.storeController.findOne)
    findOne: (req, res) => {
        db.Store
            .find({ storeEmail: storeEmail })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // creates a store
    // .post(controllers.storeController.create)
    create: (req, res) => {
        db.Store
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // updates store info
    // .put(controllers.storeController.update)
    update: (req, res) => {
        db.Store
            .findOneAndUpdate({ storeEmail: req.params.storeEmail }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // deletes a store by it's email
    // .delete(controllers.storeController.remove)
    remove: (req, res) => {
        db.Store
            .findById({ storeEmail: req.params.storeEmail })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }
};