const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// let BookModel = require("books");

const BooksSchema = new Schema({
 title: {
   type: String,
   required: true
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




BooksSchema.methods.getTitle = function() {
  console.log(this.title[0])
}











Books
  .find({
    _id: "6085b48c14a2039a75d1da63"  // search query
  })
  .then(doc => {
    console.log(doc)
  })
  .catch(err => {
    console.error(err)
  })



















// const Books = mongoose.model("Books", BooksSchema);

// module.exports = Books;