import React, { Component } from 'react'

import Slider from 'react-slick/dist/react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mediumZoom from 'medium-zoom'

import Image from './Image'
import './GallerySlider.css'

class GallerySlider extends Component {

  	render() {
		const settings = {
		  infinite: true,
		  slidesToShow: 4,
		  swipeToSlide: true,
		  slidesToScroll: 4,
		  autoplay: true,
		  speed: 1500,
		  autoplaySpeed: 4000,
		  arrows: true,
		};

	    const { gallery = [] } = this.props
		
		if(!gallery.length) return null

		return <Slider {...settings} className='gallery'>
    		{gallery.map(({ image }, index) => {
    			return <div className='galleryImage' key={`image-${index}`}>
	    			<Image background src={image} alt='' />
	    		</div>
    		})}
    	</Slider>
	}
}

export default GallerySlider

