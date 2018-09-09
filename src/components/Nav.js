import React, { Component, Fragment } from 'react'
import Link from 'gatsby-link'
import _kebabCase from 'lodash/kebabCase'
import _get from 'lodash/get'
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

  componentDidUpdate = prevProps => {
    if (
      prevProps.location.pathname !== this.props.location.pathname &&
      this.state.popupActive
    ) {
      this.setState(
        {
          popupActive: false
        },
        () => {
          this.props.handleBlur()
        }
      )
    }
  }

  handlePopup = () => {
    this.setState(
      {
        popupActive: !this.state.active
      },
      () => {
        this.props.handleBlur()
      }
    )
  }

  render() {
    const { charters, cruises, blurActive } = this.props
    const { active, popupActive } = this.state

    const navList = _get(this.props, 'navList') || []
    const bookingPopup = _get(this.props, 'bookingPopup') || []

    const navItems = (navList && _get(navList.frontmatter, 'navItems')) || []
    const popup =
      (bookingPopup && _get(bookingPopup.frontmatter, 'bookingPopup')) || []

    return (
      <Fragment>
        <nav
          className={`Nav ${active ? 'Nav-active' : ''}`}
          style={{ filter: blurActive ? 'blur(10px)' : 'none' }}
        >
          <div className="Nav--Container container large">
            <Link to="/" onClick={this.handleLinkClick}>
              <Logo />
            </Link>
            <div className="Nav--Links">
              {navItems.map(({ title, slug, subNavItems }, index) => {
                if (!slug)
                  return (
                    <li
                      key={`nav-${index}`}
                      className={`NavLink ${subNavItems ? 'hasChildren' : ''} ${
                        slug === 'private-charters' ? 'two-column' : ''
                      }`}
                    >
                      <span>{title}</span>
                      {subNavItems && (
                        <ul className="subMenu">
                          {subNavItems.map(({ title, slug }, index) => {
                            return (
                              <li key={`subNav-${index}`} className="NavLink">
                                <Link to={`/${slug}`}>{title}</Link>
                              </li>
                            )
                          })}
                        </ul>
                      )}
                    </li>
                  )

                return (
                  <li
                    key={`nav-${index}`}
                    className={`NavLink ${subNavItems ? 'hasChildren' : ''} ${
                      slug === 'private-charters' ? 'two-column' : ''
                    }`}
                  >
                    <Link to={`/${slug}`}>{title}</Link>
                    {subNavItems && (
                      <ul className="subMenu">
                        {subNavItems.map(({ title, slug }, index) => {
                          return (
                            <li key={`subNav-${index}`} className="NavLink">
                              <Link to={`/${slug}`}>{title}</Link>
                            </li>
                          )
                        })}
                      </ul>
                    )}
                  </li>
                )
              })}
            </div>
            <p className="nav-button" onClick={this.handlePopup}>
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
        <BookingPopup
          {...popup}
          classActive={popupActive ? 'active' : ''}
          handlePopup={this.handlePopup}
        />
      </Fragment>
    )
  }
}
