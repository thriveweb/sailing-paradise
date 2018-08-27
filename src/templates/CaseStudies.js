import React from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
import Image from '../components/Image'
import Content from '../components/Content.js'
import PostSection from '../components/PostSection.js'


// Export Template for use in CMS preview
export const CaseStudiesTemplate = ({
  title,
  subtitle,
  featuredImage,
  posts = []
}) => {

  return <main className="Blog CaseStudies">
    <Helmet>
      <title>{title}</title>
    </Helmet>

    <PageHeader
      title={title}
      backgroundImage={featuredImage}
    />

    {!!posts.length && (
      <section className="section">
        <div className="container">
          {subtitle && 
            <div className='intro-section fancy-title alignCenter'>
              <h2>{subtitle}</h2>
            </div>
          }
          <PostSection posts={posts} />
        </div>
      </section>
    )}
  </main>
}

const CaseStudies = ({ data }) => (
  <CaseStudiesTemplate 
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

export default CaseStudies

export const pageQuery = graphql`
  query CaseStudies($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        featuredImage {
          ...FluidImage
        }
      }
    }
    posts: allMarkdownRemark( filter: { fields: { contentType: { eq: "caseStudies" } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            name
            featuredImage {
              ...FluidImage
            }
          }
        }
      }
    }
  }
`

