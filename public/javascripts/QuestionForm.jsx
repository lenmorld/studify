import React, { useState } from "react";

import { Button } from "@material-ui/core";

import MarkdownTextArea from "./MarkdownTextArea";
import Spacer from "./Spacer";
import TagInput from "./TagInput";

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

const QuestionForm = () => {
  const [question, setQuestion] = useState();
  const [answer, setAnswer] = useState();

  return (
    <div style={styles.container}>
      <h2>Category</h2>

      {/* TODO set defaultValue from DB */}
      <TagInput defaultValue={null} />

      <h2>Question</h2>
      {/* TODO: make this a <Field/> */}
      <div style={styles.fieldRow}>
        <MarkdownTextArea
          autoFocus={true}
          placeholder="Question"
          text="What is blah?"
        />
      </div>

      <Spacer />

      <h2>Answer</h2>
      <div style={styles.fieldRow}>
        <MarkdownTextArea autoFocus={true} placeholder="Answer" />
      </div>

      <Spacer />
      <Button variant="contained" color="primary">
        Submit
      </Button>
    </div>
  );
};

export default QuestionForm;
