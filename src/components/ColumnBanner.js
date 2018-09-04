import React from 'react'
import Link from 'gatsby-link'

import { ICONButtonArrows } from './Icons'
import Image from './Image'
import Button from './Button'
import Content from './Content'

import './ColumnBanner.css'

export default ({ columnBanner, boatTour, className = '', charterUrl }) => {

	if(!columnBanner) return null

	if(boatTour) className += ' boatTour'

	if(charterUrl) return <div className={`columnsBanner${className}`}>
			{columnBanner.map(({ title, buttonTitle, buttonUrl, featuredImage, content }, index) => {
				return <div className='bannerColumn relative overlay' key={index}>
					<Image background src={featuredImage} alt='' />
					<div className='container'>
						{title && <h2 className='title-gradient'>{title}</h2>}
						{content && <Content src={content} />}

						{buttonTitle && buttonUrl && 
							<Link className='button' to={`/${buttonUrl}${charterUrl && `?charter=${charterUrl}`}`}>
								{buttonTitle}
								<ICONButtonArrows/>
							</Link>
						}
					</div>	
				</div>
			})}
		</div>

	return <div className={`columnsBanner${className}`}>
			{columnBanner.map(({ title, buttonTitle, buttonUrl, featuredImage, content }, index) => {
				return <div className='bannerColumn relative overlay' key={index}>
					<Image background src={featuredImage} alt='' />
					<div className='container'>
						{title && <h2 className='title-gradient'>{title}</h2>}
						{content && <Content src={content} />}
						{buttonTitle && buttonUrl && 
							<Button title={buttonTitle} url={buttonUrl} white />
						}
					</div>	
				</div>
			})}
		</div>
}