import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import Login from './Login';

const Root = () => (
  <Router>
    <Switch>
      <Route path="/" component={App} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </Router>
)

export default Root
