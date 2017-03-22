import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { history } from './store'
import App from './components/app'
import Home from './components/home'
import Playlist from './components/playlist'

const Routes = () => (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />

      <Route path="/playlist" component={Playlist} />
    </Route>
  </Router>
);

export default Routes