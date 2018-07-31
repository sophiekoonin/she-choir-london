import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => (
  <div className="common__container">
    <div className="index__hero">
      <h1>SHE Choir London</h1>
      <p>
        A vibrant, dynamic women's&nbsp;pop&nbsp;choir in
        the&nbsp;heart&nbsp;of&nbsp;London
      </p>
    </div>
    <div
      className="common__content--full-width"
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
