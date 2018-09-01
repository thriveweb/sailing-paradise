import React from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
import IntroText from '../components/IntroText'

// Export Template for use in CMS preview
export const PrivateChartersTemplate = ({
  title,
  featuredImage,
  intro
}) => {

  return (
    <main className="Blog">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <PageHeader
        title={title}
        backgroundImage={featuredImage}
      />
      <IntroText content={intro} center />
    </main>
  )
}

// Export Default Charters for front-end
const PrivateCharters = ({ data }) => (
  <PrivateChartersTemplate
    {...data.page}
    {...data.page.fields}
    {...data.page.frontmatter}
  />
)

export default PrivateCharters

export const pageQuery = graphql`
  ## Query for PrivateCharters data
  query PrivateCharters($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        template
        featuredImage {
          ...FluidImage
        }
        intro
      }
    }
  }
`
