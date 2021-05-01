import React from "react";

// this file will be exported to the books.js so you can view all saved books

export function SaveBtn(props) {
  return (
    <span className="saved-btn" {...props} role="button" tabIndex="0" href="/savedBooks">
     saved ✓
    </span>
  );
}