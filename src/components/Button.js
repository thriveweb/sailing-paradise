import React from 'react'
import Link from 'gatsby-link'
import { ICONButtonArrows } from './Icons'

import './Button.css'

export default ({ title, url, white, className = '' }) => {
	
	if(white) className += ' buttonWhite'

	return <Link className={`button ${className}`} to={url}>
			{title}
			<ICONButtonArrows/>
		</Link>
}
 