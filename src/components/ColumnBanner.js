import React from 'react'
import { Link } from 'gatsby'

import { ICONButtonArrows } from './Icons'
import Image from './Image'
import Button from './Button'
import Content from './Content'
import BookingIframe from './BookingIframe'

import './ColumnBanner.css'

export default ({ columnBanner, boatTour, className = '', charterUrl, bookingIframe }) => {

	if(!columnBanner) return null

	if(boatTour) className += ' boatTour'

	if(bookingIframe) return <div className={`bookingIframe columnsBanner${className}`}>
			{columnBanner.map(({ title, buttonTitle, buttonUrl, featuredImage, content }, index) => {
				if(!title && !content) return <div className='bannerColumn relative overlay' key={index}>
					{featuredImage &&
						<div
							style={{
								backgroundImage: `url(${`${featuredImage}-/resize/100x/`})`,
								backgroundSize: 'cover'
							}}
							data-src={`${featuredImage}-/resize/1000/`}
							className='BackgroundImage absolute lazy'
						>
						</div>
					}
					<BookingIframe bookingIframe={bookingIframe} />
				</div>

				return <div className='bannerColumn relative overlay' key={index}>
					{featuredImage &&
						<div
							style={{
								backgroundImage: `url(${`${featuredImage}-/resize/100x/`})`,
								backgroundSize: 'cover'
							}}
							data-src={`${featuredImage}-/resize/1000/`}
							className='BackgroundImage absolute lazy'
						>
						</div>
					}
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

	if(charterUrl) return <div className={`columnsBanner${className}`}>
			{columnBanner.map(({ title, buttonTitle, buttonUrl, featuredImage, content }, index) => {
				return <div className='bannerColumn relative overlay' key={index}>
					{featuredImage &&
						<div
							style={{
								backgroundImage: `url(${`${featuredImage}-/resize/100x/`})`,
								backgroundSize: 'cover'
							}}
							data-src={`${featuredImage}-/resize/1000/`}
							className='BackgroundImage absolute lazy'
						>
						</div>
					}
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
					{featuredImage &&
						<div
							style={{
								backgroundImage: `url(${`${featuredImage}-/resize/100x/`})`,
								backgroundSize: 'cover'
							}}
							data-src={`${featuredImage}-/resize/1000/`}
							className='BackgroundImage absolute lazy'
						>
						</div>
					}
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
