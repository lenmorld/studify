import React from 'react'
// import { Button as ButtonMaterialUI } from "@material-ui/core"
import { Button as ButtonUI } from 'antd';

const baseStyles = {
	// fontSize: "1.25rem",
	// padding: "1rem 2rem"
}

/**
 * material-ui
 *
 * 		variant="contained"
		color={type}
 *
 */

function Button({ type, onClick, style, size, icon, children, ...props }) {
	// debugger
	return <ButtonUI
		type={type}
		onClick={onClick}
		style={{ ...baseStyles, ...style }}
		size={size}
		icon={icon}
		{...props}
	>
		{children}
	</ButtonUI>
}

export default Button;
