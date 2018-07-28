var express = require('express');
var router = express.Router();

// TO BE REPLACED WITH CALLS TO MODELS & CONTROLLERS
router.get('/', function(req, res) {
  res.json([
    {id: 1, name: "Candace Buchanan"},
    {id: 2, name: "Michael Frank"},
    {id: 3, name: "Kacie Nguyen"},
    {id: 4, name: "Ryan McKenzie"},
    {id: 5, name: "Rajkumar Purushothaman"},
  ])
});

module.exports = router;