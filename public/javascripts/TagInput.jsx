import React, { useState, useEffect } from "react";

// TODO: fetch tags using useEffect
const TAGS = [
  { id: 0, code: "js", name: "Javascript" },
  { id: 1, code: "react", name: "React" },
  { id: 2, code: "rails", name: "Rails" },
  { id: 3, code: "ruby", name: "Ruby" }
];

/*
    on type
    -> set state

    -> compare input with existing tags

    for each existing tags that match
    -> show existing tags as buttons

    -> add a button for current input
*/

/*
 style={{ padding: "3px", display: "flex" }}

      <button
        style={{
          border: "none",
          padding: "0",
          margin: "2px",
          cursor: "pointer"
        }}
      >
        ❌
      </button>
*/

const Tag = ({ name, code, selectTag }) => {
  const onClick = event => {
    debugger;
    const clicked = event.target.id;
    selectTag(clicked);
  };

  // debugger;
  return (
    <div>
      <button onClick={onClick} id={code}>
        {name}
      </button>
    </div>
  );
};

const TagInput = ({ defaultValue }) => {
  const [tagInput, setTagInput] = useState(defaultValue || "");
  const [tagMatches, setTagMatches] = useState([]);
  const [tagSelected, setTagSelected] = useState(null);

  const onType = event => {
    const tagInputValue = event.target.value;
    setTagInput(tagInputValue);
  };

  const selectTag = code => {
    debugger;
    const selectedTag = TAGS.find(t => t.code === code);
    if (selectedTag) {
      setTagSelected(selectedTag);
    } else {
      console.error("CLICKED TAG NOT FOUND IN DB!");
    }
  };

  useEffect(() => {
    // compare input with existing tags
    if (tagInput.trim()) {
      const matches = TAGS.filter(t =>
        t.name.toUpperCase().includes(tagInput.toUpperCase())
      );

      setTagMatches(matches);
    } else {
      setTagMatches([]);
    }

    //   return () => {
    //       cleanup
    //   };
  }, [tagInput]); // run when tagInput changes

  return (
    <div style={{ display: "flex", border: "1px solid gray" }}>
      <div>
        <input type="text" value={tagInput} onChange={onType} />
      </div>
      {tagSelected && (
        <div style={{ fontWeight: "bold" }}>{tagSelected.name}</div>
      )}

      {tagMatches.map(tag => (
        <Tag
          name={tag.name}
          code={tag.code}
          key={tag.id}
          selectTag={selectTag}
        />
      ))}
    </div>
  );
};

export default TagInput;
