import React, { Component } from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import IntroText from './IntroText'
import Image from './Image'

import './CrewGallery.css'

class CrewGallery extends Component {

  	render() {
		const settings = {
		  infinite: true,
		  slidesToShow: 4,
		  swipeToSlide: true,
		  slidesToScroll: 1,
		  arrows: true,
		};

	    const { crew = [], crewIntro } = this.props

		if(!crew) return null

		return <div className='crewSection'>
			<div className='container'>
				<IntroText content={crewIntro} center />
			</div>
			<div className='gallery'>
				<Slider {...settings}>
		    		{crew.map(({ image, name, title }, index) => {
		    			return <div
		    				className='galleryImage'
		    				key={`image-${index}`}
		    			>
			    			<Image background src={`${image}-/resize/500x/`} alt=''/>
			    			<div className='crew-content'>
			    				{name && <h4>{name}</h4>}
			    				{title && <p>{title}</p>}
			    			</div>
			    		</div>
		    		})}
		    	</Slider>
			</div>
		</div>
	}
}

export default CrewGallery
