import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/AboutPage'

const AboutPagePreview = ({ entry, widgetFor }) => (
  <AboutPageTemplate
    {...entry.toJS().data}
  />
)

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
