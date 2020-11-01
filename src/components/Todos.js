import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
class Todos extends Component {
  render() {
    {
      /*props stands por properties*/
    }
    console.log(this.props.todos);
    {
      /*Pass the todo as a prob to the component.
      You can also pass functions in probs*/
    }
    return this.props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

// Is good practice to define the props of each component
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default Todos;
