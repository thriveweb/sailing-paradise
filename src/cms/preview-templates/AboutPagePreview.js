import React from 'react'
import { AboutPage } from '../../templates/AboutPage'

const AboutPagePreview = ({ entry, widgetFor }) => <AboutPage {...entry.toJS().data} />

export default AboutPagePreview
