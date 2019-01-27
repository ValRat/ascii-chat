import React, { Component } from "react";
import "../../App.css";
import Profile from "./Profile/Profile";

class ProfileGroup extends Component {
  state = {
    names: ["John Doe", "Dane Kane", "Jeff Heff", "Jane Vein"]
  };

  render() {
    const { names } = this.state;
    return (
      <div>
        <Profile
          onClick={() => {
            this.props.onClick(names[0]);
          }}
          name={this.state.names[0]}
        />
        <Profile
          onClick={() => {
            this.props.onClick(names[1]);
          }}
          name={this.state.names[1]}
        />
        <Profile
          onClick={() => {
            this.props.onClick(names[2]);
          }}
          name={this.state.names[2]}
        />
        <Profile
          onClick={() => {
            this.props.onClick(names[3]);
          }}
          name={this.state.names[3]}
        />
      </div>
    );
  }
}

export default ProfileGroup;
