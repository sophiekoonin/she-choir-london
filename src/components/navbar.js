import React from 'react'
import Link from 'gatsby-link'

const Overlay = ({ onClose }) => (
  <div className="navbar__overlay" onClick={onClose} />
)
const Navbar = ({ className, mobileIsOpen, onClose }) => (
  <div>
    <nav className={className}>
      <ul>
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
      </ul>
    </nav>
    {mobileIsOpen && <Overlay onClose={onClose} />}
  </div>
)

export default Navbar
