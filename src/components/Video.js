import React from 'react'

import './Video.css'

export default ({videoUrl}) => {
	const newUrl = videoUrl.replace(/^.+v=/,'').replace(/\&.*/,'');

	return <iframe className='video' src={`https://www.youtube.com/embed/${newUrl}`}></iframe>
}
