// all the rest API book data will be on this file
// note: axios solves the cannot import out of the src folder error

import axios from "axios";

export default {
  // Get all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // gets the book with the given id
  getBook: function(id) {
    return axios.get("/a[i/books" + id);
  },
  // deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("api/books" + id);
  },
  // saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books" + bookData);
  }
};