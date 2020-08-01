import React from 'react'

const styles = {
	flex: 1,
	// border: "1px solid gray",
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
	alignItems: "center",
	// padding: "1rem",
	margin: "1rem",
	// border: "1px solid gray"
}

export default function Container({ children }) {
	return <div style={styles}>
		{children}
	</div>
}