import React from 'react'
import { Button as ButtonMaterialUI } from "@material-ui/core"

const baseStyles = {
	// fontSize: "1.25rem",
	// padding: "1rem 2rem"
}

function Button({ type, onClick, style, children }) {
	return <ButtonMaterialUI
		variant="contained"
		color={type}
		onClick={onClick}
		style={{ ...baseStyles, ...style }}
	>
		{children}
	</ButtonMaterialUI>
}

export default Button;