import React from 'react'
import Helmet from 'react-helmet'
import { MapPin, Smartphone, Mail } from 'react-feather'

import PageHeader from '../components/PageHeader'
import FormSimpleAjax from '../components/FormSimpleAjax'
import Content from '../components/Content'
import './ContactPage.css'

// Export Template for use in CMS preview
export const ContactPageTemplate = ({
  body,
  title,
  featuredImage,
  address,
  phone,
  email
}) => (
  <main className="Contact">
    <Helmet>
      <title>{title}</title>
    </Helmet>

    <PageHeader
      title={title}
      backgroundImage={featuredImage}
    />

    <section className="section Contact--Section1">
      <div className="container Contact--Section1--Container">
        <div className="Contact--Details">
          {phone && (
            <a className="Contact--Details--Item" href={`tel:${phone}`}>
              <Smartphone /> {phone}
            </a>
          )}
          {address && (
            <a
              className="Contact--Details--Item"
              href={`https://www.google.com.au/maps/search/${encodeURI(
                address
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin /> {address}
            </a>
          )}
        </div>
        <Content source={body} />
      </div>
    </section>
  </main>
)

const ContactPage = ({ data: { page } }) => (
  <ContactPageTemplate {...page.frontmatter} body={page.html} />
)

export default ContactPage

export const pageQuery = graphql`
  query ContactPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        template
        featuredImage {
          ...FluidImage
        }
        address
        phone
        email
      }
    }
  }
`
