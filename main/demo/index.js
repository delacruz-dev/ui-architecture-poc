import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import App from './../src/index'
import Buritto from '@typeform/buritto'
import Alice from '@typeform/alice'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="builder" component={Buritto}/>
      <Route path="analytics" component={Alice}/>
    </Route>
  </Router>
), document.getElementById('root'))
