import React, { Fragment } from 'react'
import {
  twitter,
  facebook,
  youtube,
  instagram,
  soundcloud
} from '../icons/social'

const SocialLinks = () => (
  <Fragment>
    <ul className="navbar__social">
      <li>
        <a href="https://twitter.com/shechoirldn" alt="Twitter">
          {twitter}
        </a>
      </li>
      <li>
        <a href="https://facebook.com/shechoirlondon" alt="Facebook">
          {facebook}
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/channel/UCwMqZspe9sIDwC8zTg7ldkw"
          alt="YouTube"
        >
          {youtube}
        </a>
      </li>
      <li>
        <a href="https://instagram.com/shechoirldn" alt="Instagram">
          {instagram}
        </a>
      </li>
      <li>
        <a href="https://soundcloud.com/she-choir-london" alt="Soundcloud">
          {soundcloud}
        </a>
      </li>
    </ul>
  </Fragment>
)

export default SocialLinks
