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
    const { charters, cruises, settings } = data
    const privateCharters = charters
      ? charters.edges.map(edge => ({ ...edge.node }))
      : []
    const cruiseTours = cruises
      ? cruises.edges.map(edge => ({ ...edge.node }))
      : []
    const { siteTitle, siteUrl, headerScripts, bookingPopup } = settings || {}

    const navItems = _get(settings, 'navItems') || []

    return (
      <Fragment>
        <Helmet defaultTitle={siteTitle} titleTemplate={`%s | ${siteTitle}`}>
          {/* Add font link tags here */}
        </Helmet>

        <Meta headerScripts={headerScripts} />

        <Nav
          charters={privateCharters}
          cruises={cruiseTours}
          bookingPopup={bookingPopup}
          location={location}
          handleBlur={this.handleBlur}
          blurActive={blurActive}
          navItems={navItems}
        />

        <div style={{ filter: blurActive ? 'blur(10px)' : 'none' }}>
          {children()}
        </div>

        <Footer
          settings={settings}
          charters={privateCharters}
          cruises={cruiseTours}
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
      socialMedia {
        facebook
        instagram
        googlePlus
      }
      footerContent
      bookingPopup {
        title
        contentBoxes {
          buttonTitle
          buttonUrl
          icon
          title
        }
      }
      navItems {
        slug
        title
        subNavItems {
          slug
          title
        }
      }
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
  }
`
