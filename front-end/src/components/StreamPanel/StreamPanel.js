import React, { Component } from "react";

import ButtonFloat from "../ButtonFloat/ButtonFloat";

import drinking from "../../assets/drinking.png";

import "./StreamPanel.css";

class StreamPanel extends Component {
  render() {
    const { isFullScreen } = this.props;
    return (
      <div>
        {/* <img
          className={isFullScreen ? "test-image-full" : "test-image-small"}
          src={drinking}
        /> */}
        <ButtonFloat isFullScreen={isFullScreen} onClick={this.props.onClick} />
        <iframe
          src="http://10.19.130.172:8001"
          className={isFullScreen ? "test-image-full" : "test-image-small"}
          scrolling="no"
        />
      </div>
    );
  }
}

export default StreamPanel;
