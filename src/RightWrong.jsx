import React from "react"

import { Space } from "antd"
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons"
import Button from "./components/Button"

function RightWrong({ onSelect }) {
  return (
    <Space size="large">
      <Button
        type="primary"
        icon={<CheckCircleOutlined />}
        className="button green"
        size="large"
        onClick={() => onSelect(true)}
      >
        I knew it!
      </Button>
      <Button
        type="primary"
        icon={<CloseCircleOutlined />}
        className="button red"
        size="large"
        onClick={() => onSelect(false)}
      >
        No clue!
      </Button>
    </Space>
  )
}

export default RightWrong
