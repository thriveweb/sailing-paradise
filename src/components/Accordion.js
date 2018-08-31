import React from 'react'

import Content from './Content'
import './Accordion.css'

export default class Accordion extends React.Component {
  static defaultProps = {
    items: [],
    className: ''
  }

  state = {
    activeItem: null
  }

  handleClick = index => {
    const activeItem = this.state.activeItem === index ? null : index
    this.setState({ activeItem })
  }

  render() {
    const { items, className } = this.props

    if(!items) return null

    return (
      <div className={`Accordion ${className}`}>
        {items.map((item, index) => {
          const active = this.state.activeItem === index
          return (
            <div
              className={`Accordion--item ${active ? 'active' : ''}`}
              key={`accordion-item-${item.title + index}`}
            >
              <h2 onClick={() => this.handleClick(index)}>{item.title}</h2>
              {active && (
                <div className="Accordion--item--content">
                  <Content src={item.content} />
                  {item.link && (
                    <a href={item.link} className="button">
                      {item.linkTitle}
                    </a>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    )
  }
}
