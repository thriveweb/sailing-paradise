import React from 'react'

import './Video.css'

export default ({ video = '', title, videoOverlay = '', className }) => {

	if(!video) return null

	if (videoOverlay) className += ' videoOverlay'

	return <div className={`video-section ${className}`}>
		{title && 
			<div className='overlay-content'>
				<h2 className='title-gradient'>{title}</h2>
				<p className='button buttonWhite'>Watch Video</p>
			</div>
		}
		<video className='video'>
			<source src={video} type="video/mp4"/>
		</video>
	</div>
}
