import React from "react";
import "./style.css";

// this file will be used for both pages as a redirect to the home screen

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
          GOOGLE BOOKS
      </a>
    </nav>
  );
}

export default Header;
