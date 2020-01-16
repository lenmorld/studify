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

        fontSize: "1.5rem"
      }}
    >
      <div>{question.question}</div>
      <Button
        variant="contained"
        color="secondary"
        onClick={toggleAnswerVisible}
        style={{
          fontSize: "1.5rem",
          padding: "1rem 2rem"
        }}
      >
        Reveal
      </Button>
      <div>{answerVisible && question.answer}</div>
    </div>
  );
};

export default Question;
