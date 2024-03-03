import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import Home from '../containers/home'
import Login from '../containers/Login'
import Register from '../containers/Register'
import PrivateRoute from './private-routes'

function RoutesApp () {
  return (
    <Router>
      <Switch>
      <PrivateRoute exact component={Home} path='/'/>
        <Route component={Login} path='/login' />
        <Route component={Register} path='/cadastro' />
      </Switch>
    </Router>
  )
}

export default RoutesApp
