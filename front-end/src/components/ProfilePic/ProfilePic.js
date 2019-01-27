import React, { Component } from "react";
import "../../App.css";
import "./ProfilePic.css";
import logo from "../../assets/initials_circle.svg";

class Profilepic extends Component {
  render() {
    return <img className="circle" src={logo} />;
  }
}

export default Profilepic;
