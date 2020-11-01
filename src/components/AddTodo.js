import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddTodo extends Component {
  state = {
    title: "",
  };

  // e.target.name will get the name of the input
  // that fired this event, for example "title",
  // and turns that title is a var of the state
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    // Don't make the typicall submit of JS
    e.preventDefault();
    this.props.addTodo(this.state.title);
    // Clean title
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          style={{
            flex: "10",
            padding: "5px",
          }}
          placeholder="Add Todo"
          // The value of the input goes to the onChange function inside the target of the event.
          // When you set a state var on value, you need the onChange method.
          value={this.state.title}
          onChange={this.onChange}
        ></input>
        <input
          type="submit"
          value="Submit"
          className="btn"
          stlye={{ flex: "1" }}
        ></input>
      </form>
    );
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};
export default AddTodo;
