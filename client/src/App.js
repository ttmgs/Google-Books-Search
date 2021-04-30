// import logo from './logo.svg';
import './App.css';
import Header from "./components/header/head"
import Search from "./components/search/search"
import Content from "./components/content/content"
import React from 'react';
import Book from "../../models/Book";



function App()  {
  return (
  <div> 
    <Header />
    <Search />
    <Content />
 </div> 
  )}


export default App;
