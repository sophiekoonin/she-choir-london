import React, { Component } from 'react'
import Link from 'gatsby-link'
import { logo } from './icons/logo'
import MenuIcon from './navigation/menu'
import Navbar from './navigation/navbar'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuIsVisible: false
    }
  }

  openMenu = () => {
    document.getElementById('main').classList.add('no-scroll')
    this.setState({ menuIsVisible: true })
  }

  closeMenu = () => {
    document.getElementById('main').classList.remove('no-scroll')
    this.setState({ menuIsVisible: false })
  }

  toggleMobileMenu = e => {
    e.preventDefault()
    this.state.menuIsVisible ? this.closeMenu() : this.openMenu()
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
