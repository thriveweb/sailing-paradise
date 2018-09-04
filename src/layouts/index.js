import React, { Fragment, Component } from 'react'
import Helmet from 'react-helmet'

import 'modern-normalize/modern-normalize.css'

import './globalStyles.css'
import Meta from '../components/Meta'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import GithubCorner from '../components/GithubCorner'

class IndexLayout extends Component {
  state = {}

  handleBlur = () => {
    this.setState({
      blurActive: !this.state.blurActive
    }, () => {
      document.body.style.overflow = this.state.blurActive === true ? 'hidden' : 'auto'
      document.documentElement.style.overflow = this.state.blurActive === true ? 'hidden' : 'auto'
    })
  }

  render() {
      const { children, data, location } = this.props
      const { blurActive } = this.state
      const { charters, cruises } = data
      const privateCharters = charters ? charters.edges.map(edge => ({ ...edge.node })) : []
      const cruiseTours = cruises ? cruises.edges.map(edge => ({ ...edge.node })) : []

      const { siteTitle, siteUrl, headerScripts, bookingPopup } = data.settingsYaml || {}

      console.log(data.settingsYaml)

    return (
      <Fragment>
        <Helmet defaultTitle={siteTitle} titleTemplate={`%s | ${siteTitle}`}>
          {/* Add font link tags here */}
        </Helmet>

        <Meta
          headerScripts={headerScripts}
        />

        <GithubCorner url="https://github.com/thriveweb/whitesmoke" />

        <Nav 
          charters={privateCharters} 
          cruises={cruiseTours} 
          bookingPopup={bookingPopup}
          location={location}
          handleBlur={this.handleBlur}
          blurActive={blurActive}
        />

        <div style={{filter: blurActive ? 'blur(10px)' : 'none'}}>
          {children()}
        </div>

        <Footer 
          {...data.settingsYaml}
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
    settingsYaml {
      siteTitle
      siteDescription
      headerScripts
      bookingPopup {
        title
        contentBoxes {
          buttonTitle
          buttonUrl
          icon
          title
        }
      }
    }
    charters: allMarkdownRemark(
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
          }
        }
      }
    }
    cruises: allMarkdownRemark(
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
          }
        }
      }
    }
  }
`
