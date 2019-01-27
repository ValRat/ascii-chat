import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "../src/components/Button/Button";
import ButtonFloat from "./components/ButtonFloat/ButtonFloat";
import StreamPanel from "./components/StreamPanel/StreamPanel";
import Header from "./components/Header/Header";
import BottomPanel from "./components/BottomPanel/BottomPanel";
import NavBar from "./components/NavBar/NavBar";
import SidePanel from "./components/SidePanel/SidePanel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <SidePanel />
        <StreamPanel />
        <BottomPanel />
      </div>
    );
  }
}

export default App;
