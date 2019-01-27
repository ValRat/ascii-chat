import React, { Component } from "react";

import Button from "../Button/Button";

class ButtonFloat extends Component {
  onClick = string => {
    console.log(string);
  };
  render() {
    return (
      <div>
        <Button
          buttonLabel="end"
          onClick={() => {
            this.props.onClick("end");
          }}
        />
        <Button
          buttonLabel="mute"
          onClick={() => {
            this.props.onClick("mute");
          }}
        />
        <Button
          buttonLabel="fullscreen"
          onClick={() => {
            this.props.onClick("fullscreen");
          }}
        />
      </div>
    );
  }
}

export default ButtonFloat;
