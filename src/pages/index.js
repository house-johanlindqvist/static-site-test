import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) =>
  <main>
    <h1>static-site-test</h1>
    <h2>Posts</h2>
    <nav>
      {
        data.allMarkdownRemark.edges.map(({ node }) =>
          <Link to={ node.frontmatter.path }>{ node.frontmatter.title }</Link>
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
            title
            path
          }
        }
      }
    }
  }
`