import React, { Component } from "react";

import ButtonFloat from "../ButtonFloat/ButtonFloat";

import drinking from "../../assets/drinking.png";

import "./StreamPanel.css";

class StreamPanel extends Component {
  render() {
    return (
      <div>
        <img className="test-image" src={drinking} />
        <ButtonFloat onClick={this.props.onClick} />
        {/* <iframe src="http://10.19.130.172:8001" className="iframe" /> */}
      </div>
    );
  }
}

export default StreamPanel;
