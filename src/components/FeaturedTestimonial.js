import React from 'react'
import Button from './Button'
import Image from './Image'
import Content from './Content'

import './FeaturedTestimonial.css'

export default ({ description, title, buttonTitle, buttonUrl, featuredTestimonial }) => {

    if(!featuredTestimonial) return null
        
    const { name, content, image } = featuredTestimonial

    return <section className='featuredTestimonial'>
        <div className='container large'>
            <div className='testimonialIntro'>
                {title && <h2>{title}</h2>}
                {description && <Content src={description} />}
                {buttonTitle && buttonUrl && <Button title={buttonTitle} url={buttonUrl} />}
            </div>
            <div className='testimonial'>
                {image && <Image src={image} alt='' />}
                <div className='testimonial-content'>  
                    {name && <p className='title'>{name}</p>}
                    {content && <Content src={content} />}
                </div>    
            </div>
        </div>    
    </section>    
}

