import React from "react";
// import Content from "../content/content";
import "./style.css";

function Search() {
  return (
    <div id="box">
      <h4>Book Search</h4>
     <input id="input" placeholder="search" />
     <button onClick={activateSearch}>Submit</button>
    </div>
  )
}

function activateSearch() {
    console.log('The link was clicked.');
  }



  



export default Search;