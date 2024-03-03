import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import OfferImg from '../../assets/OFERTAS.png'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { Container, OfferImagem, ContainerItens, Img, Button } from './styles'

function OfferCarousel () {
  const [products, setProducts] = useState([])
  useEffect(() => {
    async function loadProducts () {
      const { data } = await api.get('products')

      const onlyOffers = data.filter(product => product.offer).map(product => {
        return { ...product, formatedPrice: formatCurrency(product.price) }
      })

      setProducts(onlyOffers)
    }
    loadProducts()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]

  return (
    <Container>
      <OfferImagem src={OfferImg} alt='offer-img' />

      <Carousel itemsToShow={4} style={{ width: '90%' }} breakPoints={breakPoints}>
        {products && products.map(product => (

          <ContainerItens key={product.id}>
            <Img src={product.url} alt='foto das ofertas'/>
            <p>{product.name}</p>
            <p>{product.formatedPrice}</p>
            <Button>Peça agora</Button>
          </ContainerItens>

        ))
        }
      </Carousel>
    </Container>

  )
}

export default OfferCarousel
