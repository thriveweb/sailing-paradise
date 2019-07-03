import React from 'react'
import Image from './Image'
import Content from './Content'
import { Link } from 'gatsby'

import './FeaturedTestimonial.css'

export default ({ description, title, testimonial, caseStudies }) => {

    if(!testimonial) return null

    caseStudies = caseStudies ? caseStudies.edges.map(edge => ({ ...edge.node })) : []
    testimonial = caseStudies.filter(caseStudy => caseStudy.frontmatter.title === testimonial)

    const { fields, frontmatter } = testimonial[0]
    const { excerpt, featuredImage } = frontmatter
    const { slug } = fields

    return <section className='featuredTestimonial'>
        <div className='container large'>
            <div className='testimonialIntro'>
                {title && <h2>{title}</h2>}
                {description && <Content src={description} />}
            </div>
            <Link to={slug} className='testimonial'>
              {featuredImage &&
                <div className='img-thumbnail'>
                  <div
                    style={{
                      backgroundImage: `url(${`${featuredImage}-/resize/100x/`})`,
                      backgroundSize: 'cover'
                    }}
                    data-src={`${featuredImage}-/resize/120/`}
                    className='BackgroundImage absolute lazy'
                  >
                  </div>
                </div>
              }
              <div className='testimonial-content'>
                  {frontmatter.title && <p className='title'>{frontmatter.title}</p>}
                  {excerpt && <Content src={excerpt} />}
                  <p className='read-more'>See more</p>
              </div>
            </Link>
        </div>
    </section>
}
