import React, { Component } from "react";
import Top from "./pages/Top";
import Content from "./pages/Content";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Top />
        <Content />
      </div>
    );
  }
}

export default App;
