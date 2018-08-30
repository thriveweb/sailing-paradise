import React, { Component } from 'react'
import Image from './Image'

import './Video.css'

class Video extends Component {
	constructor(props) {
		super(props)

		this.videoRef = React.createRef()

		this.state = {}
	}

	handleVideo = () => {
		const video = {video}
		const url = video.replace(/^.+v=/,'').replace(/\&.*/,'')

		this.videoRef.current.src = `https://www.youtube.com/embed/${url}?autoplay=1&start=0&modestbranding=1&controls=0&disablekb=1&rel=0`
		this.setState({
			videoPlaying: true
		})
	}

	render() {
		const { title, video, imageOverlay } = this.props
		const { videoPlaying } = this.state

		if(!video) return null

		// if (videoBanner) className += ' videoBanner'

		const url = video.replace(/^.+v=/,'').replace(/\&.*/,'')

		

		return <div className={`video-section`}>
			{title && !videoPlaying &&
				<div className='overlay-content'>
					<Image background src={imageOverlay} />
					<h2 
						className='title-gradient'
						onClick={() => this.handleVideo()}
					>
						{title}
					</h2>
				</div>
			}
			<iframe 
				ref={this.videoRef}
				src={``} 
				frameBorder="0" 
				allowFullScreen
			>
			</iframe>
		</div>
	}
}

export default Video