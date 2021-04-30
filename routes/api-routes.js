const express = require('express');
const router = express.Router();


// Books model
const Book = require("../models/Book")


// GET request to get all books
router.get('/', function(req, res) {
   Book.find()
   .then(books => res.json(books))
})









module.exports = router;