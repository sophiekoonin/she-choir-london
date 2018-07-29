import React, { Component } from 'react'
import Link from 'gatsby-link'
import { logo } from './logo'
import MenuIcon from './menu'
import Navbar from './navbar'

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
  render = () => {
    const { menuIsVisible } = this.state
    const navbarClass = menuIsVisible ? 'navbar navbar__visible' : 'navbar'
    return (
      <header className="header__container">
        <Link to="/">
          <div className="header__logo-container">
            {logo}
            {this.props.siteTitle}
          </div>
        </Link>

        <MenuIcon onClick={this.toggleMobileMenu} />
        <Navbar
          className={navbarClass}
          onClose={this.toggleMobileMenu}
          mobileIsOpen={menuIsVisible}
        />
      </header>
    )
  }
}
export default Header
