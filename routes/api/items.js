const router = require("express").Router();
const itemController = require("../../controllers/itemController");

//GET and POST
// Matches with "/api/items"
router.route("/")
    .get(itemController.findAll)
    .post(itemController.create);

// Matches with "/api/items/:upc"
router.route("/:upc")
    .get(itemController.findOne)
    .put(itemController.update)
    .delete(itemController.remove);

module.exports = router;