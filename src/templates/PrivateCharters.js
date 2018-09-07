import React from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
import IntroText from '../components/IntroText'
import SortArray from '../components/SortArray'
import PostSection from '../components/PostSection'

// Export Template for use in CMS preview
export const PrivateChartersTemplate = ({
  title,
  featuredImage,
  intro,
  posts,
  chartersListing
}) => {

  return (
    <main className='Blog'>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <PageHeader
        title={title}
        backgroundImage={featuredImage}
      />
      <IntroText content={intro} center />
      {/*<SortArray order={chartersListing} items={posts} />*/}
      {/*<PostSection posts={posts} boatTours />*/}
    </main>
  )
}

// Export Default Charters for front-end
const PrivateCharters = ({ data }) => (
  <PrivateChartersTemplate
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
        chartersListing {
          tours
        }
      }
    }
    posts: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "boatTours" } }, frontmatter: { tourType: { eq: "Private Charter"} } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            icon {
              ...FluidImage
            }
            featuredImage {
              ...FluidImage
            }
          }
        }
      }
    }
  }
`
