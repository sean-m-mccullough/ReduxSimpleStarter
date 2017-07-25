import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
    {/* <Router>
      <Switch>
        <Route path="/resources" component={requireAuth(Resources)} />
        <Route path="/" component={App} />
      </Switch>
    </Router> */}
  </Provider>
  , document.querySelector('.container'));
