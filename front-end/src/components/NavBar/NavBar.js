import React, { Component } from "react";
import "../../App.css";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div>
        <div>Home</div>
        <div>Contacts</div>
        <div>Favorites</div>
        <div>Settings</div>
      </div>
    );
  }
}

export default NavBar;
