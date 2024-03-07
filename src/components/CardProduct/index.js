import PropTypes from 'prop-types'
import React from 'react'
import { useHistory } from 'react-router-dom/'

import { useCart } from '../../hooks/CartContext'
// import formatCurrency from '../../utils/formatCurrency'
import { Button } from '../Button'
import { Container, ImagemProduct, ProductPrice, ProductName } from './styles'

export function CardProduct ({ product }) {
  const { putProdutsInCart } = useCart()
  const { push } = useHistory()
  return (
    <Container key={product.id}>
        <ImagemProduct src={product.url} alt='imagem do produto'/>
        <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button style={{ margin: 0 }} onClick={() => {
          putProdutsInCart(product)
          push('/carrinho')
        }}>Adicionar</Button>
        </div>
    </Container>
  )
}

CardProduct.propTypes = {
  product: PropTypes.object
}
