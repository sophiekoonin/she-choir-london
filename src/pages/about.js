import React from 'react'

export default ({ data, pathContext, transition }) => {
  return (
    <div className="common__container">
      <div className="page__header">
        <h1>About SHE Choir London</h1>
      </div>
      <div
        className="common__content--full-width"
        dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }}
      />
    </div>
  )
}

export const pageQuery = graphql`
  query AboutPage {
    wordpressPage(slug: { eq: "who-we-are" }) {
      id
      title
      slug
      content
    }
  }
`
