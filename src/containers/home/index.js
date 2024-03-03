import React from 'react'

import HomeLogo from '../../assets/home-logo.png'
import CategoryCarousel from '../../components/CategoryCarousel'
import OfferCarousel from '../../components/OfferCarousel'
import { Container, HomeImg } from './styles'

function Home () {
  return (
    <Container>
    <HomeImg src={HomeLogo} alt='home-img'/>
    <CategoryCarousel/>
    <OfferCarousel/>
  </Container>

  )
}

export default Home
