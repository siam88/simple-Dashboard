import React, { Component } from "react";
import "./App.css";
import SideNav from "./component/sideNav/sideNav";
import Dashboard from "./component/dashboard/dashboard";

class App extends Component {
  state = {
    navigation: [
      { id: 1, nave: "dashboard" },
      { id: 2, nave: "Employee" },
      { id: 3, nave: "performance" },
      { id: 4, nave: "tasks" },
      { id: 5, nave: "logout" }
    ],

    setting: [
      { id: 1, name: "theme" },
      { id: 2, name: "color" },
      { id: 3, name: "any" }
    ],
    employees: [
      { id: 1, name: "siam", email: "siam@gmail.com" },
      { id: 2, name: "jony", email: "jony@gmail.com" },
      { id: 3, name: "nafiul", email: "nafiul@gmail.com" }
    ],
    employee: [{ id: "", name: "", email: "" }],
    projects: [
      { id: 1, name: "task1", type: "web" },
      { id: 2, name: "task2", type: "web" },
      { id: 3, name: "task3", type: "android" },
      { id: 4, name: "task4", type: "android" }
    ],
    project: [{ id: "", name: "", type: "" }],
    todos: [
      { id: 1, title: "wash ur cloth", complete: false },
      { id: 2, title: "wash ur pant", complete: true },
      { id: 3, title: "wash ur PAJAMa", complete: false }
    ],
    todo: [{ id: null, title: "", complete: false }]
  };
  addId = id => {
    var employee = { ...this.state.employee };
    employee.id = id.target.value;
    this.setState({ employee });
  };

  addName = name => {
    var employee = { ...this.state.employee };
    employee.name = name.target.value;
    this.setState({ employee });
  };
  addEmail = e => {
    var employee = { ...this.state.employee };
    employee.email = e.target.value;
    this.setState({ employee });
  };
  addEmployee = () => {
    console.log("addEmployee click");
    var employees = [...this.state.employees];
    employees.push(this.state.employee);
    this.setState({ employees });
  };
  deleteEmployee = id => {
    this.setState({
      employees: [...this.state.employees.filter(e => e.id !== id)]
    });
  };
  deleteProject = id => {
    this.setState({
      projects: [...this.state.projects.filter(e => e.id !== id)]
    });
  };
  addProjectName = Name => {
    var project = { ...this.state.project };
    project.name = Name.target.value;
    this.setState({
      project
    });
  };
  addProjectType = Type => {
    var project = { ...this.state.project };
    project.type = Type.target.value;
    this.setState({
      project
    });
  };
  addProject = () => {
    var projects = [...this.state.projects];
    projects.push(this.state.project);
    this.setState({
      projects
    });
  };
  markCompleted = id => {
    var todos = [...this.state.todos];
    todos.map(e => {
      if (e.id === id) {
        e.complete = !e.complete;
      }
    });
    this.setState({ todos });
  };
  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(e => e.id !== id)]
    });
  };
  render() {
    return (
      <div className="row">
        <div className="col s3">
          <SideNav
            navigation={this.state.navigation}
            setting={this.state.setting}
          />
        </div>
        <div className="col s9">
          <Dashboard
            addId={this.addId}
            addName={this.addName}
            addEmail={this.addEmail}
            addEmployee={this.addEmployee}
            employees={this.state.employees}
            deleteEmployee={this.deleteEmployee}
            projects={this.state.projects}
            deleteProject={this.deleteProject}
            addProjectName={this.addProjectName}
            addProjectType={this.addProjectType}
            addProject={this.addProject}
            todos={this.state.todos}
            markCompleted={this.markCompleted}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
