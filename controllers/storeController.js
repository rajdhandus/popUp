const db = require("../models");

module.exports = {

    // queries a store by it's storeEmail
    // .get(storeController.findOne)
    findOne: (req, res) => {
        db.Store
            .find({ storeEmail: storeEmail })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // creates a store
    // .post(storeController.create)
    create: (req, res) => {
        db.Store
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // updates store info
    // .put(storeController.update)
    update: (req, res) => {
        db.Store
            .findOneAndUpdate({ storeEmail: req.params.storeEmail }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // deletes a store by it's email
    // .delete(storeController.remove)
    remove: (req, res) => {
        db.Store
            .findById({ storeEmail: req.params.storeEmail })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }
};