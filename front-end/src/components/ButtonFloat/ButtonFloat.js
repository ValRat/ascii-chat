import React, { Component } from "react";

import Button from "../Button/Button";

import "./ButtonFloat.css";

class ButtonFloat extends Component {
  onClick = string => {
    console.log(string);
  };
  render() {
    const { isFullScreen } = this.props;
    return (
      <div className={isFullScreen ? "ButtonFloat-full" : "ButtonFloat-small"}>
        <div id="end" className="FloatOption">
          <Button
            buttonLabel="END"
            onClick={() => {
              this.props.onClick("end");
            }}
          />
        </div>
        <div className="spacer" />
        <div id="mute" className="FloatOption">
          <Button
            buttonLabel="MUTE"
            onClick={() => {
              this.props.onClick("mute");
            }}
          />
        </div>
        <div id="fullscreen" className="FloatOption">
          <Button
            buttonLabel={isFullScreen ? "EXIT SCREEN" : "FULL SCREEN"}
            onClick={() => {
              this.props.onClick("fullscreen");
            }}
          />
        </div>
      </div>
    );
  }
}

export default ButtonFloat;
