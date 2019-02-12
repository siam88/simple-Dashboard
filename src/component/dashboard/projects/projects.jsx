import React, { Component } from "react";
import DeletingProjects from "./deletingProjects/deletingProjects";

export class Projects extends Component {
  render() {
    return (
      <div
        style={{ border: "2px solid black", marginTop: "5%", padding: "5%" }}
      >
        <div style={{ border: "2px solid black" }}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
              </tr>
            </thead>

            <tbody>
              {this.props.projects.map(e => (
                <tr>
                  <td>{e.name}</td>
                  <td>{e.type}</td>{" "}
                  <td>
                    <DeletingProjects
                      projectId={e.id}
                      deleteProject={this.props.deleteProject}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="row">
          <div className="input-field col s4">
            <input
              id="first_name2"
              type="text"
              className="validate"
              onChange={e => this.props.addProjectName(e)}
            />
            <label className="active" htmlfor="first_name2">
              Name
            </label>
          </div>
          <div className="input-field col s4">
            <input
              id="first_name2"
              type="text"
              class="validate"
              onChange={e => this.props.addProjectType(e)}
            />
            <label className="active" htmlfor="first_name2">
              Type
            </label>
          </div>

          <div className="input-field col s4 ">
            <a
              className="btn-floating btn-small waves-effect waves-light success"
              style={{ marginRight: "10%" }}
              onClick={this.props.addProject}
            >
              <i className="material-icons">add</i>
            </a>
            <a className="btn-floating btn-small waves-effect waves-light red">
              <i className="material-icons">clear</i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
