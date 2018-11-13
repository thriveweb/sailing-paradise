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
  boats,
  meta
}) => {

  return <main className="Boats">
      <Helmet title={meta && meta.title || `${title} | Sailing in Paradise`}>
        {meta && <meta name="description" content={meta.description} />}
        {meta && <link rel="canonical" href={meta.canonical} />}
      </Helmet>
      <PageHeader title={title} backgroundImage={featuredImage} />
      <IntroText content={intro} center />
      <Boats boats={boats} />
      <SecondaryBanner {...secondaryBanner} large />
      <ColumnBanner columnBanner={columnBanner} />
    </main>
}



const BoatsPage = ({ data: { page, globalSections } }) => (
  <BoatsPageTemplate
    {...page}
    {...page.frontmatter}
    body={page.html}
    {...globalSections.frontmatter}
  />
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
        meta {
          description
          title
          canonicalLink
        }
      }
    }
    globalSections: markdownRemark(
      fields: { slug: { eq: "/global-sections/" } }
    ) {
      frontmatter {
        columnBanner {
          buttonTitle
          buttonUrl
          featuredImage {
            ...FluidImage
          }
          title
        }
      }
    }
  }
`
