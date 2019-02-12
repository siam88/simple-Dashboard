import React, { Component } from 'react'
import Deleting from './deleting/deleting';

export class Employee extends Component {
  render() {
    return (
      <div style={{border:"2px solid black"}}>
          <table class="highlight centered responsive-table">
        <thead>
          <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              
          </tr>
        </thead>

        <tbody>
            {this.props.employees.map(e=><tr><td>{e.id}</td><td>{e.name}</td><td>{e.email}</td><td><Deleting employeeId={e.id} deleteEmployee={this.props.deleteEmployee}/></td></tr>)}
         
        </tbody>
      </table>
      </div>
    )
  }
}

export default Employee
