import React from 'react'
// import Link from 'gatsby-link'

const Icon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      className="menu__mobile-icon"
      d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"
    />
  </svg>
)

const MenuIcon = ({ onClick }) => (
  <button className="menu" onClick={onClick}>
    {Icon}
  </button>
)

export default MenuIcon
