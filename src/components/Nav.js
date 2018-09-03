import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Menu, X } from 'react-feather'

import Logo from './Logo'
import './Nav.css'

export default class Nav extends Component {
  state = {
    active: false
  }

  handleMenuToggle = () => this.setState({ active: !this.state.active })

  // Only close nav if it is open
  handleLinkClick = () => this.state.active && this.handleMenuToggle()

  render() {
    const { charters, cruises } = this.props
    const { active } = this.state

    const NavLink = ({ className, children, ...props }) => (
      <Link
        {...props}
        className={`NavLink ${className || ''}`}
        onClick={this.handleLinkClick}
      >
        {children}
      </Link>
    )

    return (
      <nav className={`Nav ${active ? 'Nav-active' : ''}`}>
        <div className="Nav--Container container">
          <Link to="/" onClick={this.handleLinkClick}>
            <Logo />
          </Link>
          <div className="Nav--Links">
            <li className='NavLink hasChildren two-column'>
                Cruises
                <ul className='subMenu'>
                  {cruises.map(({ fields, frontmatter}) => {
                    return <NavLink to={fields.slug}>{frontmatter.title}</NavLink>
                  })}
                </ul>
            </li>
            <NavLink to="/private-charters/" className='hasChildren two-column' exact>
              Private Charters
                <ul className='subMenu'>
                  {charters.map(({ fields, frontmatter}) => {
                    return <NavLink to={fields.slug}>{frontmatter.title}</NavLink>
                  })}
                </ul>
            </NavLink>
            <NavLink to="/about/" exact>
              About us
            </NavLink>
            <li className='NavLink hasChildren'>
                More
                <ul className='subMenu'>
                  <NavLink to="/case-studies/" exact>
                    Happy Sailors
                  </NavLink>
                  <NavLink to="/blog/" exact>
                    Latest News
                  </NavLink>
                  <NavLink to="/contact/" exact>
                    Contact us
                  </NavLink>
                </ul>
            </li>
          </div>
          <Link className='nav-button' to='/book'>Booking Enquiry</Link>
          <button
            className="Button-blank Nav--MenuButton"
            onClick={this.handleMenuToggle}
          >
            {active ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
    )
  }
}
