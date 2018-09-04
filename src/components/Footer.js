import React from 'react'
import Content from './Content'

import './Footer.css'

export default ({ footerContent, socialMedia, cruises, charters }) => {

	// const { facebook, googlePlus, instagram } = socialMedia
	const today = new Date()
  	const yyyy = today.getFullYear()

  	return <footer className='Footer' id='footer-blur'>
		    <div className='container'>
		    	<div className='Footer-Top'>
		    		<div className='col1'>
		    			<h4>About</h4>
		    			{footerContent && <Content src={footerContent} />}

		    		</div>
		    	</div>
		    	<div className='Footer-Bottom'>
		      		<span>© {yyyy} All rights reserved.</span>
		      		<a href="https://thriveweb.com.au/"  rel="nofollow" title="website design" >Website Design</a> - by THRIVE
		      	</div>
		    </div>
		</footer>
}
