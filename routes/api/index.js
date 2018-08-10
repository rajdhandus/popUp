var router = require("express").Router();
var path = require("path");
var itemRoutes = require("./items");
var userRoutes = require("./users");
// var storeRoutes = require("./stores");
var transactionRoutes = require("./transactions");

router.use("/items", itemRoutes);
router.use("/users", userRoutes);
// router.use("/stores", storeRoutes);
router.use("/transactions", transactionRoutes);

module.exports = router;