const db = require("../models");

module.exports = {

    // query user by fullName
    // controllers.userController.getUserByFullName()
    getUserByFullName: () => {
        db.User
            .find({
                name: {
                    userFirstName: "",
                    userLastName: ""
                }
            })
    },

    // query user by firstName
    // controllers.userController.findUserByFirstName(userFirstName)
    findUserByFirstName: (userFirstName) => {
        db.User.find({ userFirstName: userFirstName })
    },

    // query user by lastName
    // controllers.userController.findUserByLastName(userLastName)
    findUserByLastName: (userLastName) => {
        db.User.find({ userLastName: userLastName })
    },

    //query user by userEmail
    // controllers.userController.findUserByEmail(email)
    findUserByEmail: (email) => {
        db.User.find({ email: email })
    },

    //query user by userPhone
    // controllers.userController.findUserByPhone(userPhone)
    findUserByPhone: (userPhone) => {
        db.User.find({ userPhone: userPhone })
    },

    //query user by admin{boolean}
    // controllers.userController.findIfUserAdmin(admin)
    findIfUserAdmin: (admin) => {
        db.User.find({ admin: admin })
    },

    //create a new user
    // controllers.userController.createUser()
    createUser: () => {
        db.User.create()
    },

    //remove user
    // controllers.userController.removeUser(email)
    removeUser: (email) => {
        db.User.remove({ email: email })
    }
};