import React from 'react'
import Link from 'gatsby-link'

import styles from './index.module.scss'
import common from '../components/common.module.scss'

const IndexPage = () => (
  <div className={common.container}>
    <div className={styles.hero}>
      <h1>
        <span>SHE Choir London</span>
      </h1>
      <p>
        <span>
          A vibrant, dynamic women's&nbsp;pop&nbsp;choir in
          the&nbsp;heart&nbsp;of&nbsp;London{' '}
        </span>{' '}
      </p>
    </div>
    <div className={common.featureSubHeadingLeft}>
      <h2>Interesting sub heading goes here.</h2>
    </div>
    <div className={common.contentRightAligned}>
      Veniam consequat nulla officia eiusmod cillum. Reprehenderit nostrud
      cillum voluptate cillum eiusmod voluptate fugiat aute minim do. Voluptate
      cillum mollit qui ullamco nisi exercitation occaecat. Quis nulla cillum
      reprehenderit anim eiusmod adipisicing commodo voluptate pariatur
      incididunt id enim. Qui velit id nisi ea exercitation ea esse do ex
      eiusmod cillum consequat ex. <Link to="/about">Find out more -></Link>
    </div>
  </div>
)

export default IndexPage
