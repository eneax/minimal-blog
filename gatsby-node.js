const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

// We want to check if each individual node is a type of markdown
// If so, then we attach a slug to each post
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

// Iterate over each individual post and create a page for each of them
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
          component: path.resolve('./src/posts/PostPage.js'),
          context: {
            slug: node.fields.slug
          }
        })
      })
    })
    resolve()
  })
}





// getNode --> it gets the parent node

/*
basePath --> it's the base path for where the
file is living and in our case it's living in the 'posts' folder
*/

/*
createNodeField --> it's going to attach a field just
like the html and frontmatter on our markdown post
*/

// value --> it's the path where the file will show up
