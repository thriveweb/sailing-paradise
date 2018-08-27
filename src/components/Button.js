import React from 'react'
import Link from 'gatsby-link'
import { ICONButtonArrows } from './Icons'

export default ({ title, url }) => 
	<Link className='button' to={url}>
		{title}
		<ICONButtonArrows/>
	</Link>
 