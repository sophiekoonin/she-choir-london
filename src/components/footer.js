import React from 'react'
import SocialLinks from './navigation/socialLinks'
const currentYear = new Date().getFullYear()
const Footer = () => (
  <footer className="footer">
    <SocialLinks />
    <p className="footer__copyright">© 2012-{currentYear} SHE Choir London</p>
  </footer>
)

export default Footer
