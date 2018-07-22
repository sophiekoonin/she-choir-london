import React from 'react'
import Link from 'gatsby-link'

import styles from './header.module.scss'

const Menu = () => (
  <nav className={styles.menu}>
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

export default Menu
