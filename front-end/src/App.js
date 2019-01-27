import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "../src/components/Button/Button";
import ButtonFloat from "./components/ButtonFloat/ButtonFloat";
import StreamPanel from "./components/StreamPanel/StreamPanel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <StreamPanel />
      </div>
    );
  }
}

export default App;
