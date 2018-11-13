import React from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'

// Export Template for use in CMS preview
export const DefaultPageTemplate = ({ title, featuredImage, body, meta }) => (
  <main className="DefaultPage">
    <Helmet title={meta && meta.title || `${title} | Sailing in Paradise`}>
      {meta && <meta name="description" content={meta.description} />}
      {meta && <link rel="canonical" href={meta.canonical} />}
    </Helmet>

    <PageHeader title={title} backgroundImage={featuredImage} />

    <section className="section">
      <div className="container">
        <Content src={body} />
      </div>
    </section>
  </main>
)

const DefaultPage = ({ data: { page } }) => (
  <DefaultPageTemplate {...page.frontmatter} body={page.html} />
)
export default DefaultPage

export const pageQuery = graphql`
  query DefaultPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        featuredImage {
          ...FluidImage
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
