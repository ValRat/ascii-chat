import React, { Component } from "react";
import "../../App.css";
import "./ProfilePic.css";
import logo from "../../assets/initials_circle.svg";

class Profilepic extends Component {
  render() {
    const { activeName } = this.props;
    const array = activeName.split(" ");
    const initials = array[0].charAt(0) + array[1].charAt(0);
    return (
      <div className="circle">
        <div className="circle-text">{initials}</div>
      </div>
    );
  }
}

export default Profilepic;
