import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import _get from 'lodash/get'
import _format from 'date-fns/format'
import Link from 'gatsby-link'

import { ICONQuotes } from '../components/Icons'
import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Video from '../components/Video'
import Image from '../components/Image'
import SocialShare from '../components/SocialShare'
import GallerySlider from '../components/GallerySlider'
import SecondaryBanner from '../components/SecondaryBanner'
import './SingleCaseStudy.css'

export const SingleCaseStudyTemplate = ({
  title,
  name,
  date,
  featuredImage,
  videoSection,
  body,
  excerpt,
  gallery,
  banner,
  secondaryBanner
}) => {
  return (
    <main className="SingleCaseStudy">
      <Helmet>
        <title>{title}</title>
      </Helmet>

      {banner &&
        banner.map(({ frontmatter }, index) => {
          const { title, featuredImage } = frontmatter
          return (
            <PageHeader
              key={index}
              title={title}
              backgroundImage={featuredImage}
            />
          )
        })}

      <div className="container">
        <div className="SingleCaseStudy--Content">
          {name && <h2>{name}</h2>}
          <div className="SinglePost--Meta">
            {title && <p>{title}</p>}
            {date && (
              <Fragment>
                <span>|</span>
                <time
                  className="SinglePost--Meta--Date"
                  itemProp="dateCreated pubdate datePublished"
                  date={date}
                >
                  {_format(date, 'MMMM, YYYY')}
                </time>
              </Fragment>
            )}
          </div>
          <div className="SingleCaseStudy--Body">
            <div className="columnLeft">
              {featuredImage && <Image src={featuredImage} alt={title} />}
              {videoSection && <Video {...videoSection} />}
            </div>
            <div className="columnRight">
              {body && <Content src={body} />}
              {excerpt && (
                <div className="quote">
                  <ICONQuotes />
                  <p>{excerpt}</p>
                </div>
              )}
            </div>
          </div>
          <SocialShare />
        </div>
      </div>
      {gallery && <GallerySlider gallery={gallery} />}
      {secondaryBanner && <SecondaryBanner {...secondaryBanner} />}
    </main>
  )
}

// Export Default SinglePost for front-end
const SingleCaseStudy = ({ data, pathContext }) => {
  const { post, archiveBanner, globalVideo } = data
  const banner = archiveBanner
    ? archiveBanner.edges.map(edge => ({ ...edge.node }))
    : []
  return (
    <SingleCaseStudyTemplate
      {...post}
      {...post.frontmatter}
      {...globalVideo}
      banner={banner}
      body={post.html}
    />
  )
}

export default SingleCaseStudy

export const pageQuery = graphql`
  ## Query for SingleCaseStudy data
  query SingleCaseStudy($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        name
        date
        excerpt
        featuredImage {
          ...FluidImage
        }
        videoSection {
          video
          imageOverlay
        }
        gallery {
          image {
            ...FluidImage
          }
        }
        secondaryBanner {
          buttonTitle
          buttonUrl
          title
          subtitle
          featuredImage {
            ...FluidImage
          }
        }
      }
    }
    archiveBanner: allMarkdownRemark(
      filter: { frontmatter: { title: { eq: "Case Studies" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            featuredImage {
              ...FluidImage
            }
          }
        }
      }
    }
  }
`
