import React, { Component } from "react";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import { v4 as uuid } from "uuid";
import "./App.css";
// Import it and use is a tag <Todos/>
import Todos from "./components/Todos";

class App extends Component {
  // State of the class component
  state = {
    todos: [
      {
        id: uuid(),
        title: "Take out the trash",
        completed: true,
      },
      {
        id: uuid(),
        title: "Dinner with friends",
        completed: false,
      },
      {
        id: uuid(),
        title: "Meeting with team",
        completed: false,
      },
    ],
  };

  // id comes from the .bind() in TodoItem
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  // Delete todo
  delTodo = (id) => {
    this.setState({
      // Returns todos don't matching the given id
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  // Add todo
  addTodo = (title) => {
    // The spread operator [...] is to make a copy of the array
    // Since we cannot directly change the state. So we copy it all first
    const newTodo = {
      id: uuid(),
      title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          {/*The {} takes JS code*/}
          {/*"todos" is justa property we added, we can have several*/}
          {/*probs are accessed on the Component of the tag, not the app component*/}
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}
export default App;
