import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Travels</h1>
        </header>
        <Travel
          destination="San-Francisco"
          country="USA"
          image="http://image.noelshack.com/fichiers/2018/39/1/1537817767-sf.jpg"
          distance="9130km"
        />
        <Travel
          destination="Bali"
          country="Indonesia"
          image="http://image.noelshack.com/fichiers/2018/39/1/1537819531-bali.jpg"
          distance="12 663 km"
        />
      </div>
    );
  }
}

export default App;