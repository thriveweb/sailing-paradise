import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import _get from 'lodash/get'
import _format from 'date-fns/format'
import Link from 'gatsby-link'

import PageHeader from '../components/PageHeader'
import IntroText from '../components/IntroText'
import ContentBox from '../components/ContentBox'
import GallerySlider from '../components/GallerySlider'
import Accordion from '../components/Accordion'
import ColumnBanner from '../components/ColumnBanner'
import TestimonialSlider from '../components/TestimonialSlider'

import './SingleBoatTour.css'

export const SingleBoatTourTemplate = ({
  body,
  title,
  featuredImage,
  intro,
  contentBox,
  gallery,
  accordionSection, 
  columnBanner,
  testimonials
}) => {

  return <article className="SingleBoatTour">
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <PageHeader
      title={title}
      backgroundImage={featuredImage}
    />
    <div className='BoatTourIntro'>
      <div className='container'>
        <IntroText content={intro} />
        <ContentBox {...contentBox} />
      </div>  
    </div> 
    <GallerySlider gallery={gallery} />
    <Accordion accordionSection={accordionSection} />
    <ColumnBanner columnBanner={columnBanner} boatTour />
    <TestimonialSlider
      {...testimonials}
    />
  </article>
}

// Export Default SinglePost for front-end
const SingleBoatTour = ({ data, pathContext }) => {
  const { post } = data
  return (
    <SingleBoatTourTemplate
      {...post}
      {...post.frontmatter}
      body={post.html}
    />
  )
}

export default SingleBoatTour

export const pageQuery = graphql`
  ## Query for SingleBoatTour data
  query SingleBoatTour($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        tourType
        title
        featuredImage {
          ...FluidImage
        }
        intro
        contentBox {
          buttonTitle
          buttonUrl
          title
        }
        gallery {
          image {
            ...FluidImage
          }
        }
        accordionSection {
          title
          accordion {
            content
            title
          }
        }
        columnBanner {
          buttonTitle
          buttonUrl
          content
          title
          featuredImage {
            ...FluidImage
          }
        }
        testimonials {
          description
          title
          featuredTestimonials {
            content
            name
            image {
              ...FluidImage
            }
          }
        }
      }
    }
  }
`
