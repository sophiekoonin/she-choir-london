import React from 'react'
import Link from 'gatsby-link'
import { logo } from './logo'
import styles from './header.module.scss'
import Menu from './menu'

const Header = ({ siteTitle }) => (
  <div className={styles.container}>
    <Link to="/">
      <div className={styles.logoContainer}>
        {logo}
        {siteTitle}
      </div>
    </Link>

    <div>Menu</div>
  </div>
)

export default Header
