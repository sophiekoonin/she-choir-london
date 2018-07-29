import React from 'react'
import Link from 'gatsby-link'

const Navbar = () => (
  <nav className="navbar">
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
)

export default Navbar
