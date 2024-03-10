import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import paths from '../constants/paths'
import { Home, Login, Product, Register, Cart, Admin } from '../containers'
import PrivateRoute from './private-routes'

function RoutesApp () {
  return (
    <Router>
      <Switch>
        <Route component={Login} path='/login' />
        <Route component={Register} path='/cadastro' />
        <PrivateRoute exact component={Home} path='/'/>
        <PrivateRoute component={Product} path='/produtos' />
        <PrivateRoute component={Cart} path='/carrinho' />
        <PrivateRoute isAdmin={true} component={Admin} path={paths.Order}/>
        <PrivateRoute isAdmin={true} component={Admin} path={paths.Products}/>
        <PrivateRoute isAdmin={true} component={Admin} path={paths.EditProduct}/>
        <PrivateRoute isAdmin={true} component={Admin} path={paths.NewProduct}/>
      </Switch>
    </Router>
  )
}

export default RoutesApp
