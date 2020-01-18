import React, { useState } from "react";

import { Button } from "@material-ui/core";

import MarkdownTextArea from "./MarkdownTextArea";

const styles = {
  height: "100%",
  padding: "1rem",

  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "space-between"
};

const QuestionForm = () => {
  const [question, setQuestion] = useState();
  const [answer, setAnswer] = useState();

  return (
    <div style={styles}>
      <h2>Question</h2>
      {/* TODO: make this a <Field/> */}
      <div style={{ flex: 1 }}>
        <div style={{ height: "100%", width: "100%" }}>
          <MarkdownTextArea autofocus={true} placeholder="Question">
            {question}
          </MarkdownTextArea>
        </div>
      </div>

      <h2>Answer</h2>
      <div style={{ flex: 1 }}>
        <div style={{ height: "100%", width: "100%" }}>
          <MarkdownTextArea placeholder="Answer">{answer}</MarkdownTextArea>
        </div>
      </div>

      {/* TODO: <Spacer /> */}
      <div style={{ margin: "0.5rem" }}></div>
      <Button variant="contained" color="primary">
        Submit
      </Button>
    </div>
  );
};

export default QuestionForm;
