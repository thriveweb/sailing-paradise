import React, { Component } from 'react'
import PostSection from '../components/PostSection'

class SortArray extends Component {

	render() {
		const { order, items } = this.props

		const orderedItems = order.map(order => 
			items.find(item => order.tours === item.frontmatter.title)
		)

		return <PostSection posts={orderedItems} boatTours />
	}
}

export default SortArray