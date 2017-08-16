import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) =>
  <main>
    <article>
      <h2>Posts</h2>
      <nav>
        <ul>
          {
            data.posts.edges.map(({ node }, i) =>
              <li key={ i } >
                <Link to={ `post/${ node.frontmatter.slug }` }>{ node.frontmatter.title }</Link>
              </li>
            )
          }
        </ul>
      </nav>
    </article>
  </main>

export default IndexPage

export const pageQuery = graphql`
  query IndexPageQuery {
    posts: allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`