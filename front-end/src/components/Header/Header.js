import React, { Component } from "react";
import "../../App.css";
import "./Header.css";
import ProfilePic from "../ProfilePic/ProfilePic";
import ASKEY from "../../assets/icons/ASKEY.png";

class Header extends Component {
  render() {
    const { isSelected, activeName } = this.props;
    return (
      <div className="header">
        {isSelected && <ProfilePic activeName={activeName} />}
        <img src={ASKEY} className="logo" />
        <div className="name"> {activeName}</div>
      </div>
    );
  }
}

export default Header;
