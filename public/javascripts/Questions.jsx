import React, { useState, useEffect } from "react";
import axios from "axios";

import { Button } from "@material-ui/core";

import Question from "./Question";

const getNext = (current, max) => {
  // TODO: smart random
  let nextIndex = current + 1;
  return nextIndex >= max ? 0 : nextIndex;
};

const Questions = ({}) => {
  // TODO: cache, lazy-loading, pagination
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:3000/cards").then(res => {
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

  const currentQuestion = questions[currentIndex];

  return (
    <div
      style={{
        height: "80%",
        // border: "1px solid gray",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <Question key={currentQuestion.id} question={currentQuestion} />
      <Button
        variant="contained"
        color="primary"
        onClick={nextQuestion}
        style={{ fontSize: "1.5rem", padding: "1rem 2rem" }}
      >
        Next
      </Button>
    </div>
  );
};

export default Questions;
