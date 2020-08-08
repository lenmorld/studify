import React from 'react'

import Button from '../src/components/Button'

import { Space } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

function RightWrong({ onSelect }) {

	return (<Space size={"large"}>
		<Button type="primary" icon={<CheckCircleOutlined />} style={{ backgroundColor: 'green', borderColor: 'green' }} size="large" onClick={() => onSelect(true)}>
			I knew it!
		</Button>
		<Button type="primary" icon={<CloseCircleOutlined />} style={{ backgroundColor: 'red', borderColor: 'red' }} size="large" onClick={() => onSelect(false)}>
			No clue!
		</Button>
	</Space>

	)
}

export default RightWrong