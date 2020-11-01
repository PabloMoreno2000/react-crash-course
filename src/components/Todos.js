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
      /*Pass the todo as a prob to the component*/
    }
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} />
    ));
  }
}
export default Todos;
