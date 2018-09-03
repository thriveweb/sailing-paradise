import React from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
import IntroText from '../components/IntroText'
import Boats from '../components/Boats'
import SecondaryBanner from '../components/SecondaryBanner'
import ColumnBanner from '../components/ColumnBanner'
import './AboutPage.css'

// Export Template for use in CMS preview
export const BoatsPageTemplate = ({
  body,
  title,
  featuredImage,
  intro,
  secondaryBanner,
  columnBanner,
  boats
}) => 

    <main className='Boats'>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <PageHeader
        title={title}
        backgroundImage={featuredImage}
      />
      <IntroText content={intro} center />
      <Boats boats={boats} />
      <SecondaryBanner {...secondaryBanner} large />
      <ColumnBanner columnBanner={columnBanner} />
    </main>


const BoatsPage = ({ data: { page, columnBanner } }) => (
  <BoatsPageTemplate {...page} {...page.frontmatter} body={page.html} {...columnBanner} />
)

export default BoatsPage

export const pageQuery = graphql`
  query BoatsPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        featuredImage {
          ...FluidImage
        }
        intro
        boats {
          description
          title
          boatFeatures {
            content
          }
          featuredImage {
            ...FluidImage
          }
          gallery {
            image {
              ...FluidImage
            }
          }
          videoSection {
            video
            imageOverlay {
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
      }
    }
    columnBanner: settingsYaml {
      columnBanner {
        buttonTitle
        buttonUrl
        featuredImage
        title
      }
    }
  }
`
