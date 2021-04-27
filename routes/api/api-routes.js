const router = require("express").Router();
const booksController = require("../../controllers/booksControllers");

// Matches with "/api/posts"
router
  .route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .delete(booksController.remove);

module.exports = router;




















// const express = require('express');
// const router = express.Router();


// // Books model
// const Books = require('../../models/Book');

// // GET request api/books
// // get all books
// router.get('/', (req, res) => {
//   Books.find()
//   .sort({ title: 1 })
//   .then(Books => res.json(Books))
// })

// // POST request api/books
// // add all books
// router.post('/', (req, res) => {
//   const newBook = new book({
//     title: req.body.title

//   });

//   newBook.save().then(book => res.json(book));
// });





// module.exports = router;
