import React from 'react'
import Helmet from 'react-helmet'
import { MapPin, Smartphone, Mail } from 'react-feather'

import PageHeader from '../components/PageHeader'
import IntroText from '../components/IntroText'
import Image from '../components/Image'
import Content from '../components/Content'
import BookingForm from '../components/BookingForm'

import './Booking.css'

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
  location
}) => {
  return (
    <main className="Booking">
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <PageHeader title={title} backgroundImage={featuredImage} />

      <section className="section Contact--Sections">
        <div className="container large">
          <div className="Contact--Section1">
            <IntroText content={intro} />
            <div className="Contact--Details">
              {address && (
                <div className="Contact--Details--Item">
                  <Content src={address} />
                  {map && (
                    <div className="image-container">
                      <Image
                        background
                        src={map}
                        alt="map image"
                        size="cover"
                      />
                    </div>
                  )}
                </div>
              )}
              {phone && (
                <Content className="Contact--Details--Item" src={phone} />
              )}
              {hours && (
                <Content className="Contact--Details--Item" src={hours} />
              )}
            </div>
          </div>
          <div className="Contact--Section2">
            <BookingForm location={location} />
          </div>
        </div>
      </section>
    </main>
  )
}

const BookingPage = props => {
  const {
    data: { page },
    location
  } = props
  return (
    <BookingPageTemplate
      {...page.frontmatter}
      body={page.html}
      location={location}
    />
  )
}

export default BookingPage

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
    globalSections: markdownRemark {
      frontmatter {
        phone
        address
        hours
        map {
          ...FluidImage
        }
      }
    }
  }
`
