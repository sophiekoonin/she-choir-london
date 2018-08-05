const path = require('path')

// Fix to allow async/await in js files
exports.modifyBabelrc = ({ babelrc }) => ({
  ...babelrc,
  plugins: babelrc.plugins.concat(['transform-regenerator'])
})

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = ({ page, boundActionCreators }) => {
  const { createPage, deletePage } = boundActionCreators
  return new Promise((resolve, reject) => {
    // Remove trailing slash
    const newPage = Object.assign({}, page, {
      path: page.path === `/` ? page.path : page.path.replace(/\/$/, ``)
    })

    if (newPage.path !== page.path) {
      // Remove the old page
      deletePage(page)
      // Add the new page
      createPage(newPage)
    }

    resolve()
  })
}

// Create pages from WordPress posts.
exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return graphql(`
    {
      allWordpressPost(sort: { fields: date, order: ASC }) {
        edges {
          node {
            id
            title
            content
            date
            slug
            link
          }
        }
      }
      allWordpressPage {
        edges {
          node {
            id
            title
            content
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    result.data.allWordpressPost.edges.forEach(edge => {
      const link = edge.node.link.replace(/https:\/\/shechoir.com\/\D*/, '')
      const absolutePath = `${edge.node.slug}`
      const postTemplate = path.resolve(`src/components/post.js`)

      createPage({
        path: link,
        component: postTemplate,
        context: {
          absolutePath,
          id: `${edge.node.id}`
        }
      })
    })
    result.data.allWordpressPage.edges.forEach(edge => {
      const absolutePath = `${edge.node.slug}`
      const postTemplate = path.resolve(`src/components/page.js`)

      createPage({
        path: absolutePath,
        component: postTemplate,
        context: {
          absolutePath,
          id: `${edge.node.id}`
        }
      })
    })
  })
}
