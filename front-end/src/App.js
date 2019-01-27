import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "../src/components/Button/Button";
import ImageFloat from "../src/components/ImageFloat/ImageFloat";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ImageFloat />
      </div>
    );
  }
}

export default App;
