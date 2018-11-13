import React from 'react'
import Helmet from 'react-helmet'

import Video from '../components/Video'
import ServiceColumns from '../components/ServiceColumns'
import SecondaryBanner from '../components/SecondaryBanner'
import HomeAboutBanner from '../components/HomeAboutBanner'
import HighlightChart from '../components/HighlightChart'
import TestimonialSlider from '../components/TestimonialSlider'
import FeaturedPosts from '../components/FeaturedPosts'
import InstagramFeed from '../components/InstagramFeed'
import SubscribeForm from '../components/SubscribeForm'

// Export Template for use in CMS preview
export const HomePageTemplate = ({
  title,
  featuredVideo,
  body,
  buttonTitle,
  buttonUrl,
  featuredSlider,
  featuredBanner,
  services,
  serviceBanner,
  secondaryBanner,
  aboutSection,
  highlightsIntro,
  highlights,
  Testimonials,
  latestNews,
  posts,
  socialMedia,
  meta
}) => {
  return (
    <main className="Home">
      <Helmet title={meta && meta.title || `${title} | Sailing in Paradise`}>
        {meta && <meta name="description" content={meta.description} />}
        {meta && <link rel="canonical" href={meta.canonical} />}
      </Helmet>
      <Video
        video={featuredVideo}
        homeVideo title={title}
        featuredSlider={featuredSlider}
        featuredBanner={featuredBanner}
        socialMedia={socialMedia}
      />
      <ServiceColumns services={services} serviceBanner={serviceBanner} />
      <SecondaryBanner {...secondaryBanner} contentBox />
      <HomeAboutBanner {...aboutSection} />
      <HighlightChart
        highlights={highlights}
        highlightsIntro={highlightsIntro}
      />
      <TestimonialSlider {...Testimonials} />
      <FeaturedPosts latestNews={latestNews} posts={posts} />
      <InstagramFeed />
      <SubscribeForm />
    </main>
  )
}

// Export Default HomePage for front-end
const HomePage = ({ data: { page, posts, globalSections } }) => (
  <HomePageTemplate
    {...page}
    {...page.frontmatter}
    {...globalSections}
    body={page.html}
    posts={posts.edges.map(post => ({
      ...post.node,
      ...post.node.frontmatter,
      ...post.node.fields
    }))}
  />
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
        highlightsIntro
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
        latestNews
        meta {
          description
          title
          canonicalLink
        }
      }
    }
    posts: allMarkdownRemark(
      limit: 3
      filter: { fields: { contentType: { eq: "posts" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            excerpt
            featuredImage {
              ...FluidImage
            }
          }
        }
      }
    }
    globalSections: markdownRemark {
      frontmatter {
        socialMedia {
          facebook
          googlePlus
          instagram
        }
      }
    }
  }
`
