import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'

import ProductLogo from '../../assets/HAMBURGER-LOGO.svg'
import { CardProduct } from '../../components'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { Container, ProductImg, CategoryButton, Menu, ProductsContainer } from './styles'

export function Product ({ location: { state } }) {
  let categoryId = 0
  if (state?.categoryId) {
    categoryId = state.categoryId
  }

  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(categoryId)

  useEffect(() => {
    async function loadCategories () {
      const { data } = await api.get('categories')

      const newCategories = [{ id: 0, name: 'Todas' }, ...data]

      setCategories(newCategories)
    }

    async function loadProducts () {
      const { data: allProduct } = await api.get('products')

      const newProducts = allProduct.map(product => {
        return { ...product, formatedPrice: formatCurrency(product.price) }
      })

      setProducts(newProducts)
    }

    loadProducts()
    loadCategories()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products)
    } else {
      const newFilteredProducts = products.filter(
        product => product.category_id === activeCategory
      )

      setFilteredProducts(newFilteredProducts)
    }
  }, [activeCategory, products])

  return (
    <Container>
      <ProductImg src={ProductLogo} alt='home-img' />
      <Menu>
      {categories && categories.map(category => (
        <CategoryButton key={category.id} isActiveCategory={activeCategory === category.id }
        onClick={() => { setActiveCategory(category.id) }}>
          {category.name}
        </CategoryButton>
      ))}
        </Menu>
        <ProductsContainer>
          {filteredProducts && filteredProducts.map(product => (
            <CardProduct key={product.id} product={product}/>
          ))}

        </ProductsContainer>
    </Container>

  )
}

Product.propTypes = {
  location: PropTypes.object
}
