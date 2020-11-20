import React from "react"
import { Select as SelectUI } from "antd"

const { Option } = SelectUI

export default function Select({ options, onChange, defaultValue }) {
  return (
    <SelectUI
      defaultValue={defaultValue}
      style={{ width: 150 }}
      onChange={onChange}
    >
      {options.map((option) => (
        <Option key={option.value} value={option.value}>
          {option.name}
        </Option>
      ))}
    </SelectUI>
  )
}
