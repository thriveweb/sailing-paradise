import React from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'

// Export Template for use in CMS preview
export const PrivateChartersTemplate = ({
  title,
  featuredImage,
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
    </main>
  )
}

// Export Default Charters for front-end
const ChartPrivateChartersers = ({ data }) => (
  <PrivateChartersTemplate
    {...data.page}
    {...data.page.fields}
    {...data.page.frontmatter}
  />
)

export default PrivateCharters

export const pageQuery = graphql`
  ## Query for Charters data
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
