import React from 'react'
import Helmet from 'react-helmet'
import { MapPin, Smartphone, Mail } from 'react-feather'

import PageHeader from '../components/PageHeader'
import IntroText from '../components/IntroText'
import Image from '../components/Image'
import Content from '../components/Content'
import SecondaryBanner from '../components/SecondaryBanner'
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
}) => {

  return <main className="Contact">
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
    <SecondaryBanner {...secondaryBanner} />
  </main>
}

const ContactPage = ({ data: { page, settings } }) => (
  <ContactPageTemplate {...page.frontmatter} body={page.html} {...settings} />
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
        secondaryBanner {
          buttonTitle
          buttonUrl
          subtitle
          title
          featuredImage {
            ...FluidImage
          }
        }
      }
    }
    settings: settingsYaml {
        address
        phone
        hours
        map {
          ...FluidImage
        }
    }
  }
`
