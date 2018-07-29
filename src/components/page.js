import React from 'react'

const getFormattedContent = pageContent =>
  pageContent.map((section, idx) => {
    const splitContent = section.split('<!-- body -->')
    const trimmedHeading = splitContent[0].replace(/(<p>|<\/p>)/, '')
    const trimmedContent = splitContent[1].startsWith('<br />')
      ? splitContent[1].slice(6)
      : splitContent[1]
    return (
      <div key={idx}>
        <div
          className="common__feature__subheading--left"
          dangerouslySetInnerHTML={{ __html: trimmedHeading }}
        />
        <div
          className="common__content--right-aligned"
          dangerouslySetInnerHTML={{
            __html: trimmedContent
          }}
        />
      </div>
    )
  })

export default ({ data, pathContext, transition }) => {
  let pageContent = data.wordpressPage.content.split('<!--- section --->')
  const formattedContent =
    pageContent.length === 1
      ? data.wordpressPage.content
      : getFormattedContent(pageContent)
  return (
    <div className="common__container">
      <div className="page__header">
        <h1
          dangerouslySetInnerHTML={{
            __html: `<span>${data.wordpressPage.title}</span>`
          }}
        />
      </div>
      {formattedContent}
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
