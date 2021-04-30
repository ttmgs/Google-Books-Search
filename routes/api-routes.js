const express = require('express');
const router = express.Router();


// Books model
const Book = require("../models/Book")


// GET request to get all books
router.get('/', function(req, res) {
  res.send({type: 'GET'})
})









module.exports = router;