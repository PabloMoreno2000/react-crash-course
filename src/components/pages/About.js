import React from "react";

export default function About() {
  // React.Fragment is like a ghost fragment for the user,
  // but you need it to return everything inside a single element
  return (
    <React.Fragment>
      <h1>About</h1>
      <p>
        This is the TodoList app v1.0.0. It is a part of a React crash course
      </p>
    </React.Fragment>
  );
}
