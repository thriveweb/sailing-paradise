import React, { Component } from 'react'
import Instafeed from 'react-instafeed'

import { ICONInstagram, ICONButtonArrows } from './Icons'
import './InstagramFeed.css'

class Instagram extends Component {

	shouldComponentUpdate() {
        return false
    }

	render() {
		const instafeedTarget = 'instafeed'

		console.log('test')

		return (
			<section className='InstagramSection'>
				<div className='insta-intro'>
					<h2><ICONInstagram /> Instagram</h2>
					<a className='button' href='https://www.instagram.com/sailinginparadisegoldcoast/'>Follow Us <ICONButtonArrows/></a>
				</div>	
			    <div id={instafeedTarget}>
			      <Instafeed
			        limit='6'
			        ref='instafeed'
			        resolution='standard_resolution'
			        sortBy='most-recent'
			        target={instafeedTarget}
			        template=''
			        userId='4191185750'
			        clientId='b96b2e80ac394c669dface01fe4603ce'
			        accessToken='4191185750.b96b2e8.4b3d52959c4c4e5089fcbdd3edbeb049'
			      />
			    </div>
			</section>    
		)
	}
}

export default Instagram