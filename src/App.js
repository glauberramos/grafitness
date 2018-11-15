import React, { Component } from "react";
import "./App.css";
import calculator from "./calculator";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>{calculator(2000, 4000, 0)}</p>
      </div>
    );
  }
}

export default App;
