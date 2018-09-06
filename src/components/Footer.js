import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import _kebabCase from 'lodash/kebabCase'
import { ICONSail } from './Icons'
import Content from './Content'
import SocialLinks from './SocialLinks'
import EnquiryForm from './EnquiryForm'

import './Footer.css'

export default ({ footerContent, socialMedia, navItems }) => {

	const charters = navItems.filter(item => item.slug === 'private-charters')
	const cruises = navItems.filter(item => item.slug === 'cruises')

	const today = new Date()
  	const yyyy = today.getFullYear()

  	return <footer className='Footer' id='footer-blur'>
		    <div className='container large'>
		    	<div className='Footer-Top'>
		    		<div className='sail-icon'>
		    			<ICONSail />
		    		</div>	
		    		<div className='footer-col col1'>
		    			<h4>About</h4>
		    			{footerContent && <Content src={footerContent} />}
		    			<SocialLinks socialMedia={socialMedia} />
		    		</div>
		    		<div className='footer-col col2'>
		    			{cruises.map(({ title, subNavItems }, index) => {
		                  	return <Fragment>
			                  	<h4 key={`nav-${index}`}>
			                  		{title}
			                    </h4>  
		                        {subNavItems && 
		                          	subNavItems.map(({ title, slug }, index) => 
		                            	<Link 
		                            		key={`subNav-${index}`} 
		                            		className='NavLink' 
		                            		to={`/${_kebabCase(slug)}`}
		                            	>
		                            		{title}
		                            	</Link>
		                        	)
		                      	}
		                    </Fragment>
		                })}
	                    <h4>Info</h4>
	                    <Link className='NavLink' to="/boats/" exact>
		               	 Our Boats
		              	</Link>
		              	<Link className='NavLink' to="/about/" exact>
		               	 About us
		              	</Link>
	                    <Link className='NavLink' to="/case-studies/" exact>
	                      Happy Sailors
	                    </Link>
	                    <Link className='NavLink' to="/blog/" exact>
	                      Blog
	                    </Link>
	                    <Link className='NavLink' to="/contact/" exact>
	                      Contact
	                    </Link>
		    		</div>
		    		<div className='footer-col col3'>
		    			{charters.map(({ title, subNavItems }, index) => {
		                  	return <Fragment>
			                  	<h4 key={`nav-${index}`}>
			                  		{title}
			                    </h4>  
		                        {subNavItems && 
		                          	subNavItems.map(({ title, slug }, index) => 
		                            	<Link 
		                            		key={`subNav-${index}`} 
		                            		className='NavLink' 
		                            		to={`/${(slug)}`}
		                            	>
		                            		{title}
		                            	</Link>
		                        	)
		                      	}
		                    </Fragment>
		                })}
		    		</div>
		    		<div className='footer-col col4'>
		    			<h4>Quick contact</h4>
		    			<EnquiryForm />
		    			<Link className='NavLink' to="/book-enquiry/" exact>
	                      Enquire About Hiring our Boats
	                    </Link>
		    			<Link className='NavLink' to="/cruises/" exact>
	                      Book Tickets on a Cruise
	                    </Link>
		    		</div>
		    	</div>
		    	<div className='Footer-Bottom'>
		      		<span>© {yyyy} All rights reserved.</span>
		      		<p><a href="https://thriveweb.com.au/"  rel="nofollow" title="website design" >Website Design</a> - by THRIVE</p>
		      	</div>
		    </div>
		</footer>
}
