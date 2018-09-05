import React from 'react'

import Image from './Image'
import Content from './Content'
import Button from './Button'

import './HomeAboutBanner.css'

export default ({ featuredImage, title, subtitle, content, buttons }) => 
	<section className='aboutUs relative'>
		<Image background src={featuredImage} alt='' />
		{title && <h2 className='title-gradient'>{title}</h2>}
		<div className='aboutUs-Content'>
			{subtitle && <h3 className='fancy-title'>{subtitle}</h3>}
			{content && <Content src={content} />}
			{buttons &&
				buttons.map(({ buttonTitle, buttonUrl}, index) => 
					<Button  key={buttonUrl + index} title={buttonTitle} url={buttonUrl} />
				)
			}
		</div>
	</section>
