import React from 'react'

import './Video.css'

export default ({videoUrl = ''}) => {

	if(!videoUrl) return null

	const newUrl = videoUrl.replace(/^.+v=/,'').replace(/\&.*/,'')

	return <iframe className='video' src={`https://www.youtube.com/embed/${newUrl}`}></iframe>
}
