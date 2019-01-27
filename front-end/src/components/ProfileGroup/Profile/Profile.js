import React, { Component } from "react";
import "../../../App.css";
import "./Profile.css";

class Profile extends Component {
  render() {
    const { name } = this.props;
    const colorArray = [
      "red",
      "red",
      "blue",
      "blue",
      "green",
      "green",
      "orange",
      "purple",
      "purple",
      "grey",
      "grey",
      "teal",
      "brown",
      "dark-blue"
    ];
    let color = colorArray[Math.floor(Math.random() * colorArray.length)];
    return (
      <div className="rectangle" id={color} onClick={this.props.onClick}>
        <div className="initial">{name.charAt(0)}</div>
        <div className="profileComp">{name}</div>
      </div>
    );
  }
}

export default Profile;
