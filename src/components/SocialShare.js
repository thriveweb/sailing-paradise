import React from 'react'

import { ICONFacebook, ICONTwitter, ICONGooglePlus } from './Icons'
import './SocialShare.css'

export default () =>

	<ul class="share-buttons">
		<p>SHARE ON</p>
		<li>
			<a href="https://www.facebook.com/sharer/sharer.php?u=&quote=" target="_blank" title="Share on Facebook">
				<ICONFacebook />
			</a>
		</li>
		<li>
			<a href="https://twitter.com/intent/tweet?source=&text=:%20" target="_blank" title="Tweet">
				<ICONTwitter />
			</a>
		</li>
		<li>
			<a href="https://plus.google.com/share?url=" target="_blank" title="Share on Google+">
				<ICONGooglePlus />
			</a>
		</li>
	</ul>