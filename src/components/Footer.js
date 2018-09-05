import React from 'react'
import Link from 'gatsby-link'

import { ICONSail } from './Icons'
import Content from './Content'
import SocialLinks from './SocialLinks'
import EnquiryForm from './EnquiryForm'

import './Footer.css'

export default ({ footerContent, socialMedia, cruises, charters }) => {

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
		    			<h4>Cruises</h4>
		    			{cruises.map(({ fields, frontmatter}, index) => 
	                      <Link className='NavLink' key={`cruises-${index}`} to={fields.slug}>{frontmatter.title}</Link>
	                    )}
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
		    			<h4>Private Charters</h4>
		    			{charters.map(({ fields, frontmatter}, index) => 
	                      <Link className='NavLink' key={`charters-${index}`} to={fields.slug}>{frontmatter.title}</Link>
	                    )}
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
