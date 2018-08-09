const db = require("../models");

module.exports = {
    // queries all users
    // .get(controllers.userController.findAll)
    findAll: (req, res) => {
        db.User
            .find({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // queries a user by their email
    // .get(controllers.userController.findOne)
    findOne: (req, res) => {
        db.User
            .find({ userEmail: userEmail })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // creates a user
    // .post(controllers.userController.create)
    create: (req, res) => {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // updates user info
    // .put(controllers.userController.update)
    update: (req, res) => {
        db.User
            .findOneAndUpdate({ userEmail: req.params.userEmail }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // deletes a user by their email
    // .delete(controllers.userController.remove)
    remove: (req, res) => {
        db.User
            .findById({ userEmail: req.params.userEmail })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }
};