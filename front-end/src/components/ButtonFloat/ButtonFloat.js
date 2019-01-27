import React, { Component } from "react";

import Button from "../Button/Button";

class ButtonFloat extends Component {
  onClick = () => {
    console.log("button clicked");
  };
  render() {
    return (
      <div>
        <Button buttonLabel="end" onClick={this.onClick} />
        <Button buttonLabel="mute" onClick={this.onClick} />
        <Button buttonLabel="fullscreen" onClick={this.onClick} />
      </div>
    );
  }
}

export default ButtonFloat;
