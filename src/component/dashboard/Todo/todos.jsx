import React, { Component } from "react";
import TodoItem from "./todoItem/todoItem";

export class Todos extends Component {
  render() {
    return (
      <div style={{ border: "2px solid black", marginTop: "5%" }}>
        <h3>Todo</h3>
        <hr />
        {this.props.todos.map(e => (
          <TodoItem key={e.id} todo={e} />
        ))}
      </div>
    );
  }
}

export default Todos;
