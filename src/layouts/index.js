import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

import 'modern-normalize/modern-normalize.css'

import './globalStyles.css'
import Meta from '../components/Meta'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import GithubCorner from '../components/GithubCorner'

export default ({ children, data }) => {
  const { charters, cruises } = data
  const privateCharters = charters ? charters.edges.map(edge => ({ ...edge.node })) : []
  const cruiseTours = cruises ? cruises.edges.map(edge => ({ ...edge.node })) : []

  const { siteTitle, siteUrl, headerScripts } = data.settingsYaml || {}

  return (
    <Fragment>
      <Helmet defaultTitle={siteTitle} titleTemplate={`%s | ${siteTitle}`}>
        {/* Add font link tags here */}
      </Helmet>

      <Meta
        headerScripts={headerScripts}
      />

      <GithubCorner url="https://github.com/thriveweb/whitesmoke" />

      <Nav charters={privateCharters} cruises={cruiseTours} />

      <Fragment>{children()}</Fragment>

      <Footer />
    </Fragment>
  )
}

export const query = graphql`
  query IndexLayoutQuery {
    settingsYaml {
      siteTitle
      siteDescription
      headerScripts
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
