import React, { useState } from "react";

import { Button } from "@material-ui/core";

import MarkdownTextArea from "./MarkdownTextArea";
import Spacer from "./Spacer";
import TagInput from "./TagInput";

import api from './utils/api'

const styles = {
  container: {
    height: "100%",
    padding: "1rem",

    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "space-between"
  },

  fieldRow: {
    flex: 1
  }
};

const FlashCardForm = ({ onHide }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState();

  const submitCard = () => {
    const newCard = {
      question,
      answer
    }
    console.log("req", newCard)
    api.doRequest('/cards', 'POST', newCard).then(res => {
      console.log(res)
      // debugger;
      // TODO: update parent state on QuestionIterator
      onHide()
    });
  }

  return (
    <div style={styles.container}>
      {/* TODO set defaultValue from DB */}

      {/* AFTER MVP */}
      {/* <h2>Category</h2> */}
      {/* <TagInput defaultValue={null} /> */}
      {/* <Spacer /> */}

      <h2>Question</h2>
      {/* TODO: make this a <Field/> */}
      <div style={styles.fieldRow}>
        <MarkdownTextArea
          autoFocus={true}
          placeholder="Question"
          text={question}
          onMdChange={setQuestion}
        />
      </div>

      <Spacer />

      <h2>Answer</h2>
      <div style={styles.fieldRow}>
        <MarkdownTextArea placeholder="Answer" onMdChange={setAnswer} />
      </div>

      <Spacer />
      <Button variant="contained" color="primary" onClick={submitCard}>
        Submit
      </Button>
    </div>
  );
};

export default FlashCardForm;