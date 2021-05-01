const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// let BookModel = require("books");

const BooksSchema = new Schema({

 title: {
   type: String,
   required: true
 },

 author: {
   type: String,
   required: true
 },

 synopsis: {
   type: String,
   required: true
 }

});



const Books = mongoose.model("googlebooks", BooksSchema);

module.exports = Books;


// Books
//   .find({
//     _id: "6085b48c14a2039a75d1da63",  
//   })
//   .then(doc => {
//     console.log(doc)
//   })
//   .catch(err => {
//     console.error(err)
//   })


  const User = mongoose.model('BooksSchema', Schema({
    title: String,
    author: String
  }));
  
  // Empty `filter` means "match all documents"
  const filter = {};
  const all =  User.find(filter);








