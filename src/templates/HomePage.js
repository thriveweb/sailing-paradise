import React from 'react'

import Video from '../components/Video'
import ServiceColumns from '../components/ServiceColumns'


// Export Template for use in CMS preview
export const HomePageTemplate = ({ title, featuredVideo, body, buttonTitle, buttonUrl, featuredSlider, featuredBanner, services, serviceBanner }) => (

  <main className="Home">
    <Video 
      video={featuredVideo} 
      homeVideo title={title} 
      buttonTitle={buttonTitle} 
      buttonUrl={buttonUrl} 
      featuredSlider={featuredSlider} 
      featuredBanner={featuredBanner} 
    />
    <ServiceColumns 
      services={services} 
      serviceBanner={serviceBanner}
    />

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
        featuredVideo
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
            ...FluidImage
          }
        }
        services {
          serviceContent {
            icon {
              ...FluidImage
            }
            description
            title
            buttonUrl
          }
          image {
            ...FluidImage
          }
        }
        serviceBanner {
          subtitle
          title
          buttonTitle
          buttonUrl
          featuredImage {
            ...FluidImage
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
        aboutSection {
          content
          title
          subtitle
          featuredImage {
            ...FluidImage
          }
          buttons {
            buttonTitle
            buttonUrl
          }
        }
        highlights {
          title
          icon {
            ...FluidImage
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
              ...FluidImage
            }
          }
        }
      }
    }
  }
`
