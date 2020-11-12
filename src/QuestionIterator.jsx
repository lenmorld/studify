import React, { useState, useEffect } from "react";

import { EyeOutlined } from '@ant-design/icons';

import Button from '../src/components/Button'
import FlashCard from "./FlashCard";
import Summary from './Summary';

import api from './utils/api'
import randomizer from './utils/randomizer'
import RightWrong from "./RightWrong";

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
  buttonContainer: {
    flexBasis: "20%",
    width: "100%",

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    // fontSize: "1rem",
    // padding: "0.5rem 1rem",
    marginTop: "1rem"
  }
}

/**
 *
 * TODO: navigation logic
 * 1. next gets Random
 * 2. if visited, don't visit again
 *
 * e.g.
 *
 * [0, 1, 2, 3, 4, 5]
 *
 * something like
 * 3 -> 0 -> 5 -> 1 -> 2 -> 4
 *
 * no number should repeat in a "round"
 */

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
}

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

	  console.log(JSON.stringify(res.data))

      let questions = res.data;
      // debugging Summary
    //   questions = [questions[0], questions[1]]

      // randomize order
      const randomizedSet = randomizer(questions)
      setQuestions(randomizedSet);
    });
  }, []);
  // fetch on mount and unmount

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
        style={styles.buttonContainer}
      >
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
      </div>
    </React.Fragment>
  );
};

export default QuestionIterator;
