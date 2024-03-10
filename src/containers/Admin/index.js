import PropTypes from 'prop-types'
import React from 'react'

import { SideMenu } from '../../components'
import paths from '../../constants/paths'
import EditProducts from './EditProducts'
import ListProducts from './ListProducts'
import NewProducts from './NewProducts'
import Orders from './Orders'
import { Container, ContainerItens } from './styles'
export function Admin ({ match: { path } }) {
  return (
        <Container>
          <SideMenu path={path}/>
          <ContainerItens>
            {path === paths.Order && <Orders/> }
            {path === paths.Products && <ListProducts/> }
            {path === paths.EditProduct && <EditProducts/> }
            {path === paths.NewProduct && <NewProducts/> }
          </ContainerItens>
        </Container>
  )
}

Admin.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string
  })
}
