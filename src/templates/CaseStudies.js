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
  <CaseStudiesTemplate {...page} {...page.frontmatter} body={page.html} />
)

export default CaseStudies

export const pageQuery = graphql`
  query CaseStudies($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`


// import React from 'react'
// import Helmet from 'react-helmet'

// import PageHeader from '../components/PageHeader'
// import PostSection from '../components/PostSection'
// import PostCategoriesNav from '../components/PostCategoriesNav'

// // Export Template for use in CMS preview
// export const CaseStudiesTemplate = ({
//   title,
//   subtitle,
//   featuredImage,
//   posts = [],
//   contentType
// }) => {

//   return (
//     <main className="Blog CaseStudies">
//       <Helmet>
//         <title>{title}</title>
//       </Helmet>

//       <PageHeader
//         title={title}
//         backgroundImage={featuredImage}
//       />

//       {!!posts.length && (
//         <section className="section">
//           {subtitle && <h2 className='fancy-title'>{subtitle}</h2>}
//           <div className="container">
//             <PostSection posts={posts} />
//           </div>
//         </section>
//       )}
//     </main>
//   )
// }

// // Export Default CaseStudies for front-end
// const CaseStudies = ({ data }) => (
//   <CaseStudiesTemplate
//     {...data.page}
//     {...data.page.fields}
//     {...data.page.frontmatter}
//     posts={data.posts.edges.map(post => ({
//       ...post.node,
//       ...post.node.frontmatter,
//       ...post.node.fields
//     }))}
//   />
// )

// export default CaseStudiesTemplate

// export const pageQuery = graphql`
//   ## Query for CaseStudies data
//   ## Use GraphiQL interface (http://localhost:8000/___graphql)
//   ## $id is processed via gatsby-node.js
//   ## query name must be unique to this file
//   query CaseStudies($id: String!) {
//     page: markdownRemark(id: { eq: $id }) {
//       fields {
//         contentType
//       }
//       frontmatter {
//         template
//         title
//         subtitle
//         featuredImage {
//           ...FluidImage
//         } 
//         columnBanner {
//           buttonTitle
//           buttonUrl
//           title
//           featuredImage {
//             absolutePath
//           }
//           }
//       }
//     }

//     posts: allMarkdownRemark(
//       filter: { fields: { contentType: { eq: "posts" } } }
//       sort: { order: DESC, fields: [frontmatter___date] }
//     ) {
//       edges {
//         node {
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//             date
//             featuredImage {
//               ...SmallImage
//             }
//           }
//         }
//       }
//     }
//   }
// `
