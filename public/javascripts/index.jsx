import React, { Component } from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import Questions from "./Questions";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Questions />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
