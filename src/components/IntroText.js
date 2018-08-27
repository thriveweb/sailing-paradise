import React from 'react'
import Content from './Content'

import './IntroText.css'

export default({ content, center, className = '' }) => {
	if (center) className += ' alignCenter'

	return <Content className={`intro-section fancy-title ${className}`} src={content}/>
}