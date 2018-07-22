const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'posts' // because the markdown files are stored in 'posts' folder
    })
    createNodeField({ // attach a slug to each individual post
      node,
      name: 'slug',
      value: `/posts${slug}`
    })
  }
}

exports.createPages = ({ graphql, boundActionCreators}) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {   // the Promise is where we get our data from
    // it should return an array of pages
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then((result) => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/pages/about.js'),
          context: {
            slug: node.fields.slug
          }
        })
      })
    })
    resolve()
  })
}