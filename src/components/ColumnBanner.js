import React from 'react'
import Image from './Image'
import Button from './Button'

import './ColumnBanner.css'

export default ({ columnBanner }) => {

	return <div className='columnsBanner'>
		{columnBanner.map(({ title, buttonTitle, buttonUrl, featuredImage }, index) => {
			return <div className='bannerColumn relative overlay'>
				<Image background src={featuredImage} />
				<div className='container'>
					{title && <h2 className='title-gradient'>{title}</h2>}
					{buttonTitle && buttonUrl && <Button  white title={buttonTitle} url={buttonUrl} />}
				</div>	
			</div>
		})}
	</div>
}