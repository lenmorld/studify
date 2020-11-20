import React, { useState, useEffect, forwardRef, useRef } from "react"

import Button from "./components/Button";
import MarkdownTextArea from "./MarkdownTextArea"
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

import { inputBorder } from "./sharedStyles"

console.log(inputBorder)

const styles = {
  textInput: {
	  ...inputBorder,
	  flex: 1,
  },
  option: {
	//   margin: '5px',
	  display: 'flex',
	  width: '100%'
  },
  button: {
	  margin: "0 5px"
  }
}

function Option({ option, add, remove, optionsEditable, onChange }) {
  return (
    <div style={styles.option}>
	  <MarkdownTextArea placeholder="Option" text={option.description} onSave={(newText) => onChange(option.id, newText)} layout="row" />
	  {
		  optionsEditable && (
			  <div style={{ display: 'flex'}}>
				<div id={option.id} onClick={add} className="button">
					<Button type="default" shape="circle" size='small' icon={<PlusOutlined />} style={styles.button} />
				</div>
				<div id={option.id} onClick={remove} className="button" >
					<Button type="default" shape="circle" size='small'  icon={<MinusOutlined style={styles.button} />} />
				</div>
			  </div>
		  )
	  }

    </div>
  )
}

function MultipleChoice({ defaultOptions, optionsEditable, hasExactlyOneAnswer, addAnswer}, ref) {
  const [options, setOptions] = useState(defaultOptions)

  // when options change, set ref to JSON'ed array
  // so when consumer wants latest value, they get it without being subscribed
  // to the updates here
  useEffect(() => {
	ref.current = options.reduce((acc, opt) => {
		return {
			...acc,
			[opt.id]: opt.description
		}
	}, {})
  }, [options])

  const add = () => {
	  const newOption = {
		  id: new Date().getTime().toString(), // this will be replaced by contents after,
		  description: "option"
	  }
	  setOptions(prevOptions => [...prevOptions, newOption])
  }

  const remove = (event) => {
	// console.log(event.target.closest(".button"))
	// NOTE: Svg icon in antd's Button catches the click event
	const optionId = event.target.closest(".button").id;

	setOptions(prevOptions => prevOptions.filter(opt => opt.id !== optionId))
  }

  // FIXME: optimize using refs and forward refs
  const onChangeOption = (id, newText) => {
	  // update options
	  setOptions(prevOptions => prevOptions.map(opt => {
		  if (opt.id === id) {
			  return {
				  ...opt,
				  description: newText
			  }
		  } else {
			return opt
		  }
	  }))
  }

  const onChangeAnswer = (event) => {
	//   debugger
	//   console.log(event)

	  // TODO: process each event and pass to function prop
	  addAnswer(event.target.value)
  }

  return (
    <div>
      {options.map((option) => (
		  <div style={{ display: 'flex'}}>
			  <div style={{ marginRight: '5px' }}>
				  <input type={hasExactlyOneAnswer ? "radio" : "checkbox"} name={hasExactlyOneAnswer ? "radio_answer" : option.id} value={option.id} onChange={onChangeAnswer} />
			  </div>
			  <Option key={option.id} option={option} add={add} remove={remove} optionsEditable={optionsEditable} onChange={onChangeOption} />
		  </div>
      ))}
    </div>
  )
}

export default forwardRef(MultipleChoice)
