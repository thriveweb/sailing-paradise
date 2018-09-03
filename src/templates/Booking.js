import React from 'react'
import Helmet from 'react-helmet'
import { MapPin, Smartphone, Mail } from 'react-feather'

import PageHeader from '../components/PageHeader'
import IntroText from '../components/IntroText'
import Image from '../components/Image'
import Content from '../components/Content'
import './ContactPage.css'

// Export Template for use in CMS preview
export const BookingPageTemplate = ({
  body,
  title,
  featuredImage,
  intro,
  address,
  phone,
  hours, 
  map,
}) => {

  return <main className="Booking">
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
          {map && 
            <div className='image-container'>
              <Image background src={map} alt='map image' size="cover" />
            </div>
          }
          {body && <Content source={body} />}
        </div>  
      </div>
    </section>
  </main>
}

const BookingPage = ({ data: { page, settings } }) => (
  <BookingPageTemplate {...page.frontmatter} body={page.html} {...settings} />
)

export default ContactPage

export const pageQuery = graphql`
  query BookingPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        template
        featuredImage {
          ...FluidImage
        }
        intro
      }
    }
    settings: settingsYaml {
      address
      phone
      hours
      map
    }
  }
`
