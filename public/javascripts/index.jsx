import React, { Component } from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import Questions from "./Questions";
import Modal from "./Modal";
import QuestionForm from "./QuestionForm";

class App extends Component {
  state = {
    // showModal: false
    showModal: true //TEST
  };

  // TODO move in context, or in global
  renderQuestionForm = () => {
    console.log("wa");
    this.setState({
      showModal: true
    });
  };

  hideModal = event => {
    console.log("HIDE!");
    // debugger;
    // this.setState({ showModal: false });
  };

  // TODO: make Modal an HoC

  render() {
    return (
      <>
        {this.state.showModal ? (
          <Modal onHide={this.hideModal}>
            <QuestionForm />
          </Modal>
        ) : null}
        <Header renderQuestionForm={this.renderQuestionForm} />
        <Questions />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
