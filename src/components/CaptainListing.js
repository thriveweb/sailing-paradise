import React from 'react'
import IntroText from './IntroText'
import Image from './Image'
import Content from './Content'
import SocialLinks from './SocialLinks'

import './CaptainListing.css'

export default ({ captainIntro, captain }) => {
	return <div className='captain-section'>
		<div className='container'>
			<IntroText content={captainIntro} center />
			{captain &&
				<div className='captains-listing'>
					{captain.map(({ name, image, title, description, socialMedia }, index ) => {
						const { instagram, twitter } = socialMedia

						return <div className='member' key={`member ${index}`}>
							{image &&
								<div className='image-container relative'>
									<Image className='profile-image' background src={image} alt='profile image' />
								</div>	
							}
							{name && <h4>{name}</h4>}
							{title && <p>{title}</p>}
							{description && <Content src={description} />}
							<SocialLinks socialMedia={socialMedia} />
						</div>
					})} 
				</div>	
			}
		</div>
	</div>
}