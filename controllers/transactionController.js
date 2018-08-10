const db = require("../models");

module.exports = {

    // queries a user by user_id
    // .get(controllers.transactionController.findOne)
    findOne: (req, res) => {
        db.Transaction
            .find({ user_id: user_id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // creating array of items by ObjectId
    // .post(controllers.transactionController.create)
    create: (req, res) => {
        db.Transaction
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // updates items by ObjectId
    // .put(controllers.transactionController.update)
    update: (req, res) => {
        db.Transaction
            .findOneAndUpdate({ items: req.params.items }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};