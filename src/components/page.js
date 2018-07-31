import React from 'react'
export default ({ data, pathContext, transition }) => {
  return (
    <div className="common__container">
      <div className="page__header">
        <h1
          dangerouslySetInnerHTML={{
            __html: `${data.wordpressPage.title}`
          }}
        />
      </div>
      <div className="common__content--full-width">
        {data.wordpressPage.content}
      </div>
      <div className="page__second-row__photo">
        <h3>TESTING</h3>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query PageByPath($id: String!) {
    wordpressPage(id: { eq: $id }) {
      id
      title
      slug
      content
    }
  }
`
