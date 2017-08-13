import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import '../styles/base.css'

const IndexLayout = ({ children }) =>
  <div>
    <Helmet>
      <title>static-site-test</title>
    </Helmet>
    { children() }
  </div>

IndexLayout.propTypes = {
  children: PropTypes.func
}

export default IndexLayout