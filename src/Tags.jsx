import React, { useState } from "react"

import Button from "./components/Button"
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';

import Tag from "./components/Tag"
import { inputBorder } from "./sharedStyles"

// "Make Me key Please" -> "make_me_key_please"
const make_key = (str) => str.trim().toLowerCase().replace(/\s/g, "_")

// https://css-tricks.com/snippets/javascript/random-hex-color/
const random_color = () => {
	const newColor = Math.floor(Math.random() * 16777215).toString(16)
	return `#${newColor}`
}

const tags_db = {
	java: { name: "Java", color: "#F89820" },
	javascript: { name: "Javascript", color: "#F0DB4F" },
	react: { name: "React", color: "#61DBFB" },
	node: { name: "Node", color: "#3C873A" },
	github: { name: "Github", color: "#211F1F" },
	angular: { name: "Angular", color: "#B52E31" },
	rails: { name: "Rails", color: "#CC0000" },
	vue: { name: "Vue", color: "#41B883" },
	python: { name: "Python", color: "#4B8BBE" },
}

const selected_tags = ["javascript"]

const styles = {
	mainContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center"
	},
	selectedTags: {
		marginLeft: "1rem",
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
	},
	tagContainer: { marginRight: "10px" },
	tagSearchInput: { minWidth: '200px', ...inputBorder }
}

// filters the matching item in an objects structure
// and returns as an array
/*
  filterObjectsToKeysArray(tags_db, "name", "Java")
  -> [{ name: "Javascript" }, { name: "Java" }]
*/
// const filterObjectsToKeysArray = (hash, filterKey, filterValue) => {
//   return Object.entries(hash).reduce((acc, [key, value]) => {
//     // Java -> java -> includes(ja)?
//     if (value[filterKey].toLowerCase().includes(filterValue)) {
//       // return [...acc, { [key]: value }];
//       return [...acc, key];
//     } else {
//       return acc;
//     }
//   }, []);
// };

/*
  a simpler, more performant version
  just search the keys
  a hash cannot have dupe keys so take advantage of this

  caveat: key must match the name, preferrably using make_key
	BAD: js -> Javascript
	GOOD: javascript -> Javascript

  hash:
  stringInKey: has to be lowerCased and trimmed already
*/
const filterObjectKeys = (hash, stringInKey, notInArray) => {
	// java.includes(ja)?
	return Object.keys(hash).filter(
		(key) => key.includes(stringInKey) && !notInArray.includes(key),
	)
}

// savedSelectedTags
export default function Tags() {
	const [matchingTags, setMatchingTags] = useState([])

	const [tagInput, setTagInput] = useState()

	const [selectedTags, setSelectedTags] = useState(selected_tags)

	const [tagSearchVisible, setTagSearchVisible] = useState(false)

	const [createNewVisible, setCreateNewVisible] = useState(false)

	const handleChange = (e) => {
		setTagInput(e.target.value)

		const textInput = e.target.value.toLowerCase().trim()

		if (textInput) {
			// v1: filter by name in object
			// const tagKeyMatches = filterObjectsToKeysArray(
			//   tags_db,
			//   "name",
			//   textInput
			// );

			// v2: filter by keys
			const tagKeyMatches = filterObjectKeys(tags_db, textInput, selectedTags)
			// console.log(JSON.stringify(tagKeyMatches));

			if (
				tagKeyMatches.length === 1 &&
				tags_db[tagKeyMatches[0]].name.toLowerCase() === textInput
			) {
				console.log("exact 1 match")
				// 2c: exact match in "Tags DB"
				setMatchingTags(tagKeyMatches)
				setCreateNewVisible(false)
			}
			// 2b. partial mach in tags_db
			else if (tagKeyMatches.length > 0) {
				console.log("partial match: 1 or more")
				setMatchingTags(tagKeyMatches)
				setCreateNewVisible(true)
			} else if (!tagKeyMatches.length) {
				console.log("no match")
				// 2a. no matching tags in "Tags DB"
				setMatchingTags([])
				setCreateNewVisible(true)
			} else {
				console.log("wat?")
				// what else possible can happen???
			}
		} else {
			console.log("empty")
			// 2d: if blank / user erased input
			// reset matching tags to show all tags
			// setMatchingTags(tags_db);
			setCreateNewVisible(false)
			setMatchingTags([])
		}
	}

	const handleSelectMatchingTag = (e) => {
		const tagKey = e.target.id
		console.log("selected tag key", tagKey)

		// add to tags_db
		// selected_tags.push(e.target.id);
		// NOPE! WE HAVE TO PUT IN STATE TO TRACK THIS IN REACT
		// ALSO CANT USE useEffect

		// add to tags state
		setSelectedTags((oldSelectedTags) => [...oldSelectedTags, tagKey])
		setMatchingTags([])
	}

	const handleCreateNew = () => {
		// add tag to "DB"
		// tags_db.push({...});
		// NOPE! WE HAVE TO PUT IN STATE TO TRACK THIS IN REACT
		// ALSO CANT USE useEffect
		// --- first create a reliable "globally unique" key from input ---
		const tagKey = make_key(tagInput)
		// 1. add tag object to tags_db
		tags_db[tagKey] = {
			name: tagInput,
			color: random_color(), // TODO: custom
		}
		// 2. add tag_key to selected
		setSelectedTags((oldSelectedTags) => [...oldSelectedTags, tagKey])

		// 3. clear input, hide Create <input>, reset matching
		setTagInput("")
		setCreateNewVisible(false)
		setMatchingTags([])
	}

	return (
		<div>
			{/* Selected Tags */}
			<div style={styles.mainContainer}
			>
				<h3>Tags</h3>
				<div style={styles.selectedTags}>
					{selectedTags.length > 0 &&
						selectedTags.map((tag_key) => {
							const tag = tags_db[tag_key]
							return (
								<div style={styles.tagContainer}>
									<Tag
										key={tag_key}
										color={tag.color}
									>
										{tag.name}
									</Tag>
								</div>
							)
						})}
				</div>
				{/* Tag search */}
				{
					!tagSearchVisible && <Button type="default" shape="circle" size='small' icon={<PlusOutlined />} onClick={() => setTagSearchVisible(true)} />
				}
				{
					tagSearchVisible &&
					<div style={{ display: 'flex', flexDirection: 'column', margin: '0.5rem 0',  }} >
						<div>
							<input
								style={styles.tagSearchInput}
								onChange={handleChange}
								value={tagInput}
								placeholder="add tag"
							/>
							<Button type="default" shape="circle" size='small' icon={<CloseOutlined />} onClick={() => setTagSearchVisible(false)} />
							{tagInput &&
								<div
									style={{
										position: 'absolute',
										minWidth: '25%',
										// left: '50%',
										zIndex: '1',
										border: '1px solid gray',
										padding: '1rem',
										backgroundColor: '#FFFFFF'
									}}
								>
									<div style={{
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'flex-start'
									}}>
										{matchingTags.length > 0 &&
											matchingTags.map((tag_key) => {
												const tag = tags_db[tag_key];
												return (
													<Tag
														onClick={handleSelectMatchingTag}
														color={tag.color}
														key={tag_key}
														id={tag_key}
														style={{ marginBottom: '10px', cursor: 'pointer' }}
													>
														{tag.name}
													</Tag>
												);
											})}
									</div>
									<div>
										{createNewVisible && (
											<button
												style={{ padding: "5px 10px" }}
												onClick={handleCreateNew}
											>{`Create "${tagInput}"`}</button>
										)}
									</div>
								</div>
							}
						</div>
					{/* Matchig tags + Create new */}
				</div>

				}



			</div>

		</div>
	)
}
