import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import Image from './Image'
import Button from './Button'

import './ServiceColumns.css'

export default ({ services, serviceBanner }) => {
	const { title, subtitle, buttonUrl, buttonTitle, featuredImage } = serviceBanner

	console.log(title)

	if(!services.length) return null

	return <section className='serviceSection relative'>
		<div className='serviceColumns'>
			{services.map(({ serviceContent, image }, index) => {
				const { icon, title, description, buttonUrl } = serviceContent
				return <Fragment key={index}>
					<div className='serviceContent'>
						{icon && <Image src={icon} alt='' />}
						{title && <Link className='fancy-title' to={buttonUrl}>{title}</Link>}
						{description && <p>{description}</p>}
						{buttonUrl && <Button title='Know More' url={buttonUrl} />}
					</div>
					<div className='serviceImage relative'>
						{image && <Image background src={image} alt='' />}
					</div>
				</Fragment>
			})}
		</div>
		<div className='serviceBanner'>
			<div className='serviceBanner-Content'>
				{title && <p>{title}</p>}
				{subtitle && <h3>{subtitle}</h3>}
				{buttonTitle && buttonUrl && <Button title={buttonTitle} url={buttonUrl} white />}
				<Image background src={featuredImage} alt='' />
			</div>
		</div>
	</section>
}
