import React from 'react'

import './app.less'

import Header from "./Header";
import QuestionIterator from "./QuestionIterator";
import Modal from "./Modal";
import FlashCardForm from "./FlashCardForm";
import Container from './Container'

const styles = {
	mainContainer: {
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
		// backgroundColor: 'lightgray'
	}
}

class App extends React.Component {
	state = {
		showModal: false
		// showModal: true //TEST
	};

	// TODO move in context, or in global
	renderQuestionForm = () => {
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
						<FlashCardForm onHide={this.hideModal} />
					</Modal>
				) : null}
				<Header renderQuestionForm={this.renderQuestionForm} />
				<Container>
					<QuestionIterator />
				</Container>
				<footer style={{ padding: '1rem', textAlign: 'center' }}>
					<span style={{ fontSize: '0.75rem' }}>Questions from <a href="https://github.com/yangshun/front-end-interview-handbook" target="_blank" rel="noopener" rel="noreferrer">Github: Front-end Interview Handbook</a></span>
				</footer>
			</div>
		);
	}
}

export default App