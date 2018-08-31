import React from 'react'

import Image from './Image'
import './HighlightChart.css'

export default ({ highlights }) => {

	if(!highlights) return null

	return <section className='highlightSection'>
		<div className='container large'>
			<h2>Private Charter Highlights</h2>
			<div className='highlights'>
				{highlights.map(({ title, icon }, index) => {
					return <div className='highlightItem' key={index}>
						{icon && <Image src={icon} alt='' />}
						{title && <p>{title}</p>}
					</div>
				})}
			</div>	
		</div>
	</section>
}