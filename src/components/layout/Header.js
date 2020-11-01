import React from "react";
import { Link } from "react-router-dom";

// The return of a function(al) component works as the
// render method of a classful component
function Header() {
  // <Link to> is like <a href>
  // But takes the paths specified in the routes of the app.
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>
      |
      <Link style={linkStyle} to="/about">
        About
      </Link>
    </header>
  );
}

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
};

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

export default Header;
