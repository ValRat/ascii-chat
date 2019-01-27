import React, { Component } from "react";
// import add from "../../assets/add.svg";

class Button extends Component {
  render() {
    const { buttonLabel = "default" } = this.props;
    return (
      <div onClick={this.props.onClick}>
        {/* <img src={add} /> */}
        <div>{buttonLabel}</div>
      </div>
    );
  }
}

export default Button;
