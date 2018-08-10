const router = require("express").Router();

const itemRoutes = require("./items");
const userRoutes = require("./users");
// const storeRoutes = require("./stores");
const transactionRoutes = require("./transactions");


// Item routes
router.use("/items", itemRoutes);

// User routes
router.use("/users", userRoutes);

// Store routes
// router.use("/stores", storeRoutes);

// Transaction routes
router.use("/transactions", transactionRoutes);

module.exports = router;