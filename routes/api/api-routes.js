const express = require('express');
const router = express.Router();


// Books model
const Books = require('../../models/Book');

// GET request api/books
// get all books
router.get('/', (req, res) => {
  Books.find()
  .sort({ title: 1 })
  .then(Books => res.json(Books))
})






module.exports = router;