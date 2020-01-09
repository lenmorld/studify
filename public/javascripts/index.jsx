import React, { Component } from "react";
import ReactDOM from "react-dom";

import Header from './Header';
import Questions from './Questions';

const styles = {
	width: '90%',
	margin: 'auto'
}

class App extends Component {
	render() {
		return <div style={styles}>
			<Header />
			<hr />
			<Questions />
		</div>;
	}
}

ReactDOM.render(<App />, document.getElementById("app"));