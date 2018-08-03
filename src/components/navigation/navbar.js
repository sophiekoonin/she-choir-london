import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import CloseIcon from '../icons/close'
import SocialLinks from './socialLinks'

const Overlay = ({ onClose }) => (
  <div className="navbar__overlay" onClick={onClose} />
)
const Navbar = ({ className, mobileIsOpen, onClose }) => (
  <Fragment>
    <nav className={className}>
      <ul>
        {mobileIsOpen && (
          <li className="navbar__close-button">
            <button onClick={onClose}>
              <CloseIcon />
            </button>
          </li>
        )}
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/gigs">Gigs</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/join">Join</Link>
        </li>
        <li>
          <Link to="/book">Book</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {mobileIsOpen && (
          <li>
            <SocialLinks />
          </li>
        )}
      </ul>
    </nav>
    {mobileIsOpen && <Overlay onClose={onClose} />}
  </Fragment>
)

export default Navbar
