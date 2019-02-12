import React, { Component } from 'react'

export class SideNav extends Component {
  
  render() {

    return (
      <div>
        
        <ul id="slide-out" class="sidenav sidenav-fixed">
          <li><a><h3>Mave .</h3></a></li>
          {this.props.navigation.map(e=><li><a>{e.nave}</a></li>)}
          <li><a><h4>Setting</h4></a></li>
          {this.props.setting.map(e=><li><a>{e.name}</a></li>)}
        </ul>
        
      </div>
    )
  }
}

export default SideNav
