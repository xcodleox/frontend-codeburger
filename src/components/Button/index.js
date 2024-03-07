import PropTypes from 'prop-types'
import React, { children } from 'react'

import ContainerButton from './styles'

export function Button ({ children, ...rest }) {
  return <ContainerButton {... rest}>{ children }</ContainerButton>
}

Button.propTypes = {
  children: PropTypes.string
}
