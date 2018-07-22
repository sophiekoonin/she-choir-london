import React from 'react'

export default ({ data, pathContext, transition }) => {
  console.log(data);
  return (
    <div>
      <h1 dangerouslySetInnerHTML={{ __html: data.wordpressPost.title }} />
      <div dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }} />
    </div>
  )};


export const pageQuery = graphql`
query PostByPath($id: String!) {
  wordpressPost(id: { eq: $id }) {
    id
    title
    slug
    content
    date
  }
}
`