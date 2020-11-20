import React, { useState } from "react"

// import { Button } from "@material-ui/core";
import { Input } from "antd"
import { SaveOutlined, EditOutlined } from "@ant-design/icons"

import Button from "./components/Button"

import Spacer from "./Spacer"

import md from "./utils/markdown"

const { TextArea } = Input

// TODO: auto size based on view port
// TODO: preview

/*
    <textarea> props:
    cols, rows, autosize, placeholder
*/

const defaultProps = {
  wrap: "off",
  // rows: "4", cols: "50",
}

const styles = {
  mainContainer: {
    // fill parent div
    height: "100%",
    width: "100%",
    // NOTE: or use flex: 1, if parent is flex box

    display: "flex",
    // flexDirection: "column", // NOTE: made as a prop instead
    // alignItems: "flex-start"
    alignItems: "stretch", // fill up cross axis (horizontal)
    justifyContent: "space-between",
  },
  mdContainer: {
    // height: "100%",
    // width: "100%"
    flex: 1 // let md take entire space
    // flexBasis: "80%", // leave a bit of space for space-between with button to work
    // but for mobile we still need the <Spacer />
    // fontSize: "0.75rem",
  },
  textarea: {
    // height: "inherit", // it would follow container div
    // width: "inherit",
    height: "100%", // fill up the flex: 1 parent
    width: "100%",

    // fontSize: "0.65rem",
    lineHeight: "1.33",
    padding: "0.25rem",

    // border: "1px solid gray",
    // borderRadius: "5px",
    // padding: "0.5rem" // internal padding
  },
}

/**
 * if text is given:
 * Go to EDIT mode, and set button to Preview
 *
 * else:
 * Go to EDIT mode, and set button to Disabled until text is given
 */

const MarkdownTextArea = ({
  text,
  readOnly,
  onSave,
  onEdit,
  autoFocus,
  placeholder,
  layout,
}) => {
  const [editMode, toggleEditMode] = useState(!!text)
  const [markdown, setMarkdown] = useState(text || "")

  const onChangeMdText = (event) => {
    const mdString = event.target.value
    const value = mdString || ""
    // console.log("EDIT...", value)
    setMarkdown(value)
  }

  const handleClick = () => {
    if (editMode && onEdit) {
      // save
      onEdit()
    } else if (!editMode && onSave) {
      // edit
      onSave(markdown)
    }

    toggleEditMode((prev) => !prev)
  }

  return (
    <div style={{ ...styles.mainContainer, flexDirection: layout || 'row'}}>
      <div style={styles.mdContainer}>
        {editMode ? (
          <div dangerouslySetInnerHTML={{ __html: md.render(markdown) }} />
        ) : (
          <TextArea
            placeholder={placeholder}
            autoFocus={autoFocus}
            defaultValue={markdown}
            onChange={onChangeMdText}
            size="small"
            style={styles.textarea}
          />
        )}
      </div>

      <Button
        type="default"
        shape="circle"
        size="small"
        icon={editMode ? <EditOutlined /> : <SaveOutlined />}
        onClick={handleClick}
        style={{ marginTop: layout === 'column' && '10px', marginLeft: layout === 'row' && '10px' }}
      />
    </div>
  )
}

export default MarkdownTextArea
