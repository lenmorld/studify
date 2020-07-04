import React, { useState } from "react";

import markdown from './utils/markdown'

const styles = {
  question: {
    fontSize: "1rem"
  },
  answer: {
    fontSize: "1rem"
  }
}

const FlashCard = ({ card, answerVisible, toggleAnswerVisible }) => {
  // const classes = useStyles();
  return (
    <React.Fragment>
      <div style={styles.question} dangerouslySetInnerHTML={{ __html: markdown.render(card.question) }}>
      </div>
      {
        answerVisible &&
        <div style={styles.answer} dangerouslySetInnerHTML={{ __html: markdown.render(card.answer) }}></div>
      }

    </React.Fragment>
  );
};

export default FlashCard;
