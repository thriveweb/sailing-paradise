import React from 'react'

import Image from './Image'
import Button from './Button'

export default ({ title, contentBoxes }) => {
	return <section className='booking-popup'>
		<div className='container'>
			{title && <h2>{title}</h2>}
			<div className='contentBoxes'>
				{contentBoxes.map(({ icon, title, buttonTitle, buttonUrl }, index) => {
					return <div className='contentBox' key={index}>
						{icon && <Image src={icon} alt='' />}
						{title && <h3>{title}</h3>}
						{buttonTitle && buttonUrl && <Button title={buttonTitle} url={buttonUrl} />}
					</div>
				})}
			</div>
		</div>
	</section>
}