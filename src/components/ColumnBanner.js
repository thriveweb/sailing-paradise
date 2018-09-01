import React from 'react'

import Image from './Image'
import Button from './Button'
import Content from './Content'

import './ColumnBanner.css'

export default ({ columnBanner, boatTour, className = '' }) => {

	if(boatTour) className += ' boatTour'

	return <div className={`columnsBanner${className}`}>
		{columnBanner.map(({ title, buttonTitle, buttonUrl, featuredImage, content }, index) => {
			return <div className='bannerColumn relative overlay'>
				<Image background src={featuredImage} />
				<div className='container'>
					{title && <h2 className='title-gradient'>{title}</h2>}
					{content && <Content src={content} />}
					{buttonTitle && buttonUrl && <Button  white title={buttonTitle} url={buttonUrl} />}
				</div>	
			</div>
		})}
	</div>
}