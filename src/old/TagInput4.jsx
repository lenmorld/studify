import React, { useState, useEffect } from "react";

import { Tag, Input } from "antd";

const TAGS = [
  { id: 0, name: "JS" },
  { id: 1, name: "Ruby" },
  { id: 2, name: "React" }
];

export default function Tags() {
  const [tags, setTags] = useState(TAGS);

  const [matchingTags, setMatchingTags] = useState(TAGS);

  const [tagInput, setTagInput] = useState();

  const [tagInputVisible, setTagInputVisible] = useState(false);

  const handleChange = (e) => {
    // if not found in tags, show input

    const textInput = e.target.value.trim();
    setTagInput(textInput);
  };

  /*
    // TODO: optimize by using a hash instead
    const tagMatches = tags.filter((item) =>
      item.name.toLowerCase().includes(tagInput)
    );

    if (tagMatches.length) {
      setMatchingTags(tagMatches);
      setTagInputVisible(false);
    } else {
      setTagInputVisible(true);
    }
*/

  const handleCreateNew = () => {
    // alert(tagInput);

    // add tag to state
    setTags((oldTags) =>
      oldTags.concat({
        id: oldTags.length,
        name: tagInput
      })
    );
  };

  // useEffect(() => {
  //   if ()
  // })

  return (
    <div>
      <h1>Tags</h1>
      <div style={{ border: "1px solid lightgray" }}>
        {/* <Tag>taggy</Tag> */}
        <Input onChange={handleChange} value={tagInput} />
        {tags.map((tag) => (
          <Tag key={tag.id}>{tag.name}</Tag>
        ))}
        {tagInput && (
          <button onClick={handleCreateNew}>{`Create "${tagInput}"`}</button>
        )}
      </div>
    </div>
  );
}
