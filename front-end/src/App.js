import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "../src/components/Button/Button";
import ButtonFloat from "./components/ButtonFloat/ButtonFloat";
import StreamPanel from "./components/StreamPanel/StreamPanel";
import Header from '../src/components/Header/Header';
import NavBar from '../src/components/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <NavBar />
        <StreamPanel />
      </div>
    );
  }
}

export default App;
