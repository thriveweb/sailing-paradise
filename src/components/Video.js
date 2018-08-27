import React from 'react'

import './Video.css'

export default ({videoUrl}) => {
	return <iframe className='video' src={videoUrl}></iframe>
}
