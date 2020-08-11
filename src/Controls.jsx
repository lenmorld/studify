import React from 'react'

import { EyeOutlined } from '@ant-design/icons';
import Button from '../src/components/Button'

import RightWrong from "./RightWrong";

// different controls for different questions

const styles = {
	button: {
		// fontSize: "1rem",
		// padding: "0.5rem 1rem",
		marginTop: "1rem"
	}
}

function Controls({ answerVisible, toggleAnswerVisible, updateScore }) {
	return <React.Fragment>
		{
			!answerVisible && <Button
				type="primary"
				onClick={toggleAnswerVisible}
				size="large"
				style={styles.button}
				icon={<EyeOutlined />}
			>
				Reveal
      </Button>
		}

		{
			answerVisible &&
			<RightWrong onSelect={updateScore} />
		}
	</React.Fragment>
}

export default Controls