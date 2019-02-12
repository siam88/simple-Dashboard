import React, { Component } from 'react'

export class DeletingProjects extends Component {
  render() {
    return (
      <div>
        <a class="btn-floating btn-small waves-effect waves-light red" onClick={()=>this.props.deleteProject(this.props.projectId)}><i class="material-icons">clear</i></a>
      </div>
    )
  }
}

export default DeletingProjects
