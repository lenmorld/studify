import React, { useState, useEffect } from "react";

import FlashCard from "./FlashCard";
import Summary from './Summary';

import api from './utils/api'
import randomizer from './utils/randomizer'
import Controls from "./Controls";

const styles = {
  // TOP HALF
  questionContainer: {
    flexBasis: "80%",
    width: "100%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    // height: "100%",
    // width: "100%",
    border: "1px solid gray",
    textAlign: "center",
    padding: "1rem",
  },

  // BOTTOM HALF
  buttonsContainer: {
    flexBasis: "20%",
    width: "100%",

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
}

function getNext(current, max) {
  let nextIndex = current + 1;

  if (nextIndex > max) {
    // return 0
    // signify end of list
    return -1;
  } else {
    return nextIndex;
  }
  // return nextIndex > max ? 0 : nextIndex;
};

const QuestionIterator = ({ }) => {
  // TODO: cache, lazy-loading, pagination
  // TODO: move state up, or put in a context
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [answerVisible, toggleAnswerVisible] = useState(false);

  const [userScore, setUserScore] = useState(0)

  useEffect(() => {
    api.doRequest('/cards').then(res => {
      console.log("questions from API", res.data)

      let questions = res.data;
      // debugging Summary
      // questions = [questions[0], questions[1]]

      // randomize order
      const randomizedSet = randomizer(questions)
      setQuestions(randomizedSet);
    });
  }, []);
  // NOTE: dont forget [] or it is an infinite fetch!

  if (!questions.length) {
    return <div>Loading...</div>;
  }

  // end of list
  if (currentIndex === -1) {
    return <Summary />
  }

  const nextQuestion = () => {
    setCurrentIndex(getNext(currentIndex, questions.length - 1));
    toggleAnswerVisible()
  };

  const currentCard = questions[currentIndex];

  const updateScore = (isCorrect) => {
    if (isCorrect) {
      setUserScore((prevScore) => prevScore + 1)
    }
    nextQuestion()
  }

  return (
    <React.Fragment>
      <h3>
        {userScore}
      </h3>
      <div style={styles.questionContainer}>
        <FlashCard key={currentCard.id} card={currentCard} answerVisible={answerVisible} toggleAnswerVisible={toggleAnswerVisible} />
      </div>
      {/* TODO: combine two buttons with different states */}
      <div
        style={styles.buttonsContainer}
      >
        <Controls answerVisible={answerVisible} toggleAnswerVisible={toggleAnswerVisible} updateScore={updateScore} />
      </div>
    </React.Fragment>
  );
};

export default QuestionIterator;
