import React, { Component, Fragment } from 'react'
import Link from 'gatsby-link'
import { Menu, X } from 'react-feather'
import BookingPopup from './BookingPopup'

import Logo from './Logo'
import './Nav.css'

export default class Nav extends Component {
  state = {
    active: false,
    popupActive: false
  }
  
  handleMenuToggle = () => this.setState({ active: !this.state.active })

  // Only close nav if it is open
  handleLinkClick = () => this.state.active && this.handleMenuToggle()

  componentDidUpdate = (prevProps) => {
    if(prevProps.location.pathname !== this.props.location.pathname && this.state.popupActive) {
      this.setState({
        popupActive: false
      }, () => {
        this.props.handleBlur()
      })
    }
  }

  handlePopup = () => {
    this.setState({
      popupActive: !this.state.active
    }, () => {
      this.props.handleBlur()
    })
  }

  render() {
    const { charters, cruises, bookingPopup, blurActive } = this.props
    const { active, popupActive } = this.state

    const NavLink = ({ className, children, ...props }) => (
      <Link
        {...props}
        className={` ${className || ''}`}
        onClick={this.handleLinkClick}
      >
        {children}
      </Link>
    )

    return (
      <Fragment>
        <nav className={`Nav ${active ? 'Nav-active' : ''}`} style={{filter: blurActive ? 'blur(10px)' : 'none'}}>
          <div className="Nav--Container container large">
            <Link to="/" onClick={this.handleLinkClick}>
              <Logo />
            </Link>
            <div className="Nav--Links">
              <li className='NavLink hasChildren two-column'>
                  Cruises
                  <ul className='subMenu'>
                    {cruises.map(({ fields, frontmatter}, index) => {
                      return <NavLink className='NavLink' key={`cruises-${index}`} to={fields.slug}>{frontmatter.title}</NavLink>
                    })}
                  </ul>
              </li>
              <li className='NavLink hasChildren two-column'>
              <NavLink className='parentLink' to="/private-charters/" exact>Private Charters</NavLink>
                <ul className='subMenu'>
                  {charters.map(({ fields, frontmatter}, index) => {
                    return <NavLink className='NavLink' key={`charters-${index}`} to={fields.slug}>{frontmatter.title}</NavLink>
                  })}
                </ul>
              </li>
              <NavLink className='NavLink' to="/boats/" exact>
                Our Boats
              </NavLink>
              <NavLink className='NavLink' to="/about/" exact>
                About us
              </NavLink>
              <li className='NavLink hasChildren'>
                  More
                  <ul className='subMenu'>
                    <NavLink className='NavLink' to="/case-studies/" exact>
                      Happy Sailors
                    </NavLink>
                    <NavLink className='NavLink' to="/blog/" exact>
                      Latest News
                    </NavLink>
                    <NavLink className='NavLink' to="/contact/" exact>
                      Contact us
                    </NavLink>
                  </ul>
              </li>
            </div>
            <p 
              className='nav-button'
              onClick={this.handlePopup}
            >
              Booking Enquiry
            </p>
            <button
              className="Button-blank Nav--MenuButton"
              onClick={this.handleMenuToggle}
            >
              {active ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
        <BookingPopup {...bookingPopup} classActive={popupActive ? 'active' : ''} handlePopup={this.handlePopup} />
      </Fragment>  
    )
  }
}
