import React, { Component } from 'react'

import Slider from 'react-slick/dist/react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from './Image'
import Button from './Button'

import './FeaturedSlider.css'

class GallerySlider extends Component {

  	render() {
		const settings = {
		  infinite: true,
		  slidesToShow: 3,
		  swipeToSlide: true,
		  slidesToScroll: 1,
		  arrows: true,
		};

	    const { featuredSlider, featuredBanner } = this.props
	    const { title, buttonTitle, buttonUrl, image } = featuredBanner
		
		if(!featuredSlider) return null

		return <div className='FeaturedHomeSection'>
			<div className='featuredSlider'>
				<h2 className='fancy-title'>Featured</h2>
				<Slider {...settings}>
		    		{featuredSlider.map(({ title, description, buttonUrl }, index) => {
		    			return <div 
		    				className='sliderItem' 
		    				key={`featured-${index}`}
		    			>
			    			{title && <h4>{title}</h4>}
			    			{description && <p>{description}</p>}
			    			{buttonUrl && <Button title='Know More' url={buttonUrl} white />}
			    		</div>
		    		})}
		    	</Slider>
			</div>
			<div className='featuredBanner relative'>
				<Image background src={image} alt='' />
				<div className='bannerContent'>
					{title && <h3>{title}</h3>}
					{buttonTitle && buttonUrl && <Button title={buttonTitle} url={buttonUrl} white />}
				</div>	
			</div>
		</div>		
	}
}

export default GallerySlider

