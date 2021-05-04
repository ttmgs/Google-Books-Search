import React from "react";
import Header from "../header/head";
import { Input, TextArea, FormBtn } from "../form/searchform";
import { Column, Container, Row } from "../grid/index";
import { useEffect, useState } from "react";
import API from "../utils/API";
import Jumbotron from "../jumbotron/jumbotron";
import { SaveBtn, AllSaved } from "../buttons/saveBtns";



function Home() {
   
    // Setting our component's initial state
    const [books, setBooks] = useState([])
    const [formObject, setFormObject] = useState({
      title: "",
      author: "",
      synopsis: "",
      date: Date.now
    });


      // Load all books and store them with setBooks
      // The Effect Hook lets you perform side effects in function components:

        useEffect(() => {
          loadBooks()
        }, [])


          // Loads all books and sets them to books
        function loadBooks() {
          API.getBooks()
          .then(res =>
            setBooks(res.data)
            ).catch(err => console.log(err));
        };


  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
    .then( res => loadBooks)
    .cath(err => console.log(err));
  }

    // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };


  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveBook({
        title: formObject.title,
        author: formObject.author,
        synopsis: formObject.synopsis
      })
       .then(() => setFormObject({
         title: "",
         author: "",
         synopsis: ""
       }))
       .then(() => setFormObject({
         title: "",
         author: "",
         synopsis: ""     
       }))
       .then(() => loadBooks())
       .catch(err => console.log(err));
    }
  };


    return(
      <Container fluid>
        <Row>
          <Column size="md-6">
            <Jumbotron>
              <h1>HELOOO WORLD</h1>
            </Jumbotron>
            <form>
              <Input
              onChange={handleInputChange} name="title" placeholder="Title (required)" value={formObject.title}
              />
              <Input
                 onChange={handleInputChange} name="author" placeholder="Author (required)" value={formObject.author}     
              />
              <TextArea
                   onChange={handleInputChange} name="synopsis" placeholder="Synopsis (Optional)" value={formObject.synopsis}
                   />
              
              






            </form>
















          </Column>
        </Row>
      </Container>
    )
  
}

export default Home;