import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/AboutPage'

const AboutPagePreview = ({ entry, widgetFor }) => <AboutPageTemplate {...entry.toJS().data} />

export default AboutPagePreview
