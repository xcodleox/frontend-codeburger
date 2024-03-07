import PropTypes from 'prop-types'
import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProduts, setCartProduts] = useState([])

  const putProdutsInCart = async product => {
    const cartIndex = cartProduts.findIndex(prd => prd.id === product.id)
    let newCartProducts = []

    if (cartIndex >= 0) {
      newCartProducts = cartProduts

      newCartProducts[cartIndex].quantity = newCartProducts[cartIndex].quantity + 1

      setCartProduts(newCartProducts)
    } else {
      product.quantity = 1
      newCartProducts = [...cartProduts, product]
      setCartProduts(newCartProducts)
    }

    await localStorage.setItem('codeburger:cartInfo', JSON.stringify(newCartProducts))
  }

  const deletedeProducts = async productId => {
    const newCart = cartProduts.filter(product => product.id !== productId)

    setCartProduts(newCart)
  }

  const increaseProducts = async productId => {
    const newCart = cartProduts.map(product => {
      return product.id === productId
        ? {
            ...product,
            quantity: product.quantity + 1
          }
        : product
    })

    setCartProduts(newCart)
    await localStorage.setItem('codeburger:cartInfo', JSON.stringify(newCart))
  }

  const decreaseProducts = async productId => {
    const cartIndex = cartProduts.findIndex(pd => pd.id === productId)
    if (cartProduts[cartIndex].quantity > 1) {
      const newCart = cartProduts.map(product => {
        return product.id === productId
          ? {
              ...product,
              quantity: product.quantity - 1
            }
          : product
      })

      setCartProduts(newCart)
      await localStorage.setItem('codeburger:cartInfo', JSON.stringify(newCart))
    } else {
      deletedeProducts(productId)
    }
  }

  useEffect(() => {
    const loadUserData = async () => {
      const clientCartData = await localStorage.getItem('codeburger:cartInfo')

      if (clientCartData) { setCartProduts(JSON.parse(clientCartData)) }
    }

    loadUserData()
  }, [])

  return (
    <CartContext.Provider value={{
      putProdutsInCart,
      cartProduts,
      increaseProducts,
      decreaseProducts
    }}>
      {children}
    </CartContext.Provider>
  )
}

// ------------------------------------------------------------

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useUser must be used with UserContext')
  }
  return context
}

// ---------------------------------------------

CartProvider.propTypes = {
  children: PropTypes.node
}
