import React, { Component } from "react";
import "./App.css";
// import Increment from "./increment.js";
import Todolist from "./todolist.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Increment /> */}
        <Todolist />
      </div>
    );
  }
}

export default App;
