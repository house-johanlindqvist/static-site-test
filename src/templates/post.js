import React from 'react'
import Helmet from 'react-helmet'

const PostPage = ({ data }) =>
  <main>
    <Helmet>
      <title>{ data.post.frontmatter.title }</title>
    </Helmet>
    <article>
      <h1>{ data.post.frontmatter.title }</h1>
      <img src={ data.post.frontmatter.image } style={{display:'block',width:'100%',height:'100%'}} />
      <div dangerouslySetInnerHTML={{ __html: data.post.html }} />
    </article>
  </main>

export default PostPage

export const pageQuery = graphql`
  query PostPageQuery($slug: String) {
    post: markdownRemark(
      frontmatter: {
        slug: {eq: $slug}
      }
    ) {
      html
      frontmatter {
        title
        image
      }
    }
  }
`