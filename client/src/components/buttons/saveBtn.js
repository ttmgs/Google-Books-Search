import React from "react";

// this file will be exported to the books.js page


export function saveBtn(props) {
  return (
    <span className="save-btn" {...props} role="button" tabIndex="0">
    save ✓
   </span>
  )
}