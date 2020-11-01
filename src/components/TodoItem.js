import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  render() {
    return (
      //Inline style uses double curly braces, because we are passing an object
      //<div style={{ backgroundColor: "#f4f4f4" }}>
      //<div style={itemStyle}>
      <div style={this.getStyle()}>
        <p>{this.props.todo.title}</p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

const itemStyle = {
  backgroundColor: "#f4f4f4",
};

export default TodoItem;
