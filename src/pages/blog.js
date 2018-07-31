import React from 'react'

export default ({ data }) => {
  return (
    <div className="common__container">
      <div className="page__header">
        <h1>Blog</h1>
      </div>
      <div className="common__content blog__content">
        {data.allWordpressPost.edges.map(({ node }, idx) => (
          <div key={idx} className="blog__list--item">
            <h2>{node.title}</h2>
            <span className="blog__date">
              {new Date(node.date).toLocaleDateString('en-GB')}
            </span>
            <div
              className="blog__post"
              dangerouslySetInnerHTML={{ __html: node.excerpt }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query MyFiles {
    allWordpressPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          date
          excerpt
          slug
        }
      }
    }
  }
`
