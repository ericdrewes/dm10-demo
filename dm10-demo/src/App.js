import React, { Component } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

import routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my Crib</h1>
        </header>
        {routes}
      </div>
    );
  }
}

export default App;
