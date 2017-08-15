const Promise = require(`bluebird`)
const path = require(`path`)

exports.createPages = ({ graphql, boundActionCreators }) => {

  const { createPage } = boundActionCreators

  const postTemplate = path.resolve(`src/templates/post.js`)

  return new Promise((resolve, reject) => {

    resolve(
      graphql(`
        {
          posts: allFile(
            filter:{
              sourceInstanceName:{eq:"posts"},
              extension:{eq:"md"}
            }
          ) {
            edges {
              node {
                childMarkdownRemark {
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
        }
      `
      ).then(result => {

        if (result.errors) {
          reject(new Error(result.errors))
        }

        result.data.posts.edges.forEach(({ node }) => {

          const post = node.childMarkdownRemark

          createPage({
            path: `post/${ post.frontmatter.slug }`,
            component: postTemplate,
            context: {
              slug: post.frontmatter.slug
            }
          })
        })

        return
      })
    )
  })
}