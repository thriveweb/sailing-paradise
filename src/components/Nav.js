import React from 'react'

export default () => null
// import React, { Component, Fragment } from 'react'
// import { Link, StaticQuery, graphql } from 'gatsby'
// import _get from 'lodash/get'
// import { Menu, X } from 'react-feather'
// import BookingPopup from './BookingPopup'
//
// import Logo from './Logo'
// import './Nav.css'
//
// export default class Nav extends Component {
//   state = {
//     active: false,
//     popupActive: false
//   }
//
//   handleMenuToggle = () => this.setState({ active: !this.state.active })
//
//   // Only close nav if it is open
//   handleLinkClick = () => this.state.active && this.handleMenuToggle()
//
//   handlePopup = () => {
//     this.setState({
//       popupActive: !this.state.active
//     })
//   }
//
//   render() {
//     return (
//       <StaticQuery
//         query={graphql`
//           query NavQuery {
//             allMarkdownRemark(
//               filter: { fields: { contentType: { in: ["pages", "defaultPages", "boatTours", "posts"] }}}
//             ) {
//               edges {
//                 node {
//                   frontmatter{
//                     title
//                   }
//                   fields {
//                     slug
//                   }
//                 }
//               }
//             }
//           }
//         `}
//
//         render={data => {
//           const { allMarkdownRemark } = data
//           const { navList } = this.props
//           const { active, popupActive } = this.state
//
//           const navItems = (navList && _get(navList, 'frontmatter.navItems')) || []
//           const bookingPopup = _get(this.props, 'bookingPopup') || []
//           const popup = _get(bookingPopup.frontmatter, 'bookingPopup') || []
//
//           return <Fragment>
//             <nav className={`Nav ${active ? 'Nav-active' : ''}`}>
//               <div className="Nav--Container container large">
//                 <Link to="/" onClick={this.handleLinkClick}>
//                   <Logo />
//                 </Link>
//                 <div className="Nav--Links">
//                   {navItems.map(({ title, subNavItems }, index) => {
//                     const foundItem = allMarkdownRemark.edges.find(({ node }) => _get(node, 'frontmatter.title') === title)
//                     const foundItemSlug = _get(foundItem, 'node.fields.slug')
//
//                     if(!foundItemSlug)
//                       return (
//                         <li
//                           key={`nav-${index}`}
//                           className={`NavLink ${subNavItems ? 'hasChildren' : ''} ${
//                             foundItemSlug === '/private-charters/' ? 'two-column' : ''
//                           }`}
//                         >
//                           <span>{title}</span>
//                           {subNavItems && (
//                             <ul className="subMenu">
//                               {subNavItems.map(({ title }, index) => {
//                                 const foundItem = allMarkdownRemark.edges.find(({ node }) => _get(node, 'frontmatter.title') === title)
//                                 const foundItemSlug = _get(foundItem, 'node.fields.slug')
//
//                                 return foundItemSlug &&
//                                   <li key={`subNav-${index}`} className="NavLink">
//                                     <Link to={foundItemSlug}>{title}</Link>
//                                   </li>
//
//                               })}
//                             </ul>
//                           )}
//                         </li>
//                       )
//
//                     return (
//                       <li
//                         key={`nav-${index}`}
//                         className={`NavLink ${subNavItems ? 'hasChildren' : ''} ${
//                           foundItemSlug === '/private-charters/' ? 'two-column' : ''
//                         }`}
//                       >
//                         <Link to={foundItemSlug}>{title}</Link>
//                         {subNavItems && (
//                           <ul className="subMenu">
//                             {subNavItems.map(({ title }, index) => {
//                               const foundItem = allMarkdownRemark.edges.find(({ node }) => _get(node, 'frontmatter.title') === title)
//                               const foundItemSlug = _get(foundItem, 'node.fields.slug')
//
//                               return foundItemSlug &&
//                                 <li key={`subNav-${index}`} className="NavLink">
//                                   <Link to={foundItemSlug}>{title}</Link>
//                                 </li>
//
//                             })}
//                           </ul>
//                         )}
//                       </li>
//                     )
//                   })}
//                 </div>
//                 <p className="nav-button" onClick={this.handlePopup}>
//                   Booking Enquiry
//                 </p>
//                 <button
//                   className="Button-blank Nav--MenuButton"
//                   onClick={this.handleMenuToggle}
//                 >
//                   {active ? <X /> : <Menu />}
//                 </button>
//               </div>
//             </nav>
//             <BookingPopup
//               {...popup}
//               classActive={popupActive ? 'active' : ''}
//               handlePopup={this.handlePopup}
//             />
//           </Fragment>
//         }}
//       />
//     )
//   }
// }
