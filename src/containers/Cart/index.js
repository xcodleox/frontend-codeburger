import React from 'react'

import CartLogo from '../../assets/Cart-img.svg'
import { CartItems, CartResume } from '../../components'
import { Container, CartImg, Wrapper } from './styles'

export function Cart () {
  return (
    <Container>
    <CartImg src={CartLogo} alt='Cart-img'/>
    <Wrapper>
    <CartItems/>
    <CartResume/>
    </Wrapper>
  </Container>

  )
}
