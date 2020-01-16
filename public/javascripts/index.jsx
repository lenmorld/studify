import React, { Component } from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import Questions from "./Questions";
import Modal from "./Modal";
import QuestionForm from "./QuestionForm";

class App extends Component {
  state = {
    showModal: false
  };

  // TODO move in context, or in global
  renderQuestionForm = () => {
    console.log("wa");
    this.setState({
      showModal: true
    });
  };

  // {this.state.showModal ? <Modal component={QuestionForm} /> : null}

  render() {
    return (
      <>
        {this.state.showModal ? (
          <Modal>
            <div>haha</div>
          </Modal>
        ) : null}
        <Header renderQuestionForm={this.renderQuestionForm} />
        <Questions />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
