import React from 'react'

import styles from '../components/page.module.scss'
import common from '../components/common.module.scss'

const getFormattedContent = pageContent =>
  pageContent.map((section, idx) => {
    const splitContent = section.split('<!-- body -->')
    const trimmedHeading = splitContent[0].replace(/(<p>|<\/p>)/, '')
    const trimmedContent = splitContent[1].startsWith('<br />')
      ? splitContent[1].slice(6)
      : splitContent[1]
    return (
      <div key={idx} className={common.content}>
        <h2
          //   className={common.featureSubHeadingLeft}
          dangerouslySetInnerHTML={{ __html: trimmedHeading }}
        />
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
    <div className={common.container}>
      <div className={styles.pageHeader}>
        <h1
          dangerouslySetInnerHTML={{
            __html: `<span>${data.wordpressPage.title}</span>`
          }}
        />
      </div>
      {getFormattedContent(pageContent)}
      <div className={styles.secondRowPhoto} />
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
