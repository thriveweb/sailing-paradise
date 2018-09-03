import React from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
import IntroText from '../components/IntroText'
import SecondaryBanner from '../components/SecondaryBanner'
import ColumnBanner from '../components/ColumnBanner'
import './AboutPage.css'

// Export Template for use in CMS preview
export const BoatsPageTemplate = ({
  body,
}) => 

    <main className="About">
      <p>hi</p>
    </main>


const BoatsPage = ({ data: { page } }) => (
  <BoatsPageTemplate {...page} {...page.frontmatter} body={page.html} />
)

export default BoatsPage

export const pageQuery = graphql`
  query BoatsPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
  }
`
