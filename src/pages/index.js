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
                <Link to={ `post/${ node.childMarkdownRemark.frontmatter.slug }` }>{ node.childMarkdownRemark.frontmatter.title }</Link>
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