import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Characters from "./components/Characters";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header name="Star Wars" status="Characters !" />
        <Characters />
      </div>
    );
  }
}

export default App;
