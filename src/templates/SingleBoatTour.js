import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import _get from 'lodash/get'
import _format from 'date-fns/format'
import Link from 'gatsby-link'

export const SingleBoatTourTemplate = ({
  body,
}) => {

  return <article className="SingleCaseStudy">
      <p>Meow</p>
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
        intro
        contentBox {
          buttonTitle
          buttonUrl
          title
        }
        gallery {
          image {
            id
          }
        }
        contentColumn
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
            id
          }
        }
        testimonials {
          description
          title
          featuredTestimonials {
            content
            name
            image {
              id
            }
          }
        }
      }
    }
  }
`
