const Promise = require(`bluebird`)
const path = require(`path`)

exports.createPages = ({ graphql, boundActionCreators }) => {

  const { createPage } = boundActionCreators

  const postTemplate = path.resolve(`src/templates/post.js`)

  return new Promise((resolve, reject) => {

    resolve(
      graphql(`
        {
          posts: allMarkdownRemark {
            edges {
              node {
                html
                frontmatter {
                  title
                  slug
                  date
                  parent
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

        result.data.posts.edges.forEach(({ node }) => {

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