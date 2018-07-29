import React, { Component } from 'react'
import Link from 'gatsby-link'
import { logo } from './logo'
import MenuIcon from './menu'
import Navbar from './navbar'

const menuLinks = [
  {
    to: '/about',
    name: 'About'
  },
  {
    to: '/gigs',
    name: 'Gigs'
  },
  {
    to: '/blog',
    name: 'Blog'
  },
  {
    to: '/join',
    name: 'Join'
  },
  {
    to: '/book',
    name: 'Book'
  },
  {
    to: '/contact',
    name: 'Contact'
  }
]
class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuIsVisible: false
    }
  }

  toggleMobileMenu = e => {
    e.preventDefault()
    this.setState(prevState => ({ menuIsVisible: !prevState.menuIsVisible }))
  }
  render = () => (
    <header className="header__container">
      <Link to="/">
        <div className="header__logo-container">
          {logo}
          {this.props.siteTitle}
        </div>
      </Link>

      <MenuIcon onClick={this.toggleMobileMenu} />
      <Navbar links={menuLinks} />
    </header>
  )
}
export default Header
