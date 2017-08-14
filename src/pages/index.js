import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) =>
  <main>
    <h2>Posts</h2>
    <nav>
      {
        data.allMarkdownRemark.edges.map(({ node }, i) =>
          <Link key={ i } to={ `post/${ node.frontmatter.slug }` }>{ node.frontmatter.title }</Link>
        )
      }
    </nav>
  </main>

export default IndexPage

export const pageQuery = graphql`
  query IndexPagePosts {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`