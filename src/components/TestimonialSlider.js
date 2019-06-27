import React, { Component } from 'react'
import _get from 'lodash/get'
import { Link } from 'gatsby'
import Button from './Button'
import Image from './Image'
import Content from './Content'

import './TestimonialSlider.css'

class Slider extends Component {
    state = {
        activeSlide: 1
    }

    componentDidMount() {
        this.setState({
            intervalId: setInterval(this.handleInterval, 7000)
        })
    }

    componentWillUnmount() {
        window.clearInterval(this.state.intervalId)
    }

    handleInterval = ()  => {
        const { testimonialsListing } = this.props
        const { activeSlide } = this.state
        const nextIndex = activeSlide + 1 >= testimonialsListing.length ? 0 : activeSlide + 1

        this.setState({
            activeSlide: nextIndex
        })
    }

    render() {
        const { activeSlide } = this.state
        const { description, title, buttonTitle, buttonUrl, testimonialsListing, caseStudies } = this.props

        if(!testimonialsListing.length) return null

        const caseStudiesListing = caseStudies ? caseStudies.edges.map(edge => ({ ...edge.node })) : []
        const testimonialNames = testimonialsListing.map(({ testimonial }) => testimonial)
        const testimonials = caseStudiesListing.filter(caseStudy => testimonialNames.includes(_get(caseStudy, 'frontmatter.name')))

        const prevSlide = activeSlide - 1 < 0 ? testimonialsListing.length - 1 : activeSlide - 1
        const nextIndex = activeSlide + 1 >= testimonialsListing.length ? 0 : activeSlide + 1

        return <section className='featuredTestimonials'>
            <div className='testimonialIntro'>
                {title && <h2>{title}</h2>}
                {description && <Content src={description} />}
                {buttonTitle && buttonUrl && <Button title={buttonTitle} url={buttonUrl} />}
            </div>
            <div className='slider'>
                {testimonials.map(({ frontmatter, fields }, index) => {
                        const { name, excerpt, featuredImage } = frontmatter
                        const { slug } = fields
                        const contentLimited = excerpt.slice(0, 220)
                        const content = excerpt.length > contentLimited.length ? contentLimited + '...' : contentLimited
                    return <div
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
                            {featuredImage && <Image src={featuredImage} alt={name} />}
                            {name && <p className='title'>{name}</p>}
                            {content && <Content src={content} />}
                            <Link className='read-more' to={slug}>see more</Link>
                        </div>
                })}
                <div className='slider-dots'>
                    {testimonials.map(({ name }, index) =>
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
