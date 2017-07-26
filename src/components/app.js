import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './header';
import Home from './home';
import requireAuth from './require_authentication';
import Resources from './resources';
import Authenticated from './authenticated';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
            <Switch>  
              <Authenticated exact path="/resources" component={Resources}/> 
              <Route exact path="/" component={Home} />
              <Route render={() => {
                return ( <p>Page Not Found</p> );
              }} />
            </Switch>  
        </div>
      </BrowserRouter>
    );
  }
}