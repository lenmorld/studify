import React, { Component } from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import QuestionIterator from "./QuestionIterator";
import Modal from "./Modal";
import FlashCardForm from "./FlashCardForm";

const styles = {
	mainContainer: {
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
		backgroundColor: 'lightgray'
	}
}

class App extends Component {
	state = {
		showModal: false
		// showModal: true //TEST
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
		this.setState({ showModal: false });
	};

	// TODO: make Modal an HoC

	render() {
		return (
			<div style={styles.mainContainer}>
				{this.state.showModal ? (
					<Modal onHide={this.hideModal}>
						<FlashCardForm />
					</Modal>
				) : null}
				<Header renderQuestionForm={this.renderQuestionForm} />
				<QuestionIterator />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("app"));
