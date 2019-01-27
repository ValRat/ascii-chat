import React, { Component } from "react";

import Button from "../Button/Button";

class ImageFloat extends Component {
  state = {};
  render() {
    return (
      <div>
        <Button buttonLabel="button1" onClick={this.onClick} />
        <Button buttonLabel="button2" onClick={this.onClick} />
        <Button buttonLabel="button3" onClick={this.onClick} />
      </div>
    );
  }
}

export default ImageFloat;
