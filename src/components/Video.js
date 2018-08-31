import React, { Component } from 'react'
import Image from './Image'
import { ICONPlay } from './Icons'
import Button from './Button'
import FeaturedSlider from './FeaturedSlider'

import './Video.css'

class Video extends Component {
	constructor(props) {
		super(props)

		this.videoRef = React.createRef()

		this.state = {}
	}

	handleVideo = url => {
		this.videoRef.current.src = `https://www.youtube.com/embed/${url}?autoplay=1&start=0&modestbranding=1&controls=0&disablekb=1&rel=0`
		this.setState({
			videoPlaying: true
		})
	}

	render() {
		const { title, video, imageOverlay, videoBanner, homeVideo, buttonTitle, buttonUrl, featuredSlider, featuredBanner } = this.props
		const { videoPlaying } = this.state

		if(!video) return null

		const url = video.replace(/^.+v=/,'').replace(/\&.*/,'')

		if(homeVideo) return <div className={`video-section homeVideo`}>
				{!videoPlaying &&
					<div className='overlay-content'>
						<div className='container'>
							{title && <h1 className='title-gradient'>{title}</h1>}
							{buttonTitle && buttonUrl && <Button title={buttonTitle} url={buttonUrl} white />}
						</div>	
					</div>
				}
				<iframe 
					src={`https://www.youtube.com/embed/${url}?autoplay=1&start=0&mute=1&modestbranding=1&rel=0&controls=0&loop=1&playlist=${url}&showinfo=0`} 
					frameBorder="0" 
				>
				</iframe>
				<FeaturedSlider featuredSlider={featuredSlider} featuredBanner={featuredBanner} />
			</div>

		return <div className={`video-section ${videoBanner ? 'videoBanner' : ''}`} onClick={() => this.handleVideo(url)}>
			{!videoPlaying &&
				<div className='overlay-content'>
					<Image background src={imageOverlay} />
					{title && <h2 className='title-gradient'>{title}</h2>}
					<ICONPlay className='playButton' />
				</div>
			}
			<iframe 
				ref={this.videoRef}
				src={`https://www.youtube.com/embed/${url}?start=0&modestbranding=1&controls=0&disablekb=1&rel=0`} 
				frameBorder="0" 
				allowFullScreen
			>
			</iframe>
		</div>
	}
}

export default Video