import React from "react";
import { inherits } from "util";

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
  height: "inherit", // it would follow container div
  width: "inherit",
  fontSize: "1rem",
  border: "1px solid gray",
  borderRadius: "5px"
};

const MarkdownTextArea = ({ children, ...props }) => {
  return (
    <textarea {...defaultProps} {...props} style={styles}>
      {children}
    </textarea>
  );
};

export default MarkdownTextArea;
