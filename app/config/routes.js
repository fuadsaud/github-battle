import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Main from 'components/Main';
import Home from 'components/Home';
const PromptContainer = require('../containers/PromptContainer');
const ConfirmBattleContainer = require('../containers/ConfirmBattleContainer');

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='/playerOne' header='Player One' component={PromptContainer} />
      <Route path='/playerTwo/:playerOne' header='Player Two' component={PromptContainer} />
      <Route path='/battle' component={ConfirmBattleContainer} />
    </Route>
  </Router>
);

module.exports = routes;
