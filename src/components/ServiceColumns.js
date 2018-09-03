import React, { Fragment } from 'react'

import Image from './Image'
import Button from './Button'

import './ServiceColumns.css'

export default ({ services, serviceBanner }) => {
	const { title, subtitle, buttonUrl, buttonTitle, featuredImage } = serviceBanner
	
	if(!services) return null

	return <section className='serviceSection relative'>
		<div className='serviceColumns'>
			{services.map(({ serviceContent, image }, index) => {
				const { icon, title, description, buttonUrl } = serviceContent
				return <Fragment key={index}>
					<div className='serviceContent fancy-title'>
						{icon && <Image src={icon} alt='' />}
						{title && <h4>{title}</h4>}
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
			<Image background src={featuredImage} alt='' />
			<div className='serviceBanner-Content'>
				{title && <p>{title}</p>}
				{subtitle && <h3>{subtitle}</h3>}
				{buttonTitle && buttonUrl && <Button title={buttonTitle} url={buttonUrl} white />}
			</div>	
		</div>
	</section>
}
