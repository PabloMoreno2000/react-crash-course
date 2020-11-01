import React from "react";

// The return of a function(al) component works as the
// render method of a classful component
function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
    </header>
  );
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

export default Header;
