import React, { Fragment, Component } from 'react'
import Helmet from 'react-helmet'
import _get from 'lodash/get'
import 'modern-normalize/modern-normalize.css'

import './globalStyles.css'
import Meta from '../components/Meta'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

class IndexLayout extends Component {
  state = {}

  handleBlur = () => {
    this.setState(
      {
        blurActive: !this.state.blurActive
      },
      () => {
        document.body.style.overflow =
          this.state.blurActive === true ? 'hidden' : 'auto'
        document.documentElement.style.overflow =
          this.state.blurActive === true ? 'hidden' : 'auto'
      }
    )
  }

  render() {
    const { children, data, location } = this.props
    const { blurActive } = this.state
    const {
      charters,
      cruises,
      settings,
      globalSections,
      navItems,
      contactInfo
    } = data
    const privateCharters = charters
      ? charters.edges.map(edge => ({ ...edge.node }))
      : []
    const cruiseTours = cruises
      ? cruises.edges.map(edge => ({ ...edge.node }))
      : []
    const { siteTitle, siteUrl, headerScripts } = settings || {}

    console.log(navItems)

    return (
      <Fragment>
        <Helmet defaultTitle={siteTitle} titleTemplate={`%s | ${siteTitle}`}>
          {/* Add font link tags here */}
        </Helmet>

        <Meta headerScripts={headerScripts} />

        <Nav
          charters={privateCharters}
          cruises={cruiseTours}
          settings={globalSections}
          location={location}
          handleBlur={this.handleBlur}
          blurActive={blurActive}
          navList={navItems}
          bookingPopup={globalSections}
        />

        <div style={{ filter: blurActive ? 'blur(10px)' : 'none' }}>
          {children()}
        </div>

        <Footer
          navList={navItems}
          globalSections={globalSections}
          contactInfo={contactInfo}
        />
      </Fragment>
    )
  }
}

export default IndexLayout

export const query = graphql`
  query IndexLayoutQuery {
    settings: settingsYaml {
      siteTitle
      siteDescription
      headerScripts
    }
    charters: allMarkdownRemark(
      filter: {
        fields: { contentType: { eq: "boatTours" } }
        frontmatter: { tourType: { eq: "Private Charter" } }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
    cruises: allMarkdownRemark(
      filter: {
        fields: { contentType: { eq: "boatTours" } }
        frontmatter: { tourType: { eq: "Cruise" } }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
    navItems: markdownRemark(fields: { slug: { eq: "/nav-items/" } }) {
      frontmatter {
        navItems {
          slug
          title
          subNavItems {
            slug
            title
          }
        }
      }
    }
    globalSections: markdownRemark(
      fields: { slug: { eq: "/global-sections/" } }
    ) {
      frontmatter {
        bookingPopup {
          title
          contentBoxes {
            buttonTitle
            buttonUrl
            icon {
              ...FluidImage
            }
            title
          }
        }
        footerContent
      }
    }
    contactInfo: markdownRemark(fields: { slug: { eq: "/general-contact/" } }) {
      frontmatter {
        socialMedia {
          facebook
          instagram
          googlePlus
        }
      }
    }
  }
`
