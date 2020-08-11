import React, { useState } from "react";

import markdown from './utils/markdown'

const styles = {
  question: {
    fontSize: "1rem"
  },
  answerContainer: {
    marginTop: "2rem",
    fontSize: "0.75rem",
    border: "1px dashed gray",
    width: "100%"
  }
}

function Question({ question }) {
  return (
    <div style={styles.question} dangerouslySetInnerHTML={{ __html: markdown.render(question) }}></div>
  )
}

function Options({ options }) {
  return options.map(opt => <div key={opt.id}>{opt.description}</div>)
}


function AnswerPresentation({ text }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: markdown.render(text) }}></div>
  )
}

function Answer({ card }) {
  const { type, answer, options } = card;

  // if (Array.isArray(answer)) {
  if (card.type === "multiple") {
    // 1 answer
    if (answer.length === 1) {
      const correctOption = options.find(item => item.id === answer[0]);
      return <div key={correctOption.id}>{<AnswerPresentation text={correctOption.description} />}</div>
    } else {
      // multiple answers
      const correctOptions = options.filter(item => answer.includes(item.id))
      return correctOptions.map(co => <div key={co.id}>{<AnswerPresentation text={co.description} />}</div>)
    }
    // } else if (typeof answer === "boolean") {
  } else if (card.type === "true_false") {
    // true-false
    return <div>{answer.toString()}</div>
  }

  // card.type null, default "open"
  // open-ended question
  return <AnswerPresentation text={answer} />
}

const FlashCard = ({ card, answerVisible }) => {
  return (
    <React.Fragment>
      <Question question={card.question} />
      {
        card.options && <Options options={card.options} />
      }
      {
        answerVisible && (<div style={styles.answerContainer}>
          <Answer card={card} />
          {
            card.answer_notes && <div>{card.answer_notes}</div>
          }
        </div>)
      }
    </React.Fragment>
  );
};

export default FlashCard;
