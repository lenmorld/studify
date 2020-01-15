import React, { Component } from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import Questions from "./Questions";

class App extends Component {
  render() {
    return (
      <div style={{ height: "95vh", fontSize: "16px" }}>
        <Header />
        <hr />
        <Questions />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
