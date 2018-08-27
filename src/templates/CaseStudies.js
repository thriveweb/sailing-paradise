import React from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
import Image from '../components/Image'
import Content from '../components/Content.js'
import './AboutPage.css'

// Export Template for use in CMS preview
export const CaseStudiesTemplate = ({
  title,
}) => (
  <main className="About">
    <h1>{title}</h1>
  </main>
)

const CaseStudies = ({ data: { page } }) => (
  <CaseStudiesTemplate  body={page.html} />
)

export default CaseStudies

export const pageQuery = graphql`
  query CaseStudies($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
        featuredImage {
          ...FluidImage
        }
      }
    }
  }
`

