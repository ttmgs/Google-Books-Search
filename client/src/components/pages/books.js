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
    const [books, setBooks] = useState({
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

















    return(
      <Container fluid>
        <Row>
          <Column size="md-6">
            <Jumbotron>
              <h1>HELOOO WORLD</h1>
            </Jumbotron>
            <form>
              <Input
              onChange={} name="title" placeholder="Title (required)" value={}
              />
              
            </form>
















          </Column>
        </Row>
      </Container>
    )
  
}

export default Home;