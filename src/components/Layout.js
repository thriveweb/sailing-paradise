import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import _get from 'lodash/get'
import Meta from './Meta'
import Nav from './Nav'
import Footer from './Footer'

import 'modern-normalize/modern-normalize.css'
import '../layouts/globalStyles.css'

export default ({ children, meta, title, location }) => {
  return (
    <StaticQuery
      query={graphql`
        query IndexLayoutQuery {
          settingsYaml {
            siteTitle
            siteDescription
            siteUrl
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
                  icon
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
                tripAdvisor
              }
            }
          }
          allPosts: allMarkdownRemark(
            filter: { fields: { contentType: { eq: "postCategories" } } }
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
      `}

      render={data => {
        const { settingsYaml, contactInfo, globalSections, navItems, charters, cruises } = data || {}
        const siteTitle = _get(settingsYaml, 'siteTitle') || ''

        const privateCharters = charters
          ? charters.edges.map(edge => ({ ...edge.node }))
          : []
        const cruiseTours = cruises
          ? cruises.edges.map(edge => ({ ...edge.node }))
          : []

        return (
          <Fragment>
            <Helmet
              defaultTitle={siteTitle}
              titleTemplate={`%s | ${siteTitle}`}
            >
              {title}
              <link href="https://ucarecdn.com" rel="preconnect" crossorigin />
              <link rel="dns-prefetch" href="https://ucarecdn.com" />
              {/* Add font link tags here */}
            </Helmet>

            <Meta
              {...meta}
              {...data.settingsYaml}
            />

            <Nav
              charters={privateCharters}
              cruises={cruiseTours}
              settings={globalSections}
              location={location}
              navList={navItems}
              bookingPopup={globalSections}
            />

            <Fragment>{children}</Fragment>

            <Footer
              contactInfo={contactInfo}
              globalSections={globalSections}
              navList={navItems}
            />
          </Fragment>
        )
      }}
    />
  )
}
