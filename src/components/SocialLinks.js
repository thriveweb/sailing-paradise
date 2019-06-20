import React from 'react'

import { ICONInstagram, ICONTwitter, ICONFacebook, ICONGooglePlus, ICONLinkedin } from './Icons'

import './SocialLinks.css'

export default ({ socialMedia }) => {

	if(!socialMedia) return null

	const { facebook, instagram, twitter, googlePlus, linkedin } = socialMedia

	return <div className='share-buttons'>
		{googlePlus &&
			<li>
				<a
					href={googlePlus}
					target="_blank"
					rel="noopener noreferrer"
				>
					<ICONGooglePlus />
				</a>
			</li>
		}
		{instagram &&
			<li>
				<a
					href={instagram}
					target="_blank"
					rel="noopener noreferrer"
				>
					<ICONInstagram />
				</a>
			</li>
		}
		{facebook &&
			<li>
				<a
					href={facebook}
					target="_blank"
					rel="noopener noreferrer"
				>
					<ICONFacebook />
				</a>
			</li>
		}
		{linkedin &&
			<li>
				<a
					href={linkedin}
					target="_blank"
					rel="noopener noreferrer"
				>
					<ICONLinkedin />
				</a>
			</li>
		}
		{twitter &&
			<li>
				<a
					href={twitter}
					target="_blank"
					rel="noopener noreferrer"
				>
					<ICONTwitter />
				</a>
			</li>
		}			
	</div>

}
