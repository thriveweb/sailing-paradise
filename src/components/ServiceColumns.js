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
						<Image background src={image} />
					</div>
				</Fragment>
			})}
		</div>	
		<div className='serviceBanner'>
			<Image background src={featuredImage} />
			<div className='serviceBanner-Content'>
				<p>{title}</p>
				<h3>{subtitle}</h3>
				<Button title={buttonTitle} url={buttonUrl} white />
			</div>	
		</div>
	</section>
}
