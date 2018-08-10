var router = require("express").Router();
var transactionController = require("../../controllers/transactionController");

//GET and POST
router
    .route("/")
    .get(transactionController.findOne)
    .post(transactionController.create);

// router
//     .route(/*conditionals*/);

module.exports = router;