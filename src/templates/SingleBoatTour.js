import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import _get from 'lodash/get'
import _format from 'date-fns/format'
import Link from 'gatsby-link'

import PageHeader from '../components/PageHeader'
import IntroText from '../components/IntroText'
import ContentBox from '../components/ContentBox'
import BookingIframe from '../components/BookingIframe'
import GallerySlider from '../components/GallerySlider'
import Video from '../components/Video'
import Accordion from '../components/Accordion'
import ColumnBanner from '../components/ColumnBanner'
import FeaturedTestimonial from '../components/FeaturedTestimonial'

import './SingleBoatTour.css'

export const SingleBoatTourTemplate = ({
  body,
  tourType,
  title,
  featuredImage,
  intro,
  contentBox,
  bookingIframe,
  gallery,
  contentColumnTitle,
  contentColumn,
  accordionSection,
  columnBanner,
  testimonials,
  videoSection,
  slug,
  post,
  meta
}) => {
  const charterUrl = slug
    ? slug.replace('/boat-tours/', '').replace('/', '')
    : ''

  return (
    <main className="SingleBoatTour">
      <Helmet title={meta && meta.title || `${title} | Sailing in Paradise`}>
        {meta && <meta name="description" content={meta.description} />}
        {meta && <link rel="canonical" href={meta.canonical} />}
      </Helmet>
      <PageHeader title={title} backgroundImage={featuredImage} />
      <div className="BoatTourIntro">
        <div className="container">
          {intro && <IntroText content={intro} />}
          {bookingIframe ? (
            <BookingIframe bookingIframe={bookingIframe} />
          ) : (
            <ContentBox {...contentBox} />
          )}
        </div>
      </div>
      {gallery && <GallerySlider gallery={gallery} />}
      {videoSection && <Video {...videoSection} />}
      {contentColumn && (
        <IntroText content={contentColumn} title={contentColumnTitle} />
      )}
      <Accordion accordionSection={accordionSection} />
      {columnBanner && (
        <ColumnBanner
          columnBanner={columnBanner}
          boatTour
          charterUrl={charterUrl}
          bookingIframe={bookingIframe}
        />
      )}
      {testimonials && <FeaturedTestimonial {...testimonials} />}
    </main>
  )
}

// Export Default SinglePost for front-end
const SingleBoatTour = ({ data, pathContext }) => {
  const { post } = data
  return (
    <SingleBoatTourTemplate
      {...post}
      {...post.frontmatter}
      {...post.fields}
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
      fields {
        slug
      }
      frontmatter {
        tourType
        slug
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
        bookingIframe
        gallery {
          image {
            ...FluidImage
          }
        }
        videoSection {
          video
          title
          imageOverlay {
            ...FluidImage
          }
        }
        contentColumnTitle
        contentColumn
        accordionSection {
          sectionTitle
          accordion {
            dropdownContent
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
          featuredTestimonial {
            content
            name
            image {
              ...FluidImage
            }
          }
        }
        meta {
          description
          title
          canonicalLink
        }
      }
    }
  }
`
