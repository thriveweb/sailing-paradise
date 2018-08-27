import React from 'react'
import Helmet from 'react-helmet'
import { MapPin, Smartphone, Mail } from 'react-feather'

import PageHeader from '../components/PageHeader'
import IntroText from '../components/IntroText'
import Content from '../components/Content'
import './ContactPage.css'

// Export Template for use in CMS preview
export const ContactPageTemplate = ({
  body,
  title,
  featuredImage,
  intro,
  address,
  phone,
  hours, 
  map,
  secondaryBanner
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
        <IntroText content={intro} center />
        <div className="Contact--Details">
          {phone && (
            <Content className="Contact--Details--Item" src={phone} />
          )}
          {address && (
            <Content className="Contact--Details--Item" src={address} />
          )}
          {hours && (
            <Content className="Contact--Details--Item" src={hours} />
          )}
        </div>
        <div className='contact-body'>
          {map && <img src={map.absolutePath} alt='map image' />}
          {body && <Content source={body} />}
        </div>  
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
        intro
        address
        phone
        hours
        map {
          absolutePath
        }
        secondaryBanner {
          buttonTitle
          buttonUrl
          subtitle
          title
          featuredImage {
            absolutePath
          }
        }
      }
    }
  }
`
