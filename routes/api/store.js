const router = require("express").Router();
const storeController = require("../../controllers/storeController");

//GET and POST
// Matches with "/api/store"
router.route("/")
  .get(storeController.findOne)
  .post(storeController.create);

// Matches with "/api/store/:storeEmail"
router.route("/:storeEmail")
  .get(storeController.findOne)
  .put(storeController.update)
  .delete(storeController.remove);

module.exports = router;