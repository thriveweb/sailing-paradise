import React, { Component } from 'react'
import Instafeed from 'react-instafeed'

class Instagram extends Component {
	render() {
		const instafeedTarget = 'https://www.instagram.com/sailinginparadisegoldcoast/'

		return <div id={instafeedTarget}>
		      <Instafeed
		        limit='5'
		        ref='instafeed'
		        resolution='standard_resolution'
		        sortBy='most-recent'
		        target={instafeedTarget}
		        template=''
		        userId='userIdInstagramApiString'
		        clientId='clientIdInstagramApiString'
		        accessToken='accessTokenInstagramApiString'
		      />
		    </div>
	}	
}

export default Instagram