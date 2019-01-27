import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "../src/components/Button/Button";
import StreamPanel from "./components/StreamPanel/StreamPanel";
import Header from "./components/Header/Header";
import BottomPanel from "./components/BottomPanel/BottomPanel";
import NavBar from "./components/NavBar/NavBar";
import SidePanel from "./components/SidePanel/SidePanel";

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

  onClick = string => {
    if (string === "end") {
      this.setState({ isSelected: false });
    }
  };
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <SidePanel />
        <StreamPanel onClick={this.onClick} />
        <BottomPanel />
      </div>
    );
  }
}

export default App;
