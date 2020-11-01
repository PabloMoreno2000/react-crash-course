import React, { Component } from "react";
import "./App.css";
// Import it and use is a tag <Todos/>
import Todos from "./components/Todos";

class App extends Component {
  // State of the class component
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false,
      },
      {
        id: 2,
        title: "Dinner with friends",
        completed: false,
      },
      {
        id: 3,
        title: "Meeting with team",
        completed: false,
      },
    ],
  };

  render() {
    return (
      <div className="App">
        {/*The {} takes JS code*/}
        {/*"todos" is justa property we added, we can have several*/}
        {/*probs are accessed on the Component of the tag, not the app component*/}
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}
export default App;
