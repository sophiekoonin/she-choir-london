import React from 'react'
import Link from 'gatsby-link'

import styles from './index.module.scss'
import common from '../components/common.module.scss'

const IndexPage = ({ data }) => (
  <div className={common.container}>
    <div className={styles.hero}>
      <h1>
        <span className={common.textBackground}>SHE Choir London</span>
      </h1>
      <p>
        <span className={common.textBackground}>
          A vibrant, dynamic women's&nbsp;pop&nbsp;choir in
          the&nbsp;heart&nbsp;of&nbsp;London{' '}
        </span>{' '}
      </p>
    </div>
    <div
      className={common.contentRightAligned}
      dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }}
    />
  </div>
)

export const query = graphql`
  query Homepage {
    wordpressPage(slug: { eq: "homepage" }) {
      content
    }
  }
`

export default IndexPage
