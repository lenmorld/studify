import React, { useState } from "react";
import markdownit from "markdown-it";

import { Button } from "@material-ui/core";

import Spacer from "./Spacer";

const md = new markdownit();

// TODO: auto size based on view port
// TODO: preview

/*
    <textarea> props:
    cols, rows, autosize, placeholder 
*/

const defaultProps = {
  wrap: "off"
  // rows: "4", cols: "50",
};

const styles = {
  mainContainer: {
    // fill parent div
    height: "100%",
    width: "100%",
    // NOTE: or use flex: 1, if parent is flex box

    display: "flex",
    flexDirection: "column",
    // alignItems: "flex-start"
    alignItems: "stretch", // fill up cross axis (horizontal)
    justifyContent: "space-between"
  },
  mdContainer: {
    // height: "100%",
    // width: "100%"
    // flex: 1 // let md take entire space
    flexBasis: "80%" // leave a bit of space for space-between with button to work
    // but for mobile we still need the <Spacer />
  },
  textarea: {
    // height: "inherit", // it would follow container div
    // width: "inherit",
    height: "100%", // fill up the flex: 1 parent
    width: "100%",

    fontSize: "1rem",
    border: "1px solid gray",
    borderRadius: "5px",
    padding: "0.5rem" // internal padding
  },
  button: {
    alignSelf: "flex-start" // override stretch in the flex box
    // backgroundColor: "#1976d2",
    // color: "white"
  }
};

/**
 * if text is given:
 * Go to EDIT mode, and set button to Preview
 *
 * else:
 * Go to EDIT mode, and set button to Disabled until text is given
 */

const MarkdownTextArea = ({ text, readOnly, ...props }) => {
  const [editMode, toggleEditMode] = useState(!!text);
  const [markdown, setMarkdown] = useState(text || "");

  // TODO: remove onChange and read from button click instead
  const onChangeMdText = event => {
    const mdString = event.target.value;
    setMarkdown(mdString || "");
  };

  return (
    <div style={styles.mainContainer}>
      <div style={styles.mdContainer}>
        {editMode ? (
          <div dangerouslySetInnerHTML={{ __html: md.render(markdown) }}></div>
        ) : (
          <textarea
            {...defaultProps}
            {...props}
            style={styles.textarea}
            defaultValue={markdown}
            onChange={onChangeMdText}
          ></textarea>
        )}
      </div>

      <Spacer />

      <Button
        variant="contained"
        color="primary"
        onClick={() => toggleEditMode(!editMode)}
        style={styles.button}
      >
        {editMode ? "Edit" : "Preview"}
      </Button>
    </div>
  );
};

export default MarkdownTextArea;