import React from 'react'

const getFormattedContent = pageContent =>
  pageContent.map((section, idx) => {
    const splitContent = section.split('<!-- body -->')
    const trimmedHeading = splitContent[0].replace(/(<p>|<\/p>)/, '')
    const trimmedContent = splitContent[1].startsWith('<br />')
      ? splitContent[1].slice(6)
      : splitContent[1]
    return (
      <div key={idx} className="common__content">
        <div dangerouslySetInnerHTML={{ __html: trimmedHeading }} />
        <div
          dangerouslySetInnerHTML={{
            __html: trimmedContent
          }}
        />
      </div>
    )
  })

export default ({ data, pathContext, transition }) => {
  console.log(data)
  const pageContent = data.wordpressPage.content.split('<!--- section --->')
  console.log({ pageContent })
  return (
    <div className="common__container">
      <div className="page__header">
        <h1>
          <span className="common__hero-text__background">
            About SHE Choir London
          </span>
        </h1>
      </div>
      {getFormattedContent(pageContent)}
      <div className="page__second-row__photo" />
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
