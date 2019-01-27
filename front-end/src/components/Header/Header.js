import React, { Component } from "react";
import "../../App.css";
import "./Header.css";
import ProfilePic from "../ProfilePic/ProfilePic";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <ProfilePic />
        <div className="name"> {this.props.name}</div>
      </div>
    );
  }
}

export default Header;
