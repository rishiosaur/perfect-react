import React from 'react'

export type ContentLayoutProps = {}

const ContentLayout: React.FC<ContentLayoutProps> = ({
	children,
	...props
}) => <div style={{ margin: '10rem' }}>{children}</div>

export default ContentLayout
