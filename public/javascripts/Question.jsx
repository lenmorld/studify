import React, { useState } from "react";

// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles({
//   title: {
//     fontSize: 20
//   },

//   card: {
//     width: "100%",
//     height: "100%"
//   }
// });

import { Button } from "@material-ui/core";

// import {
//   Card,
//   CardActions,
//   CardContent,
//   Typography,
//   Button,
//   Box
// } from "@material-ui/core";

const Question = ({ question }) => {
  // const classes = useStyles();
  const [answerVisible, toggleAnswerVisible] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        height: "100%",
        // border
        border: "1px solid gray",
        // padding
        padding: "2rem",
        margin: "1rem"
      }}
    >
      <div style={{ fontSize: "1.5rem" }}>{question.question}</div>
      <Button
        variant="contained"
        color="secondary"
        onClick={toggleAnswerVisible}
        style={{ fontSize: "1.5rem", padding: "1rem 2rem" }}
      >
        Reveal
      </Button>
      {answerVisible && <div>{question.answer}</div>}
    </div>
  );
};

export default Question;
