import React, { Component } from 'react'
import Image from './Image'
import { ICONPlay } from './Icons'

import './Video.css'

class Video extends Component {
	// constructor(props) {
	// 	super(props)

	// 	this.videoRef = React.createRef()

	// 	this.state = {}
	// }

	// handleVideo = url => {
	// 	this.videoRef.current.src = `https://www.youtube.com/embed/${url}?autoplay=1&start=0&modestbranding=1&controls=0&disablekb=1&rel=0`
	// 	this.setState({
	// 		videoPlaying: true
	// 	})
	// }

	render() {

		return <div>test</div>
		// const { title, video, imageOverlay } = this.props
		// const { videoPlaying } = this.state

		// if(!video) return null

		// const url = video.replace(/^.+v=/,'').replace(/\&.*/,'')


		// return <div className={`video-section`} onClick={() => this.handleVideo(url)}>
		// 	{!videoPlaying &&
		// 		<div className='overlay-content'>
		// 			<Image background src={imageOverlay} />
		// 			{title && <h2 className='title-gradient'>{title}</h2>}
		// 			<ICONPlay />
		// 		</div>
		// 	}
		// 	<iframe 
		// 		ref={this.videoRef}
		// 		src={`https://www.youtube.com/embed/${url}?start=0&modestbranding=1&controls=0&disablekb=1&rel=0`} 
		// 		frameBorder="0" 
		// 		allowFullScreen
		// 	>
		// 	</iframe>
		// </div>
	}
}

export default Video