import React, { Fragment } from 'react'
import Content from './Content'

import './IntroText.css'

export default({ content, center, className = '', title }) => {
	if (center) className += ' alignCenter'

	if(title) return <div className='contentColumn fancy-title'>
		<div className='container'>
			<h2>{title}</h2>
			<Content className={`intro-section  ${className}`} src={content}/>
		</div>	
	</div>	

	return <Content className={`intro-section fancy-title ${className}`} src={content}/>
}