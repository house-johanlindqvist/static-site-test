module.exports = {
  siteMetadata: {
    title: 'static-site-test 1'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data/posts`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: []
      }
    },
    'gatsby-plugin-react-helmet'
  ]
}
