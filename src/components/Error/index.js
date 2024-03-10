import PropTypes from 'prop-types'
import React from 'react'

import { ErrorStyle } from './styles'

// eslint-disable-next-line react/prop-types
export function Error ({ children }) {
  return <ErrorStyle>{ children }</ErrorStyle>
}

Error.proptypes = {
  children: PropTypes.string
}
