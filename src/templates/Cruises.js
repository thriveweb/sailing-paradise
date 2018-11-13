import React from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
import IntroText from '../components/IntroText'
import PostSection from '../components/PostSection'

// Export Template for use in CMS preview
export const CruisesTemplate = ({
  title,
  featuredImage,
  intro,
  posts,
  meta
}) => {

  return (
    <main className='Blog'>
      <Helmet title={meta && meta.title || `${title} | Sailing in Paradise`}>
        {meta && <meta name="description" content={meta.description} />}
        {meta && <link rel="canonical" href={meta.canonical} />}
      </Helmet>
      <PageHeader
        title={title}
        backgroundImage={featuredImage}
      />
      <IntroText content={intro} center />
      <PostSection posts={posts} boatTours />
    </main>
  )
}

// Export Default Charters for front-end
const Cruises = ({ data }) => (
  <CruisesTemplate
    {...data.page}
    {...data.page.fields}
    {...data.page.frontmatter}
    posts={data.posts.edges.map(post => ({
      ...post.node,
      ...post.node.frontmatter,
      ...post.node.fields
    }))}
  />
)

export default Cruises

export const pageQuery = graphql`
  ## Query for Cruises data
  query Cruises($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        template
        featuredImage {
          ...FluidImage
        }
        intro
        meta {
          description
          title
          canonicalLink
        }
      }
    }
    posts: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "boatTours" } }, frontmatter: { tourType: { eq: "Cruise"} } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
          }
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
