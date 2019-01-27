import React, { Component } from "react";

import ButtonFloat from "../ButtonFloat/ButtonFloat";

class StreamPanel extends Component {
  render() {
    return (
      <div>
        <div>A face perhaps?</div>
        <ButtonFloat onClick={this.props.onClick} />
      </div>
    );
  }
}

export default StreamPanel;
