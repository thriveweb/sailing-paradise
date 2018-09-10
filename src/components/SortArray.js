import React, { Component } from 'react'
import PostSection from '../components/PostSection'

class SortArray extends Component {
  render() {
    const { order, items } = this.props

    if (!order) return null

    console.log(order)

    const orderedItems = order.map(order => {
      if(!items) return null
      return items.find(item => order.tours === item.frontmatter.title)
    })

    return <PostSection posts={orderedItems} boatTours />
  }
}

export default SortArray
