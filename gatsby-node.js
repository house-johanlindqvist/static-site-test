const Promise = require(`bluebird`)
const path = require(`path`)

exports.createPages = ({ graphql, boundActionCreators }) => {

  const { createPage } = boundActionCreators

  const postTemplate = path.resolve(`src/templates/post.js`)

  return new Promise((resolve, reject) => {

    resolve(
      graphql(`
        {
          allMarkdownRemark(limit: 1000) {
            edges {
              node {
                html
                frontmatter {
                  slug
                }
              }
            }
          }
        }
      `
      ).then(result => {

        if (result.errors) {
          reject(new Error(result.errors))
        }

        result.data.allMarkdownRemark.edges.forEach(({ node }) => {

          createPage({
            path: `post/${ node.frontmatter.slug }`,
            component: postTemplate,
            context: {
              slug: node.frontmatter.slug
            }
          })
        })

        return
      })
    )
  })
}