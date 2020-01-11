import React, { Component } from "react";
import ReactDOM from "react-dom";

// import { Container } from "@material-ui/core";

import Header from "./Header";
import Questions from "./Questions";

// const styles = {
// 	width: '90%',
// 	margin: 'auto'
// }

// <Container maxWidth="lg">

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
