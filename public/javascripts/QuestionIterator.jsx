import React, { useState, useEffect } from "react";

import { Button } from "@material-ui/core";

import FlashCard from "./FlashCard";

import api from './utils/api'

const styles = {
  questionsContainer: {
    flex: 1,
    // border: "1px solid gray",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",

    // padding: "1rem",
    margin: "1rem",

    border: "1px solid gray"
  },
  // TOP HALF
  questionContainer: {
    flexBasis: "80%",
    width: "100%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    // height: "100%",
    // width: "100%",
    borderBottom: "1px solid gray",
    textAlign: "center",
  },

  // BOTTOM HALF
  buttonContainer: {
    flexBasis: "20%",
    width: "100%",

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  nextButton: {
    fontSize: "1.5rem",
    padding: "1rem 2rem"
  }
}

const getNext = (current, max) => {
  // TODO: smart random
  let nextIndex = current + 1;
  return nextIndex > max ? 0 : nextIndex;
};

const QuestionIterator = ({ }) => {
  // TODO: cache, lazy-loading, pagination
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    api.doRequest('/cards').then(res => {
      // debugger;
      setQuestions(res.data);
    });
  }, []);
  // NOTE: dont forget [] or it is an infinite fetch!

  if (!questions.length) {
    return <div>Loading...</div>;
  }

  const nextQuestion = () => {
    setCurrentIndex(getNext(currentIndex, questions.length - 1));
  };

  const currentCard = questions[currentIndex];

  return (
    <div
      style={styles.questionsContainer}
    >
      <div style={styles.questionContainer}>
        <FlashCard key={currentCard.id} card={currentCard} />
      </div>
      <div
        style={styles.buttonContainer}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={nextQuestion}
          style={styles.nextButton}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default QuestionIterator;
