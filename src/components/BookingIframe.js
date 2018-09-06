import React, { Component } from 'react'

class BookingIframe extends Component {
	state = {}

	render() {
		const { bookingIframe } = this.props

		if(!bookingIframe) return null

		return <div dangerouslySetInnerHTML={{__html: bookingIframe}} />;
	}
}

export default BookingIframe 
