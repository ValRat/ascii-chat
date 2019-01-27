import React, { Component } from "react";
import "../../../App.css";

class Profile extends Component {
    
  render() {
    return (
      <div onClick={this.props.onClick}>
          {this.props.name}
      </div>
    );
  }
}

export default Profile;
