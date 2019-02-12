import React, { Component } from 'react'

export class Deleting extends Component {
  render() {
    return (
      <div>
        <a class="btn-floating btn-small waves-effect waves-light red" onClick={()=>this.props.deleteEmployee(this.props.employeeId)}><i class="material-icons">clear</i></a>
      </div>
    )
  }
}

export default Deleting
