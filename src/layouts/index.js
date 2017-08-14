import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import '../styles/base.css'

const IndexLayout = ({ children }) =>
  <div>
    <Helmet>
      <title>static-site-test</title>
    </Helmet>
    <Link to="/">
      <h1>static-site-test</h1>
    </Link>
    { children() }
  </div>

IndexLayout.propTypes = {
  children: PropTypes.func
}

export default IndexLayout