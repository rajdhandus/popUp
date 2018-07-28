var express = require('express');
var router = express.Router();

// TO BE REPLACED WITH CALLS TO MODELS & CONTROLLERS
router.get('/', function(req, res, next) {
  res.json([
    {id: 1, name: "Carnations"},
    {id: 2, name: "Dasies"},
    {id: 3, name: "Orchids"},
    {id: 4, name: "Tulips"},
    {id: 5, name: "Roses"},
  ])
});

module.exports = router;