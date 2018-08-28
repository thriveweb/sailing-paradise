import React from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
import IntroText from '../components/IntroText'
import GallerySlider from '../components/GallerySlider'
import CaptainListing from '../components/CaptainListing'
import CrewGallery from '../components/CrewGallery'
import SecondaryBanner from '../components/SecondaryBanner'
import ColumnBanner from '../components/ColumnBanner'
import Video from '../components/Video'
import Image from '../components/Image'
import Content from '../components/Content.js'
import './AboutPage.css'

// Export Template for use in CMS preview
export const AboutPageTemplate = ({
  title,
  intro,
  gallery,
  featuredImage,
  captainSection,
  crewSection,
  secondaryBanner,
  columnBanner,
  videoSection,
  body,
}) => 

    <main className="About">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <PageHeader
        title={title}
        backgroundImage={featuredImage}
      />
      <IntroText content={intro} center />
      <GallerySlider gallery={gallery} />
      <CaptainListing {...captainSection} />
      <CrewGallery {...crewSection} />
      <SecondaryBanner {...secondaryBanner} large />
      <Video {...videoSection} videoOverlay />
      <ColumnBanner columnBanner={columnBanner} />
    </main>


const AboutPage = ({ data: { page, videoSection } }) => (
  <AboutPageTemplate {...page} {...page.frontmatter} body={page.html} {...videoSection} />
)

export default AboutPage

export const pageQuery = graphql`
  query AboutPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        featuredImage {
          ...FluidImage
        }
        intro
        gallery {
          image {
            ...FluidImage
          }
        }
        captainSection {
          captainIntro
          captain {
            description
            name
            title
            image {
              ...FluidImage
            }
            socialMedia {
              instagram
              twitter
            }
          }
        }
        crewSection {
          crewIntro
          crew {
            name
            title
            image {
              ...FluidImage
            }
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
        columnBanner {
          buttonTitle
          buttonUrl
          title
          featuredImage {
            ...FluidImage
          }
        }
      }
    }
    videoSection: settingsYaml {
      videoSection {
        title
          video
      }
    }
  }
`
