import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import "./App.css";
// Import it and use is a tag <Todos/>
import Todos from "./components/Todos";
import axios from "axios";

class App extends Component {
  // State of the class component
  state = {
    todos: [],
  };

  // Start when the component is displayed or mounted
  componentDidMount() {
    // Get the todos from the API
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => this.setState({ todos: res.data }));
  }

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
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        this.setState({
          // The spread operator [...] is to make a copy of the array
          // Since we cannot directly change the state. So we copy it all first
          // Returns todos don't matching the given id

          todos: [...this.state.todos.filter((todo) => todo.id !== id)],
        });
      });
  };

  // Add todo
  addTodo = (title) => {
    // This post() is just to mimic work with backend
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false,
      })
      .then((res) => {
        this.setState({ todos: [...this.state.todos, res.data] });
      });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            {/*Display what's inside the route when the subpath equals path of Route*/}
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  {/*The {} takes JS code*/}
                  {/*"todos" is justa property we added, we can have several*/}
                  {/*probs are accessed on the Component of the tag, not the app component*/}
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
