import React, { Component } from 'react'
//
// import Slider from 'react-slick/dist/react-slick'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
//
// import Image from './Image'
// import { ICONMagnify, ICONClose } from './Icons'
// import './GallerySlider.css'
//
// class GallerySlider extends Component {
//
// 	state = {
// 		popupActive: null
// 	}
//
// 	handlePopup = (index = null) => {
// 		this.setState({
// 			popupActive: index
// 		})
//
// 		document.body.style.overflow = index || index === 0 ? 'hidden' : 'auto'
// 		document.documentElement.style.overflow = index || index === 0 ? 'hidden' : 'auto'
// 	}
//
//   	render() {
// 		const { gallery = [] } = this.props
//
// 		const settings = {
// 		  infinite: gallery.length > 4,
// 		  slidesToShow: 4,
// 		  swipeToSlide: true,
// 		  slidesToScroll: 1,
// 		  arrows: true,
// 		};
//
// 		if(!gallery) return null
//
// 		return <div className='gallery'>
// 			<Slider {...settings}>
// 	    		{gallery.map(({ image }, index) => {
// 	    			return <div
// 	    				className='galleryImage'
// 	    				key={`image-${index}`}
// 	    				onClick={() => this.handlePopup(index)}
// 	    			>
// 		    			<Image background src={image} alt=''/>
// 		    			<ICONMagnify />
// 		    		</div>
// 	    		})}
// 	    	</Slider>
// 			{gallery.map(({ image }, index) => {
// 				return <div
// 					className={`galleryImage--Popup ${this.state.popupActive === index ? 'active' : ''}`}
// 					key={`image-full-${index}`}
// 				>
// 					<div className='popup-close' onClick={() => this.handlePopup()}>
// 						<ICONClose />
// 					</div>
// 	    			{image && <img src={image} alt=''/>}
// 	    		</div>
// 			})}
// 		</div>
// 	}
// }
//
// export default GallerySlider

export default () => null
