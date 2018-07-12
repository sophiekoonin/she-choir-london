import React from 'react'
import Link from 'gatsby-link'
import logoImage from './she-pink.png'
import Menu from './menu'

const logo = (
  <img
    src={logoImage}
    style={{ width: '5%', marginBottom: 0, marginRight: '0.5rem' }}
    aria-hidden
  />
)

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'none',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid hsla(0,0%,0%,0.3)'
    }}
  >
    <Link
      to="/"
      style={{
        color: '#000000',
        textDecoration: 'none'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          margin: '0 auto',
          maxWidth: 960,
          padding: '0.5rem'
        }}
      >
        {logo}
        <span
          style={{
            margin: 0,
            fontFamily: 'Raleway Dots',
            textTransform: 'uppercase'
          }}
        >
          {siteTitle}
        </span>
      </div>
    </Link>

    <div style={{}}>Menu</div>
  </div>
)

export default Header
