import React, { Fragment } from 'react'

export default ({ bookingIframe }) => {

	return <Fragment>
		<script type="text/javascript" src="https://sailinginparadise.rezdy.com/pluginJs?script=external_modal"></script>
		<iframe seamless="" width="300px" height="500px" frameBorder="0" className="rezdy" src="https://sailinginparadise.rezdy.com/calendarWidget/241550?iframe=true&targetFrame=_new_modal"></iframe>
	</Fragment>
}
