import React, { Component } from "react";
import "../../../App.css";
import "./Profile.css";

class Profile extends Component {
    
  render() {
    return (
        <div className="rectangle"  onClick={this.props.onClick}>
            <div className="profileComp">
                    {this.props.name}
            </div>
      </div>
    );
  }
}

export default Profile;
