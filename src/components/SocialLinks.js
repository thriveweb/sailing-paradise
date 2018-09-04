import React from 'react'

import { ICONInstagram, ICONTwitter, ICONFacebook, ICONGooglePlus, ICONLinkedin } from './Icons'

export default ({ socialMedia }) => {

	if(!socialMedia) return null

	const { facebook, instagram, twitter, googlePlus, linkedin } = socialMedia	

	return <div className='share-buttons'>
		{googlePlus &&
			<li>
				<a href={googlePlus}>
					<ICONGooglePlus />
				</a>
			</li>
		}
		{instagram &&
			<li>
				<a href={instagram}>
					<ICONInstagram />
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
		{linkedin &&
			<li>
				<a href={linkedin}>
					<ICONLinkedin />
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
	</div>
	
}