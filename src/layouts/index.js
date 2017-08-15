import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import '../styles/base.css'

import gatsbyLogo from '../assets/svg/gatsby-logo-1.svg'

const IndexLayout = ({ children }) =>
  <div>
    <Helmet>
      <title>static-site-test</title>
    </Helmet>
    <Link to="/">
      <p>static-site-test</p>
    </Link>
    <hr />
    { children() }
    <footer>
      <a href="https://www.gatsbyjs.org/" targe="_blank">
        <img src={ gatsbyLogo } width="30" alt="Powered by GatsbyJS" />
      </a>
    </footer>
  </div>

IndexLayout.propTypes = {
  children: PropTypes.func
}

export default IndexLayout