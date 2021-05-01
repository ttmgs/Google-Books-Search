const express = require('express');
const router = express.Router();


// Books model
const Book = require("../models/Book")


// GET request to get all books


router.get('/', function(req, res) {
  res.send({type: 'GET'})
})



// Post request to update
router.post('/', function(req, res) {
  res.send({type: 'POST'})
});







module.exports = router;