import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "../src/components/Button/Button";
import StreamPanel from "./components/StreamPanel/StreamPanel";
import Header from "./components/Header/Header";
import BottomPanel from "./components/BottomPanel/BottomPanel";
import NavBar from "./components/NavBar/NavBar";
import SidePanel from "./components/SidePanel/SidePanel";
import ProfileGroup from "./components/ProfileGroup/ProfileGroup";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
      isFullScreen: false,
      isMuted: false,
      activeName: ""
    };
  }

  personSelected = name => {
    this.setState({ activeName: name, isSelected: true });
  };
  onClick = string => {
    if (string === "end") {
      // console.log("is selected to false");
      this.setState({ isSelected: false });
    }
    if (string === "mute") {
      // if (this.state.isMuted) {
      //   console.log("is muted to false");
      // } else {
      //   console.log("is muted to true");
      // }
      this.setState({ isMuted: this.state.isMuted ? false : true });
    }
    if (string === "fullscreen") {
      // if (this.state.isFullScreen) {
      //   console.log("full screen to false");
      // } else {
      //   console.log("full screen to true");
      // }
      this.setState({ isFullScreen: this.state.isFullScreen ? false : true });
    }
  };
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <SidePanel />
        {!this.state.isSelected && (
          <ProfileGroup onClick={this.personSelected} />
        )}
        {this.state.isSelected && <StreamPanel onClick={this.onClick} />}
        {this.state.isSelected && <BottomPanel />}
      </div>
    );
  }
}

export default App;
