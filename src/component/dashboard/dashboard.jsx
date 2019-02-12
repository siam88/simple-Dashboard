import React, { Component } from "react";
import AddEmployee from "./addEmployee/addEmployee";
import Employee from "./employee/employee";
import Projects from "./projects/projects";
import Todos from "./Todo/todos";

export class Dashboard extends Component {
  render() {
    return (
      <div className="row addEmployee " style={{ marginTop: "5%" }}>
        <div className="col s12  ">
          <AddEmployee
            addId={this.props.addId}
            addName={this.props.addName}
            addEmail={this.props.addEmail}
            addEmployee={this.props.addEmployee}
          />
        </div>
        <div className="col s12 ">
          <Employee
            employees={this.props.employees}
            deleteEmployee={this.props.deleteEmployee}
          />
        </div>
        <div className="col s12 ">
          <Projects
            projects={this.props.projects}
            deleteProject={this.props.deleteProject}
            addProjectType={this.props.addProjectType}
            addProjectName={this.props.addProjectName}
            addProject={this.props.addProject}
          />
        </div>
        <div className="col s12">
          <Todos
            todos={this.props.todos}
            markCompleted={this.props.markCompleted}
            delTodo={this.props.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default Dashboard;
