import React, { Component } from 'react'

class SortArray extends Component {

	state = {}

	// result = []
	
	// order.forEach(tour) {
	// 	const items = items.filter(item => {
	// 		const found = false
	// 		if(!found && item[1] == key) {
	// 			result.push(item)
	// 			found = true
	// 			return false
	// 		} else {
	// 			return true
	// 		}
	// 	})
	// }

	render() {
		const { order, items } = this.props

		const orderNeeded = order.map(orderItem => orderItem.tours)
		const itemTitles = items.map(item => item.title)

		console.log(orderNeeded)
		console.log(itemTitles)


		return (
			<div>

			</div>
		)
	}
}

export default SortArray