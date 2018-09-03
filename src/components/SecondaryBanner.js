import React from 'react'
import Image from './Image'
import Button from './Button'

import './SecondaryBanner.css'

export default ({ title, subtitle, featuredImage, buttonTitle, buttonUrl, large, className = '', contentBox }) => {
	if (large) className += ' bannerLarge'
	if (contentBox) className += ' contentBox'

	return <div className={`secondary-banner relative overlay ${className}`}>
			{featuredImage && <Image background src={featuredImage} alt='' />}
			<div className='container'>
				{title && <h2 className='title-gradient'>{title}</h2>}
				{subtitle && <h4>{subtitle}</h4>}
				{buttonTitle && buttonUrl && <Button white title={buttonTitle} url={buttonUrl} />}
			</div>
		</div>
}
