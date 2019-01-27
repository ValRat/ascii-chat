import React, { Component } from "react";
import "../../App.css";
import Profile from "./Profile/Profile";
import "../ProfileGroup/ProfileGroup.css";

class ProfileGroup extends Component {
  state = {
    names: [
      "John Doe",
      "Zach Shawcross",
      "Yep Heff",
      "Jane Vein",
      "Andy Hona",
      "Steve Nate",
      "Bill Cobs",
      "Keith Hou"
    ]
  };

  render() {
    const { names } = this.state;
    return (
      <div className="groupSpacing">
        <div className="firstRow">
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

        <div className="secondRow">
          <Profile
            onClick={() => {
              this.props.onClick(names[4]);
            }}
            name={this.state.names[4]}
          />
          <Profile
            onClick={() => {
              this.props.onClick(names[5]);
            }}
            name={this.state.names[5]}
          />
          <Profile
            onClick={() => {
              this.props.onClick(names[6]);
            }}
            name={this.state.names[6]}
          />
          <Profile
            onClick={() => {
              this.props.onClick(names[7]);
            }}
            name={this.state.names[7]}
          />
        </div>
      </div>
    );
  }
}

export default ProfileGroup;
