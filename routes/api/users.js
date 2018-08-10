var router = require("express").Router();
var userController = require("../../controllers/userController");

//GET and POST
router
    .route("/")
    .get(userController.findAll)
    .post(userController.create);

// router
//     .route(/*conditionals*/);

module.exports = router;