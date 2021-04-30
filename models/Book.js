const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
 title: {
   type: String,
   required: true
 
 }



});


const Books = mongoose.model("Books", BooksSchema);

module.exports = Books;