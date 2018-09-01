import React, { Component } from 'react'
import Button from './Button'
import Image from './Image'
import './TestimonialSlider.css'

class Slider extends Component {
    state = {
        activeSlide: 1
    }

    componentDidMount() {
        setInterval(this.handleInterval, 7000)
    }

    componentWillUnmount() {
        clearInterval(this.handleInterval)
    }

    handleInterval = ()  => {
        const { featuredTestimonials } = this.props
        const { activeSlide } = this.state
        const nextIndex = activeSlide + 1 >= featuredTestimonials.length ? 0 : activeSlide + 1

        this.setState({
            activeSlide: nextIndex
        })
    }

    render() {
        const { activeSlide } = this.state
        const { description, title, buttonTitle, buttonUrl, featuredTestimonials } = this.props
        
        const prevSlide = activeSlide - 1 < 0 ? featuredTestimonials.length - 1 : activeSlide - 1
        const nextIndex = activeSlide + 1 >= featuredTestimonials.length ? 0 : activeSlide + 1

        return <section className='featuredTestimonials'>
            <div className='testimonialIntro'>
                {title && <h2>{title}</h2>}
                {description && <p>{description}</p>}
                {buttonTitle && buttonUrl && <Button title={buttonTitle} url={buttonUrl} />}
            </div>
            <div className='slider'>
                {featuredTestimonials.map(({ name, content, image }, index) =>
                    <div 
                        className={`slide ${
                            activeSlide === index ? 'active' : ''
                        }${
                            prevSlide === index  ? 'slide-prev' : ''
                        }${
                            nextIndex === index ? 'slide-next' : ''
                        }`} 
                        key={index}
                        onClick={() => this.setState({ activeSlide: index })}
                    >
                        {image && <Image src={image} alt='' />}   
                        {name && <p className='title'>{name}</p>}
                        {content && <p>{content}</p>}
                    </div>
                )}
                <div className='slider-dots'>
                    {featuredTestimonials.map(({ name }, index) => 
                        <span
                            key={index} 
                            onClick={() => this.setState({ activeSlide: index })}
                            className={activeSlide === index ? 'active' : ''}
                        ></span>
                    )}
                </div>
            </div>
        </section>    
    }
}

export default Slider