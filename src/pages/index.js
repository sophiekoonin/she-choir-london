import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => (
  <div className="common__container">
    <div className="index__hero">
      <h1>
        <span className="common__hero-text__background">SHE Choir London</span>
      </h1>
      <p>
        <span className="common__hero-text__background">
          A vibrant, dynamic women's&nbsp;pop&nbsp;choir in
          the&nbsp;heart&nbsp;of&nbsp;London{' '}
        </span>{' '}
      </p>
    </div>
    <div
      className="common__content--right-aligned"
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
