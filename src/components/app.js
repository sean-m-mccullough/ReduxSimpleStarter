import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './header';
import Home from './home';
import requireAuth from './require_authentication';
import Resources from './resources';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/resources" component={requireAuth(Resources)} />
      </div>
    );
  }
}
