import React, { useState } from "react";

import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button
} from "@material-ui/core";

const Question = ({ question }) => {
  const [answerVisible, toggleAnswerVisible] = useState(false);

  return (
    <Card>
      <CardContent>
        <Typography>{question.question}</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={toggleAnswerVisible}
        >
          Reveal
        </Button>
        {answerVisible && <Typography>{question.answer}</Typography>}
      </CardContent>
    </Card>
  );
};

export default Question;
