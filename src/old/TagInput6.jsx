import React, { useState, useEffect } from "react";

import { Tag, Input } from "antd";

const objectsToArray = (objectsArray) => {
  Object.entries(objectsArray).reduce((acc, [key, value]) => {
    return [...acc, { [key]: value }];
  }, []);
};

const filterObjectsToArray = (objectsArray, filterKey, filterValue) => {
  return Object.entries(objectsArray).reduce((acc, [key, value]) => {
    if (value[filterKey].toLowerCase().includes(filterValue)) {
      // return [...acc, { [key]: value }];
      return [...acc, key];
    } else {
      return acc;
    }
  }, []);
};

// "Make Me key Please" -> "make_me_key_please"
const make_key = (str) => str.trim().toLowerCase().replace(/\s/g, "_");

const tags_db = {
  lenny: { name: "Lenny" },
  tammy: { name: "Tammy" },
  doggy: { name: "Doggy" },
  johnny: { name: "Johnny" },
  charlie: { name: "Charlie" },
  maria: { name: "Maria" }
};

const selected_tags = ["lenny"];

export default function Tags() {
  const [matchingTags, setMatchingTags] = useState([]);

  const [tagInput, setTagInput] = useState();

  const [selectedTags, setSelectedTags] = useState(selected_tags);

  const [createNewVisible, setCreateNewVisible] = useState(false);

  const handleChange = (e) => {
    setTagInput(e.target.value);

    const textInput = e.target.value.toLowerCase().trim();

    if (textInput) {
      const tagKeyMatches = filterObjectsToArray(tags_db, "name", textInput);
      // console.log(JSON.stringify(tagKeyMatches));

      if (
        tagKeyMatches.length === 1 &&
        tags_db[tagKeyMatches[0]].name.toLowerCase() === textInput
      ) {
        console.log("exact 1 match");
        // 2c: exact match in "Tags DB"
        setMatchingTags(tagKeyMatches);
        setCreateNewVisible(false);
      }
      // 2b. partial mach in tags_db
      else if (tagKeyMatches.length > 0) {
        console.log("partial match: 1 or more");
        setMatchingTags(tagKeyMatches);
        setCreateNewVisible(true);
      } else if (!tagKeyMatches.length) {
        console.log("no match");
        // 2a. no matching tags in "Tags DB"
        setMatchingTags([]);
        setCreateNewVisible(true);
      } else {
        console.log("wat?");
        // what else possible can happen???
      }
    } else {
      console.log("empty");
      // 2d: if blank / user erased input
      // reset matching tags to show all tags
      // setMatchingTags(tags_db);
      setCreateNewVisible(false);
      setMatchingTags([]);
    }
  };

  const handleSelectMatchingTag = (e) => {
    const tagKey = e.target.id;
    console.log("selected tag key", tagKey);

    // add to tags_db
    // selected_tags.push(e.target.id);
    // NOPE! WE HAVE TO PUT IN STATE TO TRACK THIS IN REACT
    // ALSO CANT USE useEffect

    // add to tags state
    setSelectedTags((oldSelectedTags) => [...oldSelectedTags, tagKey]);
  };

  const handleCreateNew = () => {
    // add tag to "DB"
    // tags_db.push({
    //   [tagInput.toLowerCase()]: {
    //     name: tagInput
    //   }
    // });
    // NOPE! WE HAVE TO PUT IN STATE TO TRACK THIS IN REACT
    // ALSO CANT USE useEffect
    // --- first create a reliable "globally unique" key from input ---
    const tagKey = make_key(tagInput);
    // 1. add tag object to tags_db
    tags_db[tagKey] = {
      name: tagInput
    };
    // 2. add tag_key to selected
    setSelectedTags((oldSelectedTags) => [...oldSelectedTags, tagKey]);

    // 3. clear input, hide Create <input>, reset matching
    setTagInput("");
    setCreateNewVisible(false);
    setMatchingTags([]);
  };

  return (
    <div>
      <h1>People</h1>
      {/* <h3>all available tags:</h3> */}
      {/* <div>
        {Object.values(tags_db).reduce(
          (acc, curr) => [acc, curr.name].join(","),
          ""
        )}
      </div> */}
      <hr />
      <div style={{ border: "1px solid lightgray" }}>
        {/* <Tag>taggy</Tag> */}
        <h3>Add new people by searching</h3>
        <Input
          onChange={handleChange}
          value={tagInput}
          placeholder="search people"
        />
        current team:
        {selectedTags.length > 0 &&
          selectedTags.map((tag_key) => {
            const tag = tags_db[tag_key];
            return <Tag key={tag_key}>{tag.name}</Tag>;
          })}
        <br />
        {/* <i>Pick a person or create one</i> */}
        <br />
        {matchingTags.length > 0 &&
          matchingTags.map((tag_key) => {
            const tag = tags_db[tag_key];
            return (
              <Tag onClick={handleSelectMatchingTag} key={tag_key} id={tag_key}>
                {tag.name}
              </Tag>
            );
          })}
        {createNewVisible && (
          <button onClick={handleCreateNew}>{`Create "${tagInput}"`}</button>
        )}
      </div>
      {/* {JSON.stringify(matchingTags)} */}
    </div>
  );
}
