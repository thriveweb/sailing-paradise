import React from 'react'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'

// Export Template for use in CMS preview
export const HomePageTemplate = ({ title, featuredImage, body }) => (
  <main className="Home">
    <PageHeader
      large
      title={title}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container">
        <Content source={body} />
      </div>
    </section>
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        buttonTitle
        buttonUrl
        featuredSlider {
          description
          title
          buttonUrl
        }
        featuredBanner {
          title
          buttonTitle
          buttonUrl
          image {
            id
          }
        }
        services {
          serviceContent {
            icon {
              id
            }
            description
            title
            buttonUrl
          }
          image {
            id
          }
        }
        serviceBanner {
          subtitle
          title
          buttonTitle
          buttonUrl
          featuredImage {
            id
          }
        }
        secondaryBanner {
          buttonTitle
          buttonUrl
          title
          subtitle
          featuredImage {
            id
          }
        }
        aboutSection {
          content
          title
          subtitle
          featuredImage {
            id
          }
          buttons {
            buttonTitle
            buttonUrl
          }
        }
        highlights {
          title
          icon {
            id
          }
        }
        Testimonials {
          description
          title
          buttonTitle
          buttonUrl
          featuredTestimonials {
            content
            name
            image {
              id
            }
          }
        }
      }
    }
  }
`
