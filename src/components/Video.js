import React from 'react'

import './Video.css'

export default ({ video = '', title, videoOverlay = '', className }) => {

	if(!video) return null

	if (videoOverlay) className += ' videoOverlay'
	const url = video.replace(/^.+v=/,'').replace(/\&.*/,'')

	return <div className={`video-section ${className}`}>
		{title && 
			<div className='overlay-content'>
				<h2 className='title-gradient'>{title}</h2>
				<p className='button buttonWhite'>Watch Video</p>
			</div>
		}
		<iframe className='video' src={`https://www.youtube.com/embed/${url}`}></iframe>
	</div>
}
