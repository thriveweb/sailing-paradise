import React, { Component } from 'react'
import { ICONArrowDown } from './Icons'
import './Select.css'

import _kebabCase from 'lodash/kebabCase'

class Select extends Component {
  state = {
  }

  componentDidMount = () => {
    const { selected } = this.props

    this.setState({
      active: selected && selected.replace(/-/g, ' ')
    })
  }

  render() {
    const { name, options, placeholder, selected } = this.props
    const { active, activeDropdown = false } = this.state

    const activeOption = active && active.toLowerCase()

    console.log(active)

    return <label className={`Form--Label`}>
      <select style={{display: 'none'}}>
        {options.map((option, index) => 
          <option 
            key={option} 
            value={option} 
            selected={option.toLowerCase() === activeOption ? true : null}
            >
            {option}
          </option>
        )}
      </select>
      <div className={`select-dropdown ${activeDropdown ? 'active' : ''}`}>
        <p className='Form--Input has-arrow' onClick={() => this.setState({ activeDropdown: !activeDropdown })}>
          {activeOption ? activeOption : placeholder} <ICONArrowDown />
        </p>
        <ul> 
          {options.map(option => 
            <li 
              key={option}
              onClick={() => this.setState({ active: option.toLowerCase(), activeDropdown: false })}
              className={option === activeOption ? 'active' : ''}
            >
              {option}
            </li>
          )}
        </ul>
      </div>
    </label>
  }
}

export default Select