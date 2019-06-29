import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import './PageHeader.css'

const PageHeader = ({
  title,
  backgroundImage,
  large,
  className = ''
}) => {
  if (large) className += ' PageHeader-large'
  return (
    <div className={`PageHeader relative overlay ${className}`}>
      {backgroundImage && (
        <Image background src={`${backgroundImage}-/resize/2000x/`} alt={title} size="cover" />
      )}
      <div className="container relative">
        <h1 className="PageHeader--Title title-gradient">{title}</h1>
      </div>
    </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default PageHeader
