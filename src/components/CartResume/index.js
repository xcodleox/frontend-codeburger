import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import { useCart } from '../../hooks/CartContext'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { Button } from '../Button'
import { Container, ContainerMae } from './styles'

export function CartResume () {
  const [finalPrice, setFinalPrice] = useState(0)
  const [devileryTax] = useState(5)

  const { cartProduts } = useCart()

  useEffect(() => {
    const sumAllItems = cartProduts.reduce((acc, current) => {
      return current.price * current.quantity + acc
    }, 0)

    setFinalPrice(sumAllItems)
  }, [cartProduts, devileryTax])

  const submitOrder = async () => {
    const order = cartProduts.map(product => {
      return { id: product.id, quantity: product.quantity }
    })

    await toast.promise(api.post('orders', { products: order }), {
      pending: 'Realizando o seu Pedido...',
      success: 'Pedido realizado com sucesso',
      error: 'Falha ao tentar realizar seu pedido!'
    })
  }

  return (
    <ContainerMae>
    <Container>
      <div className='container-top'>
        <h2 className='title'>Resumo do Pedido</h2>
        <p className='items'>Itens</p>
        <p className='items-price'>{formatCurrency(finalPrice)}</p>
        <p className='tax'>Taxa de Entrega</p>
        <p className='tax-price'>{formatCurrency(devileryTax)}</p>
      </div>
      <div className='container-bottom'>
        <p>Total</p>
        <p>{formatCurrency(finalPrice + devileryTax)}</p>
      </div>
    </Container>
    <Button style={{ width: '100%', marginTop: 30 }} onClick={submitOrder}>Finalizar Pedido</Button>
    </ContainerMae>
  )
}
