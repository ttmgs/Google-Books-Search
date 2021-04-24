import React from "react";
import "./style.css";

function Card() {
  return (

    
<div class="wrap">
  <h2>Google Books Search</h2>
   <div class="search">
      <input type="text" class="searchTerm" placeholder="What are you looking for?"/>
      <button type="submit" class="searchButton">
        <i class="fa fa-search"></i>
     </button>
   </div>
</div>


  )};

export default Card;