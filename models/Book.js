const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// let BookModel = require("books");

const BooksSchema = new Schema({

 title: {
   type: String,
 },

 author: {
   type: String
 },

 synopsis: {
   type: String,
 }

});



const Books = mongoose.model("googlebooks", BooksSchema);

module.exports = Books;


Books
  .find({
    _id: "6085b83414a2039a75d1da6c"  // search query
  })
  .then(doc => {
    console.log(doc)
  })
  .catch(err => {
    console.error(err)
  })

















