import React, { useState, useRef } from "react"

// import { Button } from "@material-ui/core";
import Button from "./components/Button"
import Select from "./components/Select"

import MarkdownTextArea from "./MarkdownTextArea"
import MultipleChoice from "./MultipleChoice"
import Spacer from "./Spacer"
// import TagInput from "./TagInput";
import Tags from "./Tags"

import api from "./utils/api"

const DEFAULT_OPTIONS = [
  { id: "A", description: "This is A" },
  { id: "B", description: "This is B" },
]

const DEFAULT_TRUE_FALSE_OPTIONS = [
  { id: "true", description: "True" },
  { id: "false", description: "False" },
]

const styles = {
  container: {
    height: "100%",
    padding: "1rem",

    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "space-between",
  },

  fieldRow: {
    flex: 1,
  },
}

const questionTypes = [
  { value: "open", name: "Open" },
  { value: "multiple", name: "Multiple Choice" },
  { value: "true_false", name: "True/False" },
]

const FlashCardForm = ({ onHide }) => {
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState([])
  const [type, setType] = useState("multiple") // open, multiple, true_false

  const optionsRef = useRef(null)

  const setAnswerOpenType = (val) => {
    setAnswer([val])
  }

  const setAnswerMultipleType = (val) => {
    if (type === "true_false") {
      setAnswer([val])
    } else if (type === "multiple") {
      setAnswer((prevArr) => [...prevArr, val])
    }
  }

  const submitCard = () => {
    // TODO: fix this!
    const newCard = {
      question,
      options: type === "open" ? null : optionsRef.current,
      answers: answer || ["A"],
      answer_type: type,
    }
    console.log("req", newCard)
    api.doRequest("/cards", "POST", newCard).then((res) => {
      console.log(res)
      // debugger;
      // TODO: update parent state on QuestionIterator
      onHide()
    })
  }

  const changeQuestionType = (value) => {
    setType(value)
  }

  return (
    <div style={styles.container}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h3>Question type</h3>
        <Select
          options={questionTypes}
          onChange={changeQuestionType}
          defaultValue={type}
        />
      </div>
      <Tags savedSelectedTags={[]} />

      <h3>Question</h3>
      {/* TODO: make this a <Field/> */}
      <div style={styles.fieldRow}>
        <MarkdownTextArea
          autoFocus
          placeholder="Question"
          text={question}
          onSave={setQuestion}
          layout="column"
        />
      </div>

      <Spacer />

      <h3>{type === "open" ? "Answer" : "Options"}</h3>
      {type === "open" && (
        <div style={styles.fieldRow}>
          <MarkdownTextArea
            placeholder="Answer"
            onSave={setAnswerOpenType}
            layout="column"
          />
        </div>
      )}

      {type === "multiple" && (
        <div style={styles.fieldRow}>
          <MultipleChoice
            defaultOptions={DEFAULT_OPTIONS}
            optionsEditable
            ref={optionsRef}
            addAnswer={setAnswerMultipleType}
          />
        </div>
      )}

      {type === "true_false" && (
        <div style={styles.fieldRow}>
          <MultipleChoice
            defaultOptions={DEFAULT_TRUE_FALSE_OPTIONS}
            ref={optionsRef}
            hasExactlyOneAnswer
            addAnswer={setAnswerMultipleType}
          />
        </div>
      )}

      <Spacer />
      <Spacer />
      <Button type="primary" onClick={submitCard}>
        Submit
      </Button>
    </div>
  )
}

export default FlashCardForm
