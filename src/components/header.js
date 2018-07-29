import React from 'react'
import Link from 'gatsby-link'
import { logo } from './logo'
import Menu from './menu'
import Navbar from './navbar'

const Header = ({ siteTitle }) => (
  <div className="header__container">
    <Link to="/">
      <div className="header__logo-container">
        {logo}
        {siteTitle}
      </div>
    </Link>

    <Menu />
    <Navbar />
  </div>
)

export default Header
