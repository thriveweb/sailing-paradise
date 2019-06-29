import React, { Component } from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import IntroText from './IntroText'
import Image from './Image'
import Content from './Content'

import { ICONClose } from './Icons'

import './CrewGallery.css'

class CrewGallery extends Component {

  state = {
    popupActive: null
  }

  handlePopup = (index = null) => {
    this.setState({
      popupActive: index
    })
    
    document.body.style.overflow = index || index === 0 ? 'hidden' : 'auto'
    document.documentElement.style.overflow = index || index === 0 ? 'hidden' : 'auto'
  }

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
              onClick={() => this.handlePopup(index)}
	    			>
              {image &&
                <div
                  style={{
                    backgroundImage: `url(${`${image}-/resize/100x/`})`,
                    backgroundSize: 'cover'
                  }}
                  data-src={`${image}-/resize/500/`}
                  className='BackgroundImage absolute lazy'
                >
                </div>
              }
		    			<div className='crew-content'>
		    				{name && <h4>{name}</h4>}
		    				{title && <p>{title}</p>}
		    			</div>
		    		</div>
	    		})}
	    	</Slider>
        {crew.map(({ name, title, content }, index) => {
          return <div
            className={`crew-popup ${this.state.popupActive === index ? 'active' : ''}`}
            key={`image-${index}`}
          >
            <div className='popup-content'>
              <div className='popup-close' onClick={() => this.handlePopup()}>
                <ICONClose />
              </div>
              {name && <h4>{name}</h4>}
              {title && <p className='title'>{title}</p>}
              {content && <Content src={content} />}
            </div>
          </div>
        })}
			</div>
		</div>
	}
}

export default CrewGallery
