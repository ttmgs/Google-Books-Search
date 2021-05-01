const express = require('express');
const router = express.Router();


// Books model
const Book = require("../models/Book")


// GET request to get all books


router.get('/', function(req, res) {
  res.send({Book})
})



// Post request to update
router.post('/save', (req, res) => {
   const data = req.body;

   const newBook = new Book(data)

  //  save
  newBook.save((error) => {
    if (error) {
        res.status(500).json({ msg: 'Sorry, internal service errors' })
    } else {
      res.json({
        msg: "Your data has been saved!!!"
      });
    }
  });
});







module.exports = router;