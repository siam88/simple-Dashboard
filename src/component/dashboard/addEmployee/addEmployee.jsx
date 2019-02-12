import React, { Component } from "react";

export class AddEmployee extends Component {
  render() {
    return (
      <div className="row" style={{ border: "2px solid black" }}>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s8 offset-s2">
              <input
                id="text"
                type="text"
                className="validate"
                onChange={e => this.props.addId(e)}
              />
              <label htmlfor="id">Id</label>
            </div>
            <div className="input-field col s8 offset-s2">
              <input
                id="name"
                type="text"
                className="validate"
                onChange={e => this.props.addName(e)}
              />
              <label htmlfor="name">Name</label>
            </div>
            <div className="input-field col s8 offset-s2">
              <input
                id="email"
                type="email"
                className="validate"
                onChange={e => this.props.addEmail(e)}
              />
              <label htmlfor="email">Email</label>
            </div>

            <div className="input-field col s6 offset-s5">
              <a
                class="btn-floating btn-small waves-effect waves-light success "
                style={{ marginRight: "10%" }}
                onClick={this.props.addEmployee}
              >
                <i class="material-icons">add</i>
              </a>
              <a class="btn-floating btn-small waves-effect waves-light red">
                <i class="material-icons">clear</i>
              </a>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddEmployee;
