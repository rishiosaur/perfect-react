import React from 'react'

export const Title: React.FC = ({ children, ...props }) => (
	<h1 {...props}>{children}</h1>
)

export const Heading: React.FC = ({ children, ...props }) => (
	<h2 {...props}>{children}</h2>
)

export const Subheading: React.FC = ({ children, ...props }) => (
	<h3 {...props}>{children}</h3>
)

export const Paragraph: React.FC = ({ children, ...props }) => (
	<p {...props}>{children}</p>
)
