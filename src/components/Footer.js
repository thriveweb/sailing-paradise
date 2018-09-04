import React from 'react'

import './Footer.css'

export default ({  }) => {

	const today = new Date()
  	const yyyy = today.getFullYear()

  	return <footer className='Footer' id='footer-blur'>
		    <div className='container'>
		    	<div className='Footer-Top'>

		    	</div>
		    	<div className='Footer-Bottom'>
		      		<span>© {yyyy} All rights reserved.</span>
		      		<a href="https://thriveweb.com.au/"  rel="nofollow" title="website design" >Website Design</a> - by THRIVE
		      	</div>
		    </div>
		</footer>
}
