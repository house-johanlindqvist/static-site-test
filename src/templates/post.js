import React from 'react'
import Helmet from 'react-helmet'

const Post = ({ data }) =>
  <main>
    <Helmet>
      <title>{ data.markdownRemark.frontmatter.title }</title>
    </Helmet>
    <article>
      <h1>{ data.markdownRemark.frontmatter.title }</h1>
      <datetime>{ new Date( data.markdownRemark.frontmatter.date ).toLocaleString('sv-SE') }</datetime>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </article>
  </main>

export default Post

export const pageQuery = graphql`
  query PostPageQuery($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`