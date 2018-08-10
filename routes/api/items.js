var router = require("express").Router();
var itemController = require("../../controllers/itemController");

//GET and POST
router
    .route("/")
    .get(itemController.findAll)
    .post(itemController.create);

// router.route(/*conditionals*/);

module.exports = router;