import React, { Component } from "react";
import "../../App.css";
import "./NavBar.css";

import home from "../../assets/icons/home.svg";
import settings from "../../assets/icons/settings.svg";
import contact from "../../assets/icons/contact.svg";
import star from "../../assets/icons/star.svg";

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <img
          className="iconBar"
          onClick={() => {
            this.props.onClick("end");
          }}
          src={home}
        />
        <img className="iconBar" src={contact} />
        <img className="iconBar" src={star} />
        <img className="iconBar" src={settings} />
      </div>
    );
  }
}

export default NavBar;
