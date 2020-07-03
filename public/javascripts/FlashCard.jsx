import React, { useState } from "react";

import { Button } from "@material-ui/core";

const styles = {
  question: {
    fontSize: "1.5rem"
  },
  revealButton: {
    fontSize: "1.5rem",
    padding: "1rem 2rem"
  },
  answer: {
    fontSize: "1.5rem"
  }
}

const FlashCard = ({ card }) => {
  // const classes = useStyles();
  const [answerVisible, toggleAnswerVisible] = useState(false);

  return (
    <React.Fragment>
      <div style={styles.question}>{card.question}</div>
      <Button
        variant="contained"
        color="secondary"
        onClick={toggleAnswerVisible}
        style={styles.revealButton}
      >
        Reveal
      </Button>
      <div style={styles.answer}>{answerVisible && card.answer}</div>
    </React.Fragment>
  );
};

export default FlashCard;
