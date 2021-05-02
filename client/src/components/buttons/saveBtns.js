import React from "react";

// this function will be exported to the books.js page so you can save books


export function SaveBtn(props) {
  return (
    <span className="save-btn" {...props} role="button" tabIndex="0">
    save ✓
   </span>
  )
}; 


// this file will be exported to the books.js so you can view all saved books

export function AllSaved(props) {
  return (
    <span className="saved-btn" {...props} role="button" tabIndex="0" href="/savedBooks">
     saved ✓
    </span>
  );
}