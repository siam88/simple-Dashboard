import React, { Component } from "react";

export class TodoItem extends Component {
  itemStyle = () => {
    return {
      textDecoration: this.props.todo.complete ? "line-through" : "none"
    };
  };
  render() {
    return (
      <div>
        <p>
          <label style={{ margin: "5px 5px 5px 5px" }}>
            <input
              id="indeterminate-checkbox"
              type="checkbox"
              //   onChange={this.props.markCompleted.bind(this, this.props.todo.id)}
            />
            <span
              style={{ margin: "5px 5px 5px 5px" }}
              style={this.itemStyle()}
            >
              {this.props.todo.title}{" "}
            </span>
          </label>
          <a
            style={{ float: "right" }}
            class="btn-floating btn-small waves-effect waves-light warning"
            // onClick={this.props.delTodo.bind(this, this.props.todo.id)}
          >
            <i class="material-icons">delete</i>
          </a>
        </p>
      </div>
    );
  }
}

export default TodoItem;
