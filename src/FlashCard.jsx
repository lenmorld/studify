import React, { useState } from "react"

import markdown from "./utils/markdown"

const styles = {
  question: {
    fontSize: "1rem",
  },
  answer: {
    fontSize: "1rem",
  },
}

const formatAnswerBasedOntype = (answerType, answers, options) => {
	const parsedAnswers = answers;

	if (answerType === 'open') {
		return parsedAnswers[0].toString()
	} if (answerType === 'multiple') {
		const parsedOptions = options;
		return parsedAnswers.map(ans => parsedOptions[ans]).join("<br/>")
	} if (answerType === 'true_false') {
		return parsedAnswers[0].toString()
	} else {
		// ERROR???
	}
}

const FlashCard = ({ card, answerVisible, toggleAnswerVisible }) => {
  // const classes = useStyles();
  return (
    <>
      <div
        style={styles.question}
        dangerouslySetInnerHTML={{ __html: markdown.render(card.question) }}
      ></div>
      {answerVisible && (
        <div
          style={styles.answer}
          dangerouslySetInnerHTML={{
            __html: markdown.render(
              formatAnswerBasedOntype(
                card.answer_type,
                card.answers,
                card.options,
              ),
            ),
          }}
        ></div>
      )}
    </>
  )
}

export default FlashCard
