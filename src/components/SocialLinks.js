import React from 'react'

import { ICONInstagram, ICONTwitter, ICONFacebook, ICONGooglePlus, ICONLinkedin } from './Icons'

export default ({ socialMedia }) => {

	if(!socialMedia) return null

	const { facebook, instagram, twitter, googlePlus } = socialMedia	

	return <div className='share-buttons'>
		{instagram &&
			<li>
				<a href={instagram}>
					<ICONInstagram />
				</a>
			</li>
		}		
		{twitter &&
			<li>
				<a href={twitter}>
					<ICONTwitter />
				</a>
			</li>
		}
		{facebook &&
			<li>
				<a href={facebook}>
					<ICONFacebook />
				</a>
			</li>
		}
		{googlePlus &&
			<li>
				<a href={googlePlus}>
					<ICONGooglePlus />
				</a>
			</li>
		}			
	</div>
	
}